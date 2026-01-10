# ✅ READY TO USE - braintube.in@gmail.com

## 🎯 Your Email Configuration

Your fix questions email system is configured to use:

**📧 Email Address:** braintube.in@gmail.com

This email will be used for:
- ✅ Sending all emails (notifications & auto-replies)
- ✅ Receiving admin notifications (when students purchase)
- ✅ Student contact email (shown in auto-replies)

---

## ⚡ 3-Step Setup

### Step 1: Generate Gmail App Password
```
1. Visit: https://myaccount.google.com/apppasswords
2. Sign in: braintube.in@gmail.com
3. Generate 16-character password
4. Copy it (example: abcd efgh ijkl mnop)
```

### Step 2: Create .env File
**Option A - Automatic (Easy):**
```bash
# Just double-click this file:
create-env.bat
```

**Option B - Manual:**
```bash
# Copy the template:
copy .env.example .env

# Then edit .env and replace:
SMTP_PASS=your-16-character-app-password
# with your actual password (NO SPACES):
SMTP_PASS=abcdefghijklmnop
```

### Step 3: Start & Test
```bash
# Start server:
npm run dev

# Open test page:
# http://localhost:5000/pages/test-email.html
```

---

## 📧 Email Flow

```
Student purchases → You receive email at braintube.in@gmail.com
                ↓
       Student receives auto-reply from braintube.in@gmail.com
```

### You Receive:
```
To: braintube.in@gmail.com
Subject: New Fix Questions Purchase - BCV701

Student: John Doe
Email: john@example.com
Subject: BCV701 - Design of Steel Structures
Amount: ₹79
Payment ID: pay_xxxxxxxxxxxxx

⚠️ Send PDF to john@example.com
```

### Student Receives:
```
From: Braintube <braintube.in@gmail.com>
To: john@example.com
Subject: Thank you for your purchase

Thank you for purchasing Fix Questions!
You'll receive the PDF within 24 hours.

Contact: braintube.in@gmail.com
```

---

## 🎓 Active Subjects

Currently configured to send emails for:
- ✅ **BCV701** - Design of Steel Structures
- ✅ **BCV702** - Estimation and Contract Management
- ✅ **BCV703** - Prestressed Concrete

---

## 📁 Quick Reference

| File | Purpose |
|------|---------|
| `create-env.bat` | Double-click to create .env file |
| `YOUR_SETUP_GUIDE.md` | Detailed setup instructions |
| `.env.example` | Pre-configured template |
| `test-email.html` | Test the email system |

---

## ✅ What's Pre-Configured

Your system already has:
✅ Email: braintube.in@gmail.com  
✅ SMTP settings (Gmail)  
✅ Admin email  
✅ Email templates  
✅ Auto-reply system  
✅ Subject configuration  

**You only need:** Gmail App Password

---

## 🔥 Quick Start Now

**The FASTEST way to get started:**

1. **Double-click:** `create-env.bat`
2. **Visit:** https://myaccount.google.com/apppasswords
3. **Generate** App Password for braintube.in@gmail.com
4. **Edit** `.env` file (just created)
5. **Paste** App Password in `SMTP_PASS=` line
6. **Run:** `npm run dev`
7. **Test:** http://localhost:5000/pages/test-email.html

**Time:** ~3 minutes  
**Result:** Full email notification system working!

---

## 🎉 Summary

| Setting | Value |
|---------|-------|
| **Email** | braintube.in@gmail.com |
| **Sends From** | Braintube <braintube.in@gmail.com> |
| **Receives At** | braintube.in@gmail.com |
| **Subjects** | BCV701, BCV702, BCV703 |
| **Setup Time** | 3 minutes |
| **Cost** | Free |

---

**Status:** ✅ Configured  
**Next Step:** Add Gmail App Password to `.env`  
**Documentation:** `YOUR_SETUP_GUIDE.md`

---

Made with ❤️ for Braintube
