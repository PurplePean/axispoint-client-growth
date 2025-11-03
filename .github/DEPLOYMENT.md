# Deployment Setup for AxisPoint Partners

This repository uses GitHub Actions to automatically deploy to Namecheap hosting.

## Required GitHub Secrets

You need to configure the following secrets in your GitHub repository:

### How to Add Secrets:
1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Add each secret below:

### Required Secrets:

| Secret Name | Value | Example |
|------------|-------|---------|
| `FTP_HOST` | `ftp.axispoint.llc` | Your FTP server |
| `FTP_USERNAME` | `axisipak` | Your FTP username |
| `FTP_PASSWORD` | `your-password-here` | Your FTP password |
| `FTP_PATH` | `/home/axisipak/public_html` | Path to website folder |
| `VITE_FORMS_ENDPOINT` | `https://script.google.com/macros/s/...` | Your Google Apps Script URL |

## Current Configuration:

Based on your Namecheap cPanel info:

```
FTP_HOST: ftp.axispoint.llc
FTP_USERNAME: axisipak
FTP_PASSWORD: [YOUR CPANEL PASSWORD OR CREATE DEDICATED FTP USER]
FTP_PATH: /home/axisipak/public_html
VITE_FORMS_ENDPOINT: https://script.google.com/macros/s/AKfycbyI-A55NizcuDtwdyYFC1VL9fTjC0PAXSnOhZ8N5E17_vl20pVbD2HQzvJCAnLIVr00/exec
```

## How Deployment Works:

1. You or Claude push changes to `main` or `master` branch
2. GitHub Actions automatically:
   - Installs dependencies
   - Builds production files with environment variables
   - Creates .htaccess for React Router
   - Deploys via FTP to Namecheap
3. Your site updates in ~2 minutes

## Manual Deployment Trigger:

You can also trigger deployment manually:
1. Go to **Actions** tab in GitHub
2. Click **"Deploy to Namecheap"** workflow
3. Click **"Run workflow"**
4. Select branch and run

## Rollback:

To rollback to a previous version:
1. Find the working commit in GitHub history
2. Revert to that commit
3. Push to trigger auto-deploy

## Security Notes:

- All secrets are encrypted by GitHub
- Never commit passwords or API keys to the repository
- Consider creating a dedicated FTP user for deployment
- Keep your `.env.local` file in `.gitignore`

## Support:

If deployment fails, check:
1. GitHub Actions logs (Actions tab → Failed workflow → View logs)
2. FTP credentials are correct
3. FTP path exists on server
4. Server has enough disk space
