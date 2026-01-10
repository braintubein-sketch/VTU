# 🎯 YOUR PERSONALIZED SETUP GUIDE
# Email: braintube.in@gmail.com

## ⚡ QUICK SETUP (3 Steps - Takes 3 Minutes)

### STEP 1: Generate Gmail App Password (1 minute)

1. **Go to App Passwords page:**
   👉 https://myaccount.google.com/apppasswords

2. **Sign in with:**
   📧 braintube.in@gmail.com

3. **If you see "2-Step Verification Required":**
   - First enable 2-Factor Authentication at: https://myaccount.google.com/security
   - Then return to step 1

4. **Generate the password:**
   - Select app: **Mail**
   - Select device: **Windows Computer**
   - Click **Generate**

5. **Copy the 16-character password**
   - Example: `abcd efgh ijkl mnop`
   - ⚠️ **Save this password** - you'll need it in Step 2

---

### STEP 2: Create Your .env File (1 minute)

1. **Copy the example file:**
   ```bash
   copy .env.example .env
   ```

2. **Open `.env` in notepad or VS Code**

3. **Find this line:**
   ```env
   SMTP_PASS=your-16-character-app-password
   ```

4. **Replace it with your App Password (NO SPACES):**
   ```env
   SMTP_PASS=abcdefghijklmnop
   ```
   *(Use your actual 16-char password, removing all spaces)*

5. **Save the file**

✅ **That's it!** The email `braintube.in@gmail.com` is already configured for:
   - Sending emails (SMTP_USER)
   - Receiving admin notifications (ADMIN_EMAIL)
   - Auto-reply sender (EMAIL_FROM)

---

### STEP 3: Start Server & Test (1 minute)

1. **Start the server:**
   ```bash
   npm run dev
   ```

2. **You should see:**
   ```
   ╔═══════════════════════════════════════════════════════════╗
   ║   🎓 Braintube Server                                     ║
   ║   Port: 5000                                              ║
   ╚═══════════════════════════════════════════════════════════╝
   ```

3. **Open test page:**
   👉 http://localhost:5000/pages/test-email.html

4. **Fill the form:**
   - **Student Email:** Use your personal email (to see the auto-reply)
   - **Select Subject:** BCV701, BCV702, or BCV703
   - Click **"📧 Send Test Email"**

5. **Check your emails:**
   - ✅ **braintube.in@gmail.com** receives: Admin notification
   - ✅ **Your email** receives: Student auto-reply

---

## 📧 What Emails Will Look Like

### Email 1: You Receive at braintube.in@gmail.com
```
From: Braintube <braintube.in@gmail.com>
To: braintube.in@gmail.com
Subject: New Fix Questions Purchase - BCV701

╔═══════════════════════════════════════════════════╗
║   🎓 Braintube                                    ║
║   New Fix Questions Purchase                      ║
╚═══════════════════════════════════════════════════╝

Purchase Details:
-----------------
Student Name:     Rahul Sharma
Email:            rahul@gmail.com
Subject Code:     BCV701
Subject Name:     Design of Steel Structures
Amount:           ₹79
Payment ID:       pay_xxxxxxxxxxxxx
Submission ID:    SUB_1736446493000
Date & Time:      10/01/2026, 03:13:55

⚠️ Action Required:
Please send the Fix Questions PDF for BCV701 to rahul@gmail.com
```

### Email 2: Student Receives Auto-Reply
```
From: Braintube <braintube.in@gmail.com>
To: rahul@gmail.com
Subject: Thank you for your purchase - BCV701 Fix Questions

╔═══════════════════════════════════════════════════╗
║   🎉 THANK YOU FOR YOUR PURCHASE!                 ║
╚═══════════════════════════════════════════════════╝

Dear Rahul Sharma,

Thank you for purchasing Fix Questions from Braintube!

📚 Order Summary:
• Subject: BCV701 - Design of Steel Structures
• Amount Paid: ₹79
• Payment ID: pay_xxxxxxxxxxxxx
• Order ID: SUB_1736446493000

What happens next?
1. Our team will verify your payment
2. You will receive the Fix Questions PDF within 24 hours
3. The PDF will be sent to rahul@gmail.com

Need help? Contact us at braintube.in@gmail.com
```

---

## 🎯 Your .env File Should Look Like This

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=braintube.in@gmail.com
SMTP_PASS=abcdefghijklmnop                    ← PASTE YOUR 16-CHAR PASSWORD HERE
EMAIL_FROM=Braintube <braintube.in@gmail.com>
ADMIN_EMAIL=braintube.in@gmail.com
```

---

## 🔧 What's Already Configured

✅ **Email Address:** braintube.in@gmail.com  
✅ **Sends From:** Braintube <braintube.in@gmail.com>  
✅ **Receives At:** braintube.in@gmail.com  
✅ **Contact Email:** braintube.in@gmail.com  
✅ **Subjects:** BCV701, BCV702, BCV703  

**You ONLY need to add:** Gmail App Password in `.env`

---

## 🐛 Troubleshooting

### "Email not configured" in console
**Fix:** Make sure you created `.env` file and added the App Password

### Emails not sending
**Fix:** 
1. Check App Password is correct (no spaces!)
2. Restart server after updating `.env`
3. Make sure 2FA is enabled on braintube.in@gmail.com

### Can't generate App Password
**Fix:** Enable 2-Factor Authentication first at https://myaccount.google.com/security

---

## ✅ Quick Checklist

- [ ] Generated App Password from Google
- [ ] Created `.env` file (copy from .env.example)
- [ ] Pasted App Password in SMTP_PASS (no spaces)
- [ ] Started server with `npm run dev`
- [ ] Tested at http://localhost:5000/pages/test-email.html
- [ ] Received admin email at braintube.in@gmail.com
- [ ] Received student auto-reply at test email
- [ ] Both emails are HTML formatted

---

## 🎉 Done!

Once all checklist items are ✅, your email system is LIVE!

Every purchase of BCV701, BCV702, or BCV703 will:
1. Send notification to **braintube.in@gmail.com** ✉️
2. Send auto-reply to student ✉️
3. Both emails beautifully formatted in HTML ✨

---

**Your Email:** braintube.in@gmail.com  
**Setup Time:** ~3 minutes  
**Cost:** Free  
**Status:** Ready to Configure
