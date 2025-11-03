# Netlify Preview Environment Setup

This guide will help you set up automatic preview deployments for the AxisPoint client growth website.

## Why Netlify for Previews?

- **Production stays on Namecheap** (unchanged)
- **Preview URLs** for every feature branch
- **Free tier** is sufficient
- **Zero config** - we already have `netlify.toml`

## Quick Setup (5 minutes)

### Step 1: Create Netlify Account
1. Go to https://app.netlify.com/signup
2. Sign up with your GitHub account (easiest option)

### Step 2: Import Repository
1. Click **"Add new site"** button
2. Select **"Import an existing project"**
3. Choose **GitHub** as your provider
4. Find and select **`PurplePean/axispoint-client-growth`**

### Step 3: Configure Build Settings
Netlify will auto-detect settings from `netlify.toml`, but verify:

```
Build command: npm run build
Publish directory: dist
Node version: 18
```

Click **"Deploy site"**

### Step 4: Add Environment Variables
1. Go to **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add:
   - **Key**: `VITE_FORMS_ENDPOINT`
   - **Value**: `https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec`
   - **Scopes**: Check all (Production, Deploy Previews, Branch deploys)

### Step 5: Enable Deploy Previews
1. Go to **Site settings** → **Build & deploy** → **Deploy contexts**
2. Under **"Deploy previews"**, select **"Any pull request against your production branch"**
3. (Optional) Enable branch deploys for all branches

### Step 6: Customize Site Name (Optional)
1. Go to **Site settings** → **General** → **Site details**
2. Click **"Change site name"**
3. Choose something like: `axispoint-preview` or `axispoint-staging`

## How It Works

### Automatic Deployments
```
┌─────────────────────────────────────────────────┐
│ Push to feature branch                          │
│   └─> Netlify auto-creates preview URL         │
│       └─> Review changes live                   │
│           └─> Iterate (push updates preview)    │
│               └─> Approve and merge to main     │
│                   └─> Namecheap deploys to prod │
└─────────────────────────────────────────────────┘
```

### Preview URLs
Every branch gets a unique URL:
- Branch: `claude/ui-ux-improvements-xxxxx`
- Preview: `claude-ui-ux-improvements-xxxxx--axispoint-preview.netlify.app`

### What Gets Deployed?
- ✅ All UI/UX changes
- ✅ Full React app functionality
- ✅ Working forms (connects to same Google Apps Script)
- ✅ Real-time updates on every push
- ❌ NOT your production site (that stays on Namecheap)

## Checking Deploy Status

### In Netlify Dashboard
1. Go to https://app.netlify.com/
2. Select your site
3. View **"Deploys"** tab
4. See all branch previews and production builds

### Deploy Notifications
Netlify can send notifications to:
- Email
- Slack
- GitHub commit status checks

Configure in: **Site settings** → **Build & deploy** → **Deploy notifications**

## Troubleshooting

### Preview deploy failed?
1. Check build logs in Netlify dashboard
2. Verify environment variables are set
3. Ensure `netlify.toml` is in repo root

### Forms not working in preview?
1. Verify `VITE_FORMS_ENDPOINT` is set in Netlify
2. Check it's enabled for "Deploy Previews" scope
3. Test in browser console: `console.log(import.meta.env.VITE_FORMS_ENDPOINT)`

### Need to rebuild?
1. Go to **Deploys** tab
2. Click **"Trigger deploy"** → **"Clear cache and deploy site"**

## Cost

**Free tier includes:**
- ✅ 100GB bandwidth/month
- ✅ Unlimited preview deployments
- ✅ Automatic HTTPS
- ✅ Custom domain support (if needed)

For this project, you'll never hit the limits.

## Next Steps

After setup:
1. Push this branch to GitHub
2. Check Netlify dashboard for deploy status
3. Get your preview URL
4. Review UI/UX improvements live
5. Request changes or approve for production

---

**Questions?** Check Netlify docs: https://docs.netlify.com/
