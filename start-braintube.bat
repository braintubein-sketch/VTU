@echo off
echo.
echo ============================================
echo   Automatic Setup for Braintube
echo   Email: braintube.in@gmail.com
echo ============================================
echo.

REM Create .env file with all settings
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
echo RAZORPAY_KEY_ID=rzp_live_S25ts3CzL7SySi
echo RAZORPAY_KEY_SECRET=your_razorpay_key_secret_here
echo RAZORPAY_WEBHOOK_SECRET=Raghu@2244
echo.
echo # Email Configuration - braintube.in@gmail.com
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
echo CLIENT_URL=https://braintube.site
echo.
echo # Admin Password
echo ADMIN_PASSWORD=secure-admin-password
) > .env

echo.
echo ✅ Created .env file successfully!
echo.
echo Email Settings Configured:
echo   • Email: braintube.in@gmail.com
echo   • Password: Configured ✓
echo   • Admin Email: braintube.in@gmail.com
echo.
echo ✅ Ready for BCV701, BCV702, BCV703
echo.
echo ============================================
echo   Starting Braintube Server...
echo ============================================
echo.

REM Start the development server
npm run dev
