# Quick Start Guide - Fix Questions Email Notifications

## ✅ What's Been Set Up

The fix questions feature is now fully configured with email notifications for:
- **BCV701** - Design of Steel Structures
- **BCV702** - Estimation and Contract Management  
- **BCV703** - Prestressed Concrete
- **Any other subject** with `hasFix: true` in data.js

## 🚀 Quick Setup (5 minutes)

### 1. Get Your Gmail App Password

1. Open: https://myaccount.google.com/apppasswords
2. Sign in to your Google Account
3. Click "Select app" → Choose "Mail"
4. Click "Select device" → Choose "Windows Computer"
5. Click "Generate"
6. **Copy the 16-character password** (looks like: `abcd efgh ijkl mnop`)

### 2. Create .env File

```bash
# Copy the example file
copy .env.example .env
```

### 3. Edit .env File

Open `.env` and update these 3 lines:

```env
SMTP_USER=your-email@gmail.com           # Your Gmail address
SMTP_PASS=abcdefghijklmnop              # The 16-character password (no spaces)
ADMIN_EMAIL=your-admin-email@gmail.com   # Where you want to receive notifications
```

### 4. Install & Run

```bash
# Install dependencies (if not already done)
npm install

# Start the server
npm run dev
```

You should see:
```
╔═══════════════════════════════════════════════════════════╗
║   🎓 Braintube Server                                     ║
║   Environment: development                                ║
║   Port: 5000                                              ║
║   URL: http://localhost:5000                              ║
╚═══════════════════════════════════════════════════════════╝
```

## 🧪 Test It Now

**Option 1: Use the Test Page**
1. Open: http://localhost:5000/pages/test-email.html
2. Fill in the form:
   - Enter a student email (YOUR email to receive auto-reply)
   - Select a subject (BCV701, BCV702, or BCV703)
   - Click "Send Test Email"
3. Check both emails:
   - **Admin Email**: Should receive purchase notification
   - **Student Email**: Should receive auto-reply

**Option 2: Test from Subject Page**
1. Open: http://localhost:5000/pages/subject.html?branch=cv&sem=7&code=BCV701
2. Click "💳 Buy Now - ₹79"
3. Fill in student details
4. Complete the test payment

## 📧 What Emails Look Like

### Admin Receives:
```
Subject: New Fix Questions Purchase - BCV701

📚 Purchase Details:
Student Name: John Doe
Email: john@gmail.com
Subject Code: BCV701
Subject Name: Design of Steel Structures
Amount: ₹79
Payment ID: pay_xxxxxxxxxxxxx
```

### Student Receives:
```
Subject: Thank you for your purchase - BCV701 Fix Questions

🎉 Thank You for Your Purchase!

Dear John Doe,

Thank you for purchasing Fix Questions from Braintube!

📚 Order Summary:
Subject: BCV701 - Design of Steel Structures
Amount Paid: ₹79
Payment ID: pay_xxxxxxxxxxxxx

What happens next?
1. Our team will verify your payment
2. You will receive the Fix Questions PDF within 24 hours
3. The PDF will be sent to this email address
```

## 🎯 How It Works

When a student purchases fix questions:

1. **Student fills form** on subject page
2. **Payment processed** via Razorpay
3. **Frontend submits** to `/api/fix-questions/submit`
4. **Backend sends 2 emails**:
   - Admin notification ✅
   - Student auto-reply ✅
5. **Thank you page** shown to student

## 📝 Files Created/Modified

### New Files:
- `server/routes/fixQuestions.js` - Email handling route
- `client/pages/test-email.html` - Test page
- `FIX_QUESTIONS_EMAIL_SETUP.md` - Detailed guide
- `QUICK_START.md` - This file

### Modified Files:
- `server/index.js` - Added fix-questions route
- `client/pages/subject.html` - Added email submission
- `.env.example` - Updated with email config

## ❗ Troubleshooting

### "Email not configured" in logs
**Fix**: Create `.env` file with SMTP credentials

### Emails not sending
**Fix**: 
1. Check `.env` has correct Gmail and App Password
2. Make sure 2-Factor Authentication is enabled on Gmail
3. Remove all spaces from App Password
4. Restart the server after changing `.env`

### Can't generate App Password
**Fix**: You need 2-Factor Authentication enabled first
- Go to: https://myaccount.google.com/security
- Enable "2-Step Verification"
- Then try generating App Password again

## 🔒 Security

⚠️ **Important**:
- `.env` is already in `.gitignore` - your credentials are safe
- Never share your App Password
- For production, use environment variables
- Consider using SendGrid/Mailgun for high volume

## 📊 View Submissions

While server is running, you can view all form submissions:

```bash
# In browser or Postman
GET http://localhost:5000/api/fix-questions/submissions
```

Returns JSON with all submissions:
```json
{
  "success": true,
  "count": 5,
  "submissions": [...]
}
```

## 🎓 Production Ready

This setup is production-ready! Just:
1. Set `NODE_ENV=production` in `.env`
2. Use your production domain in `CLIENT_URL`
3. Keep the same Gmail SMTP settings
4. Or use SendGrid/Mailgun for higher volume

## ✅ Summary

You now have:
- ✅ Email notifications for fix questions purchases
- ✅ Working for BCV701, BCV702, BCV703
- ✅ Admin notification emails
- ✅ Student auto-reply emails
- ✅ Beautiful HTML email templates
- ✅ Test page to verify setup

**Next Steps**: 
1. Set up your `.env` file
2. Test with test-email.html
3. Try a real purchase on subject page
4. You're done! 🎉
