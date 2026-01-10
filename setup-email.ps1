# Braintube - Automatic Email Setup
# This script creates your .env file with the correct Gmail App Password

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  Setting up Email for Braintube" -ForegroundColor Cyan
Write-Host "  Email: braintube.in@gmail.com" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Create .env file with correct settings
$envContent = @"
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Database
MONGODB_URI=mongodb://localhost:27017/vtu-nexus

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRE=7d

# Razorpay Payment Gateway
RAZORPAY_KEY_ID=rzp_live_S25ts3CzL7SySi
RAZORPAY_KEY_SECRET=your_razorpay_key_secret_here
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret_here

# Email Configuration (SMTP) - CONFIGURED FOR braintube.in@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=braintube.in@gmail.com
SMTP_PASS=rmwvjljmffrpkenc
EMAIL_FROM=Braintube <braintube.in@gmail.com>

# Admin Email - Where you receive purchase notifications
ADMIN_EMAIL=braintube.in@gmail.com

# Frontend URL (for CORS)
CLIENT_URL=https://braintube.site

# Admin Credentials
ADMIN_PASSWORD=secure-admin-password
"@

# Write to .env file
$envContent | Out-File -FilePath ".env" -Encoding utf8 -Force

Write-Host "✅ Created .env file with email configured!" -ForegroundColor Green
Write-Host ""
Write-Host "Email Settings:" -ForegroundColor Yellow
Write-Host "  • Email: braintube.in@gmail.com" -ForegroundColor White
Write-Host "  • Password: Configured ✓" -ForegroundColor White
Write-Host "  • Admin Email: braintube.in@gmail.com" -ForegroundColor White
Write-Host ""
Write-Host "✅ Email system ready for BCV701, BCV702, BCV703" -ForegroundColor Green
Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  Next: Starting server..." -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Start the server
Write-Host "Starting Braintube server..." -ForegroundColor Yellow
npm run dev
