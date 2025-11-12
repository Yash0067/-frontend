# 🚀 Quick Deployment Guide

## One-Command Setup

Once you have your Render backend URL, update the frontend in one command:

```bash
cd frontend
node auto-update-config.js https://your-backend-url.onrender.com
git add config.js index.html
git commit -m "Connect to Render backend"
git push origin main
```

That's it! Vercel will automatically redeploy.

## Alternative: Use the Web Interface

1. Open `setup-backend-connection.html` in your browser
2. Enter your Render backend URL
3. Click "Test Connection" to verify
4. Click "Update Configuration" to get the code
5. Copy and paste into `config.js` and `index.html`
6. Commit and push

## Manual Update

1. Edit `config.js`:
   - Find: `const DEFAULT_API_URL = 'https://your-backend-url.onrender.com';`
   - Replace with your Render URL

2. Edit `index.html`:
   - Find: `<meta name="api-url" content="..."/>`
   - Replace with your Render URL

3. Commit and push:
   ```bash
   git add config.js index.html
   git commit -m "Connect to Render backend"
   git push origin main
   ```

## Need Your Render URL?

1. Go to https://dashboard.render.com
2. Find your backend service
3. Copy the URL (e.g., `https://backtesting-api.onrender.com`)

## Verify Connection

After updating:
1. Visit: https://frontend-nu-ten-75.vercel.app
2. Open browser console (F12)
3. Try uploading a file
4. Check for errors

---

**That's it!** Your frontend will connect to your backend automatically.

