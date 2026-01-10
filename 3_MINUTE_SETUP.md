# 🚀 3-MINUTE SETUP FOR braintube.in@gmail.com

```
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║        BRAINTUBE EMAIL NOTIFICATION SYSTEM                 ║
║        Email: braintube.in@gmail.com                       ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

---

## ⏱️ SETUP IN 3 MINUTES

### 📍 STEP 1: Get Gmail App Password (90 seconds)

```
1. Open browser → https://myaccount.google.com/apppasswords

2. Sign in with: braintube.in@gmail.com

3. Click "Select app" → Choose "Mail"

4. Click "Select device" → Choose "Windows Computer"  

5. Click "Generate"

6. COPY THE PASSWORD (16 characters, looks like: abcd efgh ijkl mnop)
   ⚠️ Save it somewhere - you'll need it in Step 2
```

---

### 📍 STEP 2: Create .env File (30 seconds)

**🎯 EASIEST WAY - Double-click this file:**
```
create-env.bat
```

**Then:**
1. Open `.env` file (just created in your VTU folder)
2. Find this line:
   ```
   SMTP_PASS=your-16-character-app-password
   ```
3. Replace with your password (REMOVE ALL SPACES):
   ```
   SMTP_PASS=abcdefghijklmnop
   ```
4. Save the file

✅ **Done!** braintube.in@gmail.com is already configured for everything else.

---

### 📍 STEP 3: Test It (60 seconds)

**Start the server:**
```bash
npm run dev
```

**Open test page in browser:**
```
http://localhost:5000/pages/test-email.html
```

**Fill & Send:**
- Student Email: YOUR_PERSONAL_EMAIL (to see auto-reply)
- Subject: BCV701 (or BCV702/BCV703)
- Click "Send Test Email"

**Check emails:**
- ✅ braintube.in@gmail.com → Receives admin notification
- ✅ YOUR_PERSONAL_EMAIL → Receives auto-reply

---

## 💬 Example Emails You'll Receive

### At braintube.in@gmail.com:

```
═══════════════════════════════════════════════════
From: Braintube <braintube.in@gmail.com>
To: braintube.in@gmail.com
Subject: New Fix Questions Purchase - BCV701
═══════════════════════════════════════════════════

🎓 NEW PURCHASE NOTIFICATION

Student Name:     Rahul Kumar
Student Email:    rahul@gmail.com
Subject:          BCV701 - Design of Steel Structures
Amount:           ₹79
Payment ID:       pay_MgDCkAJ8s2Kl9x
Order ID:         SUB_1736446493000
Date:             10/01/2026, 03:13:55

⚠️ ACTION REQUIRED:
Please send the Fix Questions PDF for BCV701 
to rahul@gmail.com within 24 hours.

═══════════════════════════════════════════════════
```

### Student Receives:

```
═══════════════════════════════════════════════════
From: Braintube <braintube.in@gmail.com>
To: rahul@gmail.com
Subject: Thank you for your purchase - BCV701
═══════════════════════════════════════════════════

🎉 THANK YOU FOR YOUR PURCHASE!

Dear Rahul Kumar,

Your payment for BCV701 Fix Questions was successful!

📚 Order Summary:
• Subject: BCV701 - Design of Steel Structures
• Amount Paid: ₹79
• Payment ID: pay_MgDCkAJ8s2Kl9x
• Order ID: SUB_1736446493000

What happens next?
1. Our team will verify your payment ✓
2. You'll receive the PDF within 24 hours 📧
3. PDF will be sent to: rahul@gmail.com

Need help? Contact us at braintube.in@gmail.com

═══════════════════════════════════════════════════
Braintube - Your VTU Academic Platform
═══════════════════════════════════════════════════
```

---

## 🎯 Your Configuration

```
┌─────────────────────────────────────────┐
│  EMAIL SETTINGS                         │
├─────────────────────────────────────────┤
│                                         │
│  Send From:  braintube.in@gmail.com    │
│  Receive At: braintube.in@gmail.com    │
│  Contact:    braintube.in@gmail.com    │
│                                         │
│  ✅ Already configured in code          │
│  ⚠️  You just need: Gmail App Password  │
│                                         │
└─────────────────────────────────────────┘
```

---

## 🎓 Subjects With Email Notifications

```
✅ BCV701 - Design of Steel Structures
✅ BCV702 - Estimation and Contract Management
✅ BCV703 - Prestressed Concrete
```

When students buy these subjects:
1. You get instant email notification
2. They get auto-reply confirmation
3. All automated!

---

## 🔧 Your .env File Preview

```env
# ============================================
#   YOUR EMAIL CONFIGURATION
# ============================================

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=braintube.in@gmail.com          ✅ Already set
SMTP_PASS=PASTE_YOUR_PASSWORD_HERE        ⚠️  ADD THIS
EMAIL_FROM=Braintube <braintube.in@gmail.com>  ✅ Already set
ADMIN_EMAIL=braintube.in@gmail.com        ✅ Already set
```

**You ONLY need to add:** Your Gmail App Password

---

## ❓ Common Questions

### Q: Where do I get the App Password?
**A:** https://myaccount.google.com/apppasswords (sign in with braintube.in@gmail.com)

### Q: What if I can't generate App Password?
**A:** Enable 2-Factor Authentication first at https://myaccount.google.com/security

### Q: Do I need to change any other settings?
**A:** No! Everything else is already configured for braintube.in@gmail.com

### Q: How do I know it's working?
**A:** You'll receive test emails at braintube.in@gmail.com

---

## ✅ Quick Checklist

```
□ Generated Gmail App Password
□ Created .env file (run create-env.bat)
□ Added password to SMTP_PASS in .env
□ Started server (npm run dev)
□ Tested at http://localhost:5000/pages/test-email.html
□ Received email at braintube.in@gmail.com
□ Student received auto-reply
```

---

## 🎉 YOU'RE DONE!

Once all checkboxes are ✅, your email system is **LIVE**!

Every purchase automatically:
- 📧 Notifies braintube.in@gmail.com
- 📧 Sends auto-reply to student
- 💾 Saves purchase record
- ⚡ Takes < 1 second

---

```
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║   📧 braintube.in@gmail.com                                ║
║   ✅ Pre-configured                                        ║
║   ⏱️  3-minute setup                                       ║
║   💰 Free                                                  ║
║   🚀 Production ready                                      ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

**Need help?** Read: `YOUR_SETUP_GUIDE.md`
