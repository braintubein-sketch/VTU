# Fix Questions Email Setup Guide

This guide will help you set up email notifications for the Fix Questions feature.

## Features

When a student purchases Fix Questions (BCV701, BCV702, BCV703, or any other subject):

1. ✅ **Admin Email Notification** - You receive an email with:
   - Student's name and email
   - Subject code and name
   - Payment ID and amount
   - Submission timestamp

2. ✅ **Auto-Reply to Student** - Student receives an email with:
   - Purchase confirmation
   - Order details
   - Payment ID
   - Expected delivery time (24 hours)
   - Order ID for reference

## Setup Instructions

### Step 1: Configure Gmail for SMTP

1. **Enable 2-Factor Authentication**:
   - Go to your Google Account: https://myaccount.google.com/
   - Click on "Security" in the left sidebar
   - Under "Signing in to Google", enable "2-Step Verification"

2. **Generate App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer" (or other device)
   - Click "Generate"
   - **Copy the 16-character password** (e.g., `abcd efgh ijkl mnop`)

### Step 2: Create .env File

1. Copy `.env.example` to `.env`:
   ```bash
   copy .env.example .env
   ```

2. Edit `.env` file and update these values:
   ```env
   # Your Gmail address
   SMTP_USER=your-email@gmail.com
   
   # The 16-character app password you generated
   SMTP_PASS=abcdefghijklmnop
   
   # Admin email (where you want to receive notifications)
   ADMIN_EMAIL=your-admin-email@gmail.com
   ```

### Step 3: Test the Setup

1. **Start the server**:
   ```bash
   npm run dev
   ```

2. **Test the fix questions flow**:
   - Open the client in browser
   - Navigate to a subject with fix questions (e.g., BCV701, BCV702, BCV703)
   - Click "Buy Now"
   - Fill in the form with test data
   - Complete the payment (use Razorpay test mode)

3. **Check your emails**:
   - Admin email should receive: Purchase notification
   - Student email should receive: Auto-reply confirmation

## Email Template Customization

### Admin Email
Edit `server/routes/fixQuestions.js` - Line ~75 for the admin email template.

### Student Auto-Reply
Edit `server/routes/fixQuestions.js` - Line ~140 for the student email template.

## Troubleshooting

### "Email not configured" message in server logs
**Solution**: Make sure you created `.env` file and filled in SMTP credentials.

### Gmail blocks the login
**Solution**: 
- Make sure 2-Factor Authentication is enabled
- Use App Password, not your regular Gmail password
- Check if "Less secure app access" is turned OFF (we use app passwords instead)

### Emails not being sent
**Solution**:
1. Check server logs for error messages
2. Verify SMTP credentials in `.env`
3. Make sure port 587 is not blocked by firewall
4. Try using port 465 with `secure: true` if 587 doesn't work

### Student receives email but admin doesn't
**Solution**: Check ADMIN_EMAIL is set correctly in `.env`

## API Endpoints

### Submit Fix Questions Form
```
POST /api/fix-questions/submit
```

**Body**:
```json
{
  "name": "Student Name",
  "email": "student@gmail.com",
  "subjectCode": "BCV701",
  "subjectName": "Design of Steel Structures",
  "paymentId": "pay_xxxxxxxxxxxxx",
  "amount": 79
}
```

### Get All Submissions (Admin)
```
GET /api/fix-questions/submissions
```

### Get Single Submission
```
GET /api/fix-questions/submission/:id
```

## Production Deployment

### Using Gmail in Production
Gmail has daily sending limits:
- Free account: 500 emails/day
- Google Workspace: 2,000 emails/day

For high-volume applications, consider:
- SendGrid (100 emails/day free)
- Mailgun (5,000 emails/month free)
- Amazon SES (62,000 emails/month free)

### Update .env for Production
```env
NODE_ENV=production
PORT=5000
CLIENT_URL=https://yourdomain.com
```

## Support

If you need help:
1. Check server logs: `npm run dev`
2. Test with curl:
   ```bash
   curl -X POST http://localhost:5000/api/fix-questions/submit \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@gmail.com","subjectCode":"BCV701","subjectName":"Test Subject","paymentId":"test123","amount":79}'
   ```

## Security Notes

⚠️ **Important**:
- Never commit `.env` file to Git
- Keep your App Password secret
- Use environment variables in production
- Add authentication middleware for admin routes in production
- Enable rate limiting for production
