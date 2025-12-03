@echo off
echo ========================================
echo   TM SAREES - Git Setup
echo ========================================
echo.

REM Clean up any existing git folders
echo Cleaning up old git folders...
if exist .git rmdir /s /q .git
if exist pages\.git rmdir /s /q pages\.git
echo Done!
echo.

REM Initialize git
echo Initializing Git repository...
git init
echo.

REM Configure line endings (fix CRLF warning)
echo Configuring Git...
git config core.autocrlf true
echo.

REM Add all files
echo Adding files...
git add .
echo.

REM Show status
echo Current status:
git status --short
echo.

echo ========================================
echo   Ready to commit!
echo ========================================
echo.
echo Next step: Run this command:
echo git commit -m "Initial commit: TM Sarees e-commerce website"
echo.
pause
