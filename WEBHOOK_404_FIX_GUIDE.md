# 🚨 Production Webhook 404 - Root-Cause Analysis & Fix Guide

**URL in Question:** `https://braintube.site/api/payments/webhook`  
**Error:** HTTP 404 Not Found  
**Impact:** Payment confirmations not reaching backend, webhook disabled after final retry

---

## 📋 Executive Summary

Your webhook URL returns 404, but your code at `server/routes/payments.js` (line 308) has a valid `router.post('/webhook', ...)` handler. This indicates the request **never reaches your Node.js application**. The issue is in the infrastructure layer between Razorpay and your Express server.

---

## 🔍 ROOT-CAUSE ANALYSIS

### 1. **Your Architecture Analysis**

Based on your codebase:
```
braintube.site (GitHub Pages / Static) → Front-end
braintube-api.onrender.com → Backend API
```

**🔴 CRITICAL FINDING:** Your webhook URL `https://braintube.site/api/payments/webhook` points to your **STATIC SITE (GitHub Pages)**, NOT your **API server on Render**.

- Your `render.yaml` deploys the API to `braintube-api.onrender.com`
- Your `CNAME` file (client directory) points `braintube.site` to GitHub Pages
- GitHub Pages **DOES NOT** proxy `/api/*` routes to your backend

### 2. **Why 404 Occurs**

| What Razorpay sends | Where it goes | Result |
|---------------------|---------------|--------|
| POST to `https://braintube.site/api/payments/webhook` | GitHub Pages static hosting | 404 (no such file exists) |

GitHub Pages serves static files. There's no `/api/payments/webhook.html` or similar, so it returns 404.

---

## 🛠️ IMMEDIATE FIXES

### FIX #1: Update Webhook URL in Razorpay Dashboard (PRIMARY FIX)

**Go to:** Razorpay Dashboard → Settings → Webhooks → Edit Webhook

**Change FROM:**
```
https://braintube.site/api/payments/webhook
```

**Change TO:**
```
https://braintube-api.onrender.com/api/payments/webhook
```

This is your **CORRECT** webhook URL pointing directly to your Render-hosted Node.js backend.

---

### FIX #2: Verify Your Backend is Actually Running

Run this command to test your backend webhook endpoint:

```powershell
# Test if webhook endpoint exists and accepts POST
curl -X POST https://braintube-api.onrender.com/api/payments/webhook -H "Content-Type: application/json" -d '{}'
```

**Expected Response:** 
- `400 Bad Request` with signature error = ✅ Endpoint works
- `404 Not Found` = ❌ Backend not deployed correctly

You can also test via browser for GET (should return 404 for GET, but confirms route):
```
https://braintube-api.onrender.com/api/health
```

---

### FIX #3: Ensure Render Service is Active

Render's free tier **spins down after 15 minutes of inactivity**. When Razorpay sends a webhook:

1. Request hits cold Render service
2. Service takes 15-60 seconds to wake up
3. Razorpay times out and retries
4. After multiple failures → webhook disabled

**Solutions:**

**Option A: Keep Service Warm (Free)**
Use a free cron service like [UptimeRobot](https://uptimerobot.com/) or [cron-job.org](https://cron-job.org):
- Monitor URL: `https://braintube-api.onrender.com/api/health`
- Interval: Every 14 minutes
- This prevents the service from sleeping

**Option B: Upgrade Render Plan**
Render Starter plan ($7/month) keeps the service always running.

---

## 🔧 CODE IMPROVEMENTS FOR WEBHOOK RELIABILITY

### Update 1: Add Raw Body Parsing for Webhook Signature Verification

Razorpay sends raw JSON, but `express.json()` parses it. We need the raw body for signature verification.

**Update `server/index.js`:**

```javascript
// BEFORE body parsing middleware, add raw body capture for webhooks
app.use('/api/payments/webhook', express.raw({ type: 'application/json' }));

// Then your existing JSON parsing
app.use(express.json({ limit: '10mb' }));
```

**Update `server/routes/payments.js` webhook handler:**

```javascript
// Webhook handler (Production reliability)
router.post('/webhook', async (req, res) => {
    // IMMEDIATELY acknowledge receipt to prevent timeout
    // (We'll process async after)
    
    const startTime = Date.now();
    console.log(`[WEBHOOK] Received at ${new Date().toISOString()}`);
    
    try {
        const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
        
        if (!secret) {
            console.error('[WEBHOOK] RAZORPAY_WEBHOOK_SECRET not configured!');
            // Still return 200 to prevent webhook disabling
            return res.status(200).json({ status: 'ok', warning: 'Secret not configured' });
        }
        
        const signature = req.headers['x-razorpay-signature'];
        
        if (!signature) {
            console.warn('[WEBHOOK] No signature header present');
            return res.status(200).json({ status: 'ok', warning: 'No signature' });
        }
        
        // Get raw body for signature verification
        const rawBody = req.body instanceof Buffer 
            ? req.body.toString('utf8') 
            : JSON.stringify(req.body);
        
        // Verify webhook signature
        const expectedSignature = crypto
            .createHmac('sha256', secret)
            .update(rawBody)
            .digest('hex');

        if (signature !== expectedSignature) {
            console.error('[WEBHOOK] Signature mismatch!');
            console.error(`[WEBHOOK] Expected: ${expectedSignature}`);
            console.error(`[WEBHOOK] Received: ${signature}`);
            // Return 200 to prevent retries (security handled by signature check)
            return res.status(200).json({ status: 'ok', verified: false });
        }

        // Parse body if it's a buffer
        const payload = req.body instanceof Buffer 
            ? JSON.parse(req.body.toString('utf8'))
            : req.body;

        const event = payload.event;
        const payment = payload.payload?.payment?.entity;
        const orderId = payment?.order_id;

        console.log(`[WEBHOOK] Event: ${event}, Order: ${orderId}`);

        // Process asynchronously after quick response
        setImmediate(async () => {
            try {
                if (event === 'order.paid' || event === 'payment.captured') {
                    // Your fulfillment logic here
                    console.log(`[WEBHOOK] Processing payment for order ${orderId}`);
                    
                    const order = orders.get(orderId);
                    if (order && order.status !== 'paid') {
                        order.status = 'paid';
                        order.paymentId = payment.id;
                        order.webhookProcessedAt = new Date().toISOString();
                        orders.set(orderId, order);
                        
                        // Trigger fulfillment (email, etc.)
                        console.log(`[WEBHOOK] Fulfillment triggered for ${orderId}`);
                    }
                }
            } catch (asyncError) {
                console.error('[WEBHOOK] Async processing error:', asyncError);
            }
        });

        // Respond quickly
        const responseTime = Date.now() - startTime;
        console.log(`[WEBHOOK] Responded in ${responseTime}ms`);
        
        return res.status(200).json({ status: 'ok', processed: true });
        
    } catch (error) {
        console.error('[WEBHOOK] Error:', error);
        // ALWAYS return 200 to prevent webhook disabling
        return res.status(200).json({ status: 'ok', error: 'processing_error' });
    }
});
```

---

## 🌐 FRAMEWORK-SPECIFIC WEBHOOK HANDLERS

### Node.js / Express (Your Stack)

Above code applies. Key points:
- Always return 200 OK immediately
- Process async with `setImmediate()`
- Log everything for debugging
- Use raw body for signature verification

### Laravel (PHP)

```php
// routes/api.php
Route::post('/payments/webhook', [PaymentController::class, 'handleWebhook']);

// app/Http/Controllers/PaymentController.php
public function handleWebhook(Request $request)
{
    // Log immediately
    Log::info('Webhook received', ['headers' => $request->headers->all()]);
    
    $payload = $request->getContent();
    $signature = $request->header('x-razorpay-signature');
    $secret = config('services.razorpay.webhook_secret');
    
    $expectedSignature = hash_hmac('sha256', $payload, $secret);
    
    if (!hash_equals($expectedSignature, $signature ?? '')) {
        Log::warning('Invalid webhook signature');
        return response()->json(['status' => 'ok'], 200); // Still 200!
    }
    
    $event = json_decode($payload, true);
    
    // Queue for async processing
    ProcessRazorpayWebhook::dispatch($event);
    
    return response()->json(['status' => 'ok'], 200);
}

// Disable CSRF for webhook
// app/Http/Middleware/VerifyCsrfToken.php
protected $except = [
    'api/payments/webhook',
];
```

### Core PHP

```php
<?php
// api/payments/webhook.php

header('Content-Type: application/json');

// Log everything
$logFile = __DIR__ . '/webhook.log';
file_put_contents($logFile, date('Y-m-d H:i:s') . " - Webhook hit\n", FILE_APPEND);

// Get raw input
$rawPayload = file_get_contents('php://input');
$signature = $_SERVER['HTTP_X_RAZORPAY_SIGNATURE'] ?? '';
$secret = getenv('RAZORPAY_WEBHOOK_SECRET');

// Verify signature
$expectedSignature = hash_hmac('sha256', $rawPayload, $secret);

if (!hash_equals($expectedSignature, $signature)) {
    file_put_contents($logFile, "Invalid signature\n", FILE_APPEND);
    http_response_code(200); // ALWAYS 200
    echo json_encode(['status' => 'ok', 'verified' => false]);
    exit;
}

$payload = json_decode($rawPayload, true);
$event = $payload['event'] ?? '';

file_put_contents($logFile, "Event: $event\n", FILE_APPEND);

// Process
switch ($event) {
    case 'order.paid':
    case 'payment.captured':
        // Your fulfillment logic
        break;
}

http_response_code(200);
echo json_encode(['status' => 'ok']);
```

---

## 🖥️ SERVER & HOSTING CHECKS

### Render.com Specific Checks

| Check | Command/Action | Expected |
|-------|---------------|----------|
| Service Status | Render Dashboard → Services | "Running" (not sleeping) |
| Deploy Logs | Render Dashboard → Logs | No errors during deploy |
| Environment Variables | Render Dashboard → Environment | `RAZORPAY_WEBHOOK_SECRET` set |
| Service URL | Check Settings | `braintube-api.onrender.com` |

### Common 404 Causes Even When Code is Correct

| Cause | Check | Fix |
|-------|-------|-----|
| **Wrong URL** | Compare Razorpay config vs actual API URL | Use `braintube-api.onrender.com` |
| **Route not registered** | Check `app.use('/api/payments', paymentRoutes)` | Ensure route is mounted |
| **Case sensitivity** | `/Webhook` vs `/webhook` | Use exact case |
| **Trailing slash** | `/webhook/` vs `/webhook` | Try both |
| **Service sleeping** | Ping health endpoint | Set up keep-alive |
| **Deployment pending** | Check deploy status | Wait for deploy completion |
| **Build errors** | Check build logs | Fix any npm install errors |
| **Route order** | Check if catch-all defined before API routes | Move catch-all to end |

### Your Code Has This Issue:

```javascript
// Line 166 in server/index.js
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});
```

This catch-all is **AFTER** your API routes, which is correct. ✅

---

## ✅ VERIFICATION CHECKLIST

Run through this checklist to confirm webhook will never fail again:

### Pre-Deployment

- [ ] Webhook URL points to: `https://braintube-api.onrender.com/api/payments/webhook`
- [ ] `RAZORPAY_WEBHOOK_SECRET` is set in Render environment variables
- [ ] Same secret is configured in Razorpay Dashboard

### Post-Deployment

- [ ] Manual test: `curl -X POST https://braintube-api.onrender.com/api/payments/webhook -d '{}'`
- [ ] Health check works: `curl https://braintube-api.onrender.com/api/health`
- [ ] Razorpay test webhook succeeds (Dashboard → Webhooks → Test)

### Ongoing Monitoring

- [ ] UptimeRobot monitoring `https://braintube-api.onrender.com/api/health` every 14 min
- [ ] Check Render logs after each webhook: `Logs → Filter by "WEBHOOK"`
- [ ] Set up alerts for 5xx errors in Render

---

## 🛡️ BEST PRACTICES TO PREVENT FUTURE AUTO-DISABLE

### 1. Always Return 200 OK

Even on errors, return HTTP 200 and log the error. This prevents Razorpay from disabling your webhook.

```javascript
// Even on error:
return res.status(200).json({ status: 'ok', error: 'logged_for_investigation' });
```

### 2. Respond Within 5 Seconds

Razorpay times out after 5-30 seconds. Process async:

```javascript
// Quick response
res.status(200).json({ status: 'ok' });

// Process later
setImmediate(() => {
    // Heavy operations here
});
```

### 3. Implement Idempotency

Process same event only once:

```javascript
const processedEvents = new Set();

router.post('/webhook', (req, res) => {
    const eventId = req.body.payload?.payment?.entity?.id;
    
    if (processedEvents.has(eventId)) {
        return res.status(200).json({ status: 'ok', duplicate: true });
    }
    
    processedEvents.add(eventId);
    // Process...
});
```

### 4. Secondary Verification (Fallback)

If webhook fails, verify via polling:

```javascript
// In client, after payment success
async function verifyPaymentWithRetry(orderId, retries = 5) {
    for (let i = 0; i < retries; i++) {
        const response = await fetch(`/api/payments/verify`, {
            method: 'POST',
            body: JSON.stringify({ orderId })
        });
        
        if (response.ok) {
            const data = await response.json();
            if (data.status === 'paid') return true;
        }
        
        await new Promise(r => setTimeout(r, 2000)); // Wait 2s
    }
    return false;
}
```

### 5. Logging Strategy

```javascript
// Structured logging for debugging
console.log(JSON.stringify({
    level: 'info',
    type: 'webhook',
    event: event,
    orderId: orderId,
    timestamp: new Date().toISOString(),
    source: 'razorpay',
    responseTime: Date.now() - startTime
}));
```

---

## 📊 ACTION PLAN

### Immediate (Next 30 Minutes)

1. **Login to Razorpay Dashboard** → Settings → Webhooks
2. **Edit/Create Webhook** with URL: `https://braintube-api.onrender.com/api/payments/webhook`
3. **Enable events:** `payment.captured`, `order.paid`
4. **Copy webhook secret** and add to Render environment variables
5. **Redeploy** Render service

### Short-Term (Today)

6. **Set up UptimeRobot** to ping health endpoint every 14 minutes
7. **Test with Razorpay Test Mode** - make a test payment
8. **Verify logs** show webhook received

### Long-Term

9. **Consider upgrading** Render to paid tier for always-on
10. **Implement database** for order storage instead of in-memory Map
11. **Add monitoring dashboard** (Render Metrics + external APM)

---

## 🔗 Quick Links

- [Razorpay Webhook Documentation](https://razorpay.com/docs/webhooks/)
- [Render Environment Variables](https://render.com/docs/environment-variables)
- [UptimeRobot Free Account](https://uptimerobot.com/)

---

*Document generated: 2026-01-17 | For: braintube.site webhook recovery*
