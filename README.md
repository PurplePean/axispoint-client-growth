# AxisPoint Partners - Client Growth Website

Commercial real estate asset management and advisory services.

## 🚀 Deployment Environments

### Production (Namecheap)
- **URL**: Your custom domain on Namecheap
- **Deploys**: Automatically when code is merged to `main` branch
- **CI/CD**: GitHub Actions → FTP to Namecheap

### Preview (Netlify)
- **URL**: Auto-generated preview URLs for each branch
- **Deploys**: Automatically on every push to feature branches
- **Purpose**: Review changes before merging to production

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Setup

```sh
# Clone the repository
git clone https://github.com/PurplePean/axispoint-client-growth.git

# Navigate to project directory
cd axispoint-client-growth

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Add your Google Apps Script endpoint to .env.local
# VITE_FORMS_ENDPOINT=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec

# Start development server
npm run dev
```

The dev server will start at `http://localhost:5173`

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## 📦 Environment Variables

Required environment variables:

```env
VITE_FORMS_ENDPOINT=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

This endpoint should point to your Google Apps Script web app that handles form submissions.

## 🌐 Setting Up Netlify Preview Deployments

To enable automatic preview URLs for feature branches:

1. **Sign up for Netlify** (free): https://app.netlify.com/signup
2. **Import your repository**:
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select `axispoint-client-growth`
3. **Configure build settings** (auto-detected from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Add environment variables** in Netlify:
   - Go to Site settings → Environment variables
   - Add `VITE_FORMS_ENDPOINT` with your Google Apps Script URL
5. **Enable Deploy Previews**:
   - Go to Site settings → Build & deploy → Deploy contexts
   - Enable "Deploy previews" for all branches

Now every push to a feature branch will generate a unique preview URL! 🎉

### Preview Workflow
```
1. Create feature branch → Push changes
2. Netlify auto-deploys → Get preview URL
3. Review and iterate → Push more changes
4. Approve → Merge to main
5. Production deploys to Namecheap automatically
```

## 🏗️ Build Commands

```sh
# Development build
npm run dev

# Production build
npm run build

# Development build (with source maps)
npm run build:dev

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```
/src
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── sections/     # Page sections (hero, forms, etc.)
│   └── layout/       # Layout components (navbar, footer)
├── pages/            # Route pages
├── hooks/            # Custom React hooks
├── lib/              # Utilities
└── App.tsx           # Router configuration
```

## 🔒 Security Features

- Honeypot spam protection on forms
- Timing-based anti-spam checks
- Environment variable isolation
- no-cors mode for external API calls
