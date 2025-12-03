# TM Sarees - Git Setup Script

Write-Host "`n========================================" -ForegroundColor Green
Write-Host "  TM SAREES - Git Setup" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Green

# Clean up any existing git folders
Write-Host "Cleaning up old git folders..." -ForegroundColor Yellow
if (Test-Path ".git") {
    Remove-Item -Recurse -Force ".git"
    Write-Host "  ✓ Removed .git folder" -ForegroundColor Cyan
}
if (Test-Path "pages\.git") {
    Remove-Item -Recurse -Force "pages\.git"
    Write-Host "  ✓ Removed pages\.git folder" -ForegroundColor Cyan
}
Write-Host "Done!`n" -ForegroundColor Green

# Initialize git
Write-Host "Initializing Git repository..." -ForegroundColor Yellow
git init
Write-Host ""

# Configure line endings (fix CRLF warning)
Write-Host "Configuring Git..." -ForegroundColor Yellow
git config core.autocrlf true
Write-Host "  ✓ Configured line endings" -ForegroundColor Cyan
Write-Host ""

# Add all files
Write-Host "Adding files..." -ForegroundColor Yellow
git add .
Write-Host ""

# Show what will be committed
Write-Host "Files ready to commit:" -ForegroundColor Yellow
$fileCount = (git status --short | Measure-Object).Count
Write-Host "  ✓ $fileCount files staged" -ForegroundColor Cyan
Write-Host ""

Write-Host "========================================" -ForegroundColor Green
Write-Host "  Ready to commit!" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Green

Write-Host "Next steps:" -ForegroundColor Magenta
Write-Host "1. Run: " -NoNewline
Write-Host 'git commit -m "Initial commit: TM Sarees e-commerce website"' -ForegroundColor Yellow
Write-Host "2. Create repository on GitHub" -ForegroundColor White
Write-Host "3. Run: " -NoNewline
Write-Host "git remote add origin https://github.com/YOURUSERNAME/tm-sarees.git" -ForegroundColor Yellow
Write-Host "4. Run: " -NoNewline
Write-Host "git push -u origin main" -ForegroundColor Yellow
Write-Host ""
