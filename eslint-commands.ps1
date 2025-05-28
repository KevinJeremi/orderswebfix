# ESLint Quick Commands

# Check specific component
Write-Host "Checking Lanyard.tsx for ESLint issues:" -ForegroundColor Green
npx eslint src/components/Lanyard.tsx

# Auto-fix issues in specific component
Write-Host "
Attempting to auto-fix Lanyard.tsx:" -ForegroundColor Green
npx eslint src/components/Lanyard.tsx --fix

# Check all components in src directory
Write-Host "
Checking all files in src directory:" -ForegroundColor Green
npx eslint src/ --ext .ts,.tsx

# Auto-fix all fixable issues in src directory
Write-Host "
Attempting to auto-fix all issues in src directory:" -ForegroundColor Green
npx eslint src/ --ext .ts,.tsx --fix