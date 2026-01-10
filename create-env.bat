@echo off
echo.
echo ============================================
echo   Creating .env file for Braintube
echo   Email: braintube.in@gmail.com
echo ============================================
echo.

REM Copy .env.example to .env
copy .env.example .env >nul

echo ✅ Created .env file successfully!
echo.
echo ⚠️  IMPORTANT: You need to add your Gmail App Password
echo.
echo Next steps:
echo 1. Go to: https://myaccount.google.com/apppasswords
echo 2. Sign in with: braintube.in@gmail.com
echo 3. Generate App Password (16 characters)
echo 4. Open .env file in this folder
echo 5. Find SMTP_PASS=your-16-character-app-password
echo 6. Replace with your actual password (no spaces!)
echo 7. Save the file
echo.
echo Then run: npm run dev
echo.
echo ============================================
echo   Setup guide: YOUR_SETUP_GUIDE.md
echo ============================================
echo.

pause
