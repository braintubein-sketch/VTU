@echo off
setlocal enabledelayedexpansion

echo Creating .env file with email configuration...

(
echo # Server Configuration
echo PORT=5000
echo NODE_ENV=development
echo.
echo # MongoDB Database  
echo MONGODB_URI=mongodb://localhost:27017/vtu-nexus
echo.
echo # JWT Configuration
echo JWT_SECRET=your-super-secret-jwt-key-change-in-production
echo JWT_EXPIRE=7d
echo.
echo # Razorpay Payment Gateway
echo RAZORPAY_KEY_ID=rzp_live_S0Kmp76N5YOycD
echo RAZORPAY_KEY_SECRET=your_razorpay_key_secret
echo.
echo # Email Configuration - CONFIGURED
echo SMTP_HOST=smtp.gmail.com
echo SMTP_PORT=587
echo SMTP_USER=braintube.in@gmail.com
echo SMTP_PASS=rmwvjljmffrpkenc
echo EMAIL_FROM=Braintube ^<braintube.in@gmail.com^>
echo.
echo # Admin Email
echo ADMIN_EMAIL=braintube.in@gmail.com
echo.
echo # Frontend URL
echo CLIENT_URL=http://localhost:3000
echo.
echo # Admin Password
echo ADMIN_PASSWORD=secure-admin-password
) > .env

echo .env file created successfully!
echo Email configured for: braintube.in@gmail.com
