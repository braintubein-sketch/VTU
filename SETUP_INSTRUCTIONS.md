# 🚀 READY TO USE - Fix Questions Email System

## ✅ Everything is Set Up!

Your fix questions email notification system is **100% ready** to use. Here's what you need to do:

---

## 📋 Setup Steps (DO THIS FIRST)

### 1️⃣ Get Gmail App Password (2 minutes)

1. **Enable 2-Factor Authentication** (if not already enabled):
   - Visit: https://myaccount.google.com/security
   - Find "2-Step Verification" and enable it

2. **Generate App Password**:
   - Visit: https://myaccount.google.com/apppasswords
   - Select: **Mail** and **Windows Computer**
   - Click **Generate**
   - **Copy the 16-character password** (e.g., `abcd efgh ijkl mnop`)

### 2️⃣ Create Your .env File (1 minute)

Open PowerShell/Command Prompt in the VTU folder and run:

```powershell
# Copy the example file
copy .env.example .env
```

Then open `.env` file in your text editor and update these **3 lines**:

```env
SMTP_USER=YOUR_GMAIL_HERE@gmail.com
SMTP_PASS=YOUR_16_CHAR_PASSWORD_HERE
ADMIN_EMAIL=YOUR_ADMIN_EMAIL_HERE@gmail.com
```

**Example**:
```env
SMTP_USER=raghav@gmail.com
SMTP_PASS=abcdefghijklmnop
ADMIN_EMAIL=raghav@gmail.com
```

⚠️ **Important**: 
- Use your actual Gmail address
- Paste the App Password WITHOUT spaces
- Set admin email to where you want to receive notifications

### 3️⃣ Install Dependencies (if needed)

If you haven't installed npm packages yet:

```powershell
# Run this in PowerShell (may need to run as Administrator)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Then install
npm install
```

### 4️⃣ Start the Server

```powershell
npm run dev
```

You should see:
```
╔═══════════════════════════════════════════════════════════╗
║   🎓 Braintube Server                                     ║
║   Port: 5000                                              ║
╚═══════════════════════════════════════════════════════════╝
```

---

## 🧪 TEST IT NOW (2 minutes)

### Option 1: Test Page (Recommended)

1. Keep server running
2. Open browser: **http://localhost:5000/pages/test-email.html**
3. Fill in the form:
   - **Student Name**: Your Name
   - **Student Email**: YOUR EMAIL (to receive auto-reply)
   - **Select Subject**: Choose BCV701, BCV702, or BCV703
   - **Payment ID**: Leave default or change
   - **Amount**: 79
4. Click **"📧 Send Test Email"**
5. **Check your inbox!** You should receive:
   - Admin notification (at ADMIN_EMAIL)
   - Student auto-reply (at Student Email)

### Option 2: Real Subject Page

1. Open: **http://localhost:5000/pages/subject.html?branch=cv&sem=7&code=BCV701**
2. The page should auto-open "Fix Questions" tab
3. Click **"💳 Buy Now - ₹79"**
4. Fill in student details
5. Click **"Proceed to Payment"**
6. Complete test payment (Razorpay opens)
7. Check emails!

---

## 📧 What Emails Look Like

### ✅ You (Admin) Will Receive:

```
From: Braintube <your-email@gmail.com>
To: your-admin-email@gmail.com
Subject: New Fix Questions Purchase - BCV701

───────────────────────────────────────
🎓 Braintube - New Purchase
───────────────────────────────────────

Purchase Details:
• Student Name: John Doe
• Email: john@gmail.com
• Subject: BCV701 - Design of Steel Structures
• Amount: ₹79
• Payment ID: pay_xxxxxxxxxxxxx
• Order ID: SUB_1736446493000

⚠️ ACTION REQUIRED:
Send Fix Questions PDF to john@gmail.com
```

### ✅ Student Will Receive:

```
From: Braintube <your-email@gmail.com>
To: john@gmail.com
Subject: Thank you for your purchase - BCV701 Fix Questions

───────────────────────────────────────
🎉 THANK YOU!
───────────────────────────────────────

Dear John Doe,

Your payment for BCV701 Fix Questions was successful!

📚 Order Summary:
• Subject: BCV701 - Design of Steel Structures
• Amount: ₹79
• Payment ID: pay_xxxxxxxxxxxxx
• Order ID: SUB_1736446493000

What happens next?
1. We verify your payment
2. You receive PDF within 24 hours
3. PDF sent to john@gmail.com
```

---

## 🎯 Which Subjects Have Fix Questions?

Currently configured:
- ✅ **BCV701** - Design of Steel Structures
- ✅ **BCV702** - Estimation and Contract Management
- ✅ **BCV703** - Prestressed Concrete

(These automatically show "Buy Now" button with email notifications)

---

## ❓ Troubleshooting

### "Email not configured" in console
**Fix**: Create `.env` file with your Gmail credentials

### Emails not sending
**Fix**: 
1. Check `.env` has correct email and password
2. No spaces in App Password
3. Restart server after changing `.env`

### Can't generate App Password
**Fix**: Enable 2-Factor Authentication first at https://myaccount.google.com/security

### PowerShell script execution error
**Fix**: Run PowerShell as Administrator:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## 📁 Important Files

| File | Purpose |
|------|---------|
| `.env` | **YOUR CREDENTIALS** (you create this) |
| `.env.example` | Template for .env |
| `QUICK_START.md` | Quick setup guide |
| `IMPLEMENTATION_SUMMARY.md` | Complete documentation |
| `FIX_QUESTIONS_EMAIL_SETUP.md` | Detailed email setup |
| `test-email.html` | Test page |

---

## 🔒 Security

✅ Your `.env` file is already in `.gitignore`
✅ Your credentials won't be committed to Git
✅ App Password is safer than your Gmail password
✅ You can revoke App Password anytime

---

## ✅ Checklist

Before you're done, verify:

- [ ] Created `.env` file
- [ ] Added Gmail address to `SMTP_USER`
- [ ] Added 16-char App Password to `SMTP_PASS`
- [ ] Added admin email to `ADMIN_EMAIL`
- [ ] Started server with `npm run dev`
- [ ] Tested at http://localhost:5000/pages/test-email.html
- [ ] Received admin notification email
- [ ] Received student auto-reply email
- [ ] Both emails look professional (HTML formatted)

---

## 🎉 You're Done!

If all checklist items are ✅, then:

**Your fix questions email system is LIVE and WORKING!** 🚀

Every time a student purchases fix questions:
1. You get emailed immediately
2. They get auto-reply confirmation
3. All details are saved
4. Everything is automated

---

## 📞 Need Help?

1. Check server console for errors
2. Look in spam folder for emails
3. Verify `.env` file exists and has correct values
4. Try test page first before real purchases
5. Check `IMPLEMENTATION_SUMMARY.md` for detailed info

---

**Status**: Ready to Use ✅
**Setup Time**: ~5 minutes
**Works For**: BCV701, BCV702, BCV703, and any subject with hasFix:true
**Emails Per Purchase**: 2 (admin + student)
**Cost**: Free with Gmail
