# Quick Update: Connect to Your Render Backend

## Option 1: Manual Update (Easiest)

1. **Get your Render backend URL**
   - Go to Render dashboard
   - Copy your service URL (e.g., `https://backtesting-api.onrender.com`)

2. **Update `config.js`**
   - Open `frontend/config.js`
   - Find line with `DEFAULT_API_URL`
   - Replace `'https://your-backend-url.onrender.com'` with your actual Render URL

3. **Update `index.html`**
   - Open `frontend/index.html`
   - Find the meta tag: `<meta name="api-url" content="..."/>`
   - Replace the content with your Render URL

4. **Commit and push**
   ```bash
   cd frontend
   git add config.js index.html
   git commit -m "Update API URL to Render backend"
   git push origin main
   ```

## Option 2: Using the Update Script

If you have Node.js installed:

```bash
cd frontend
node update-api-url.js https://your-backend-url.onrender.com
git add config.js index.html
git commit -m "Update API URL"
git push origin main
```

## Option 3: Vercel Environment Variables

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add a new variable:
   - **Name**: `API_URL`
   - **Value**: `https://your-backend-url.onrender.com`
3. Redeploy your site

Then update `config.js` to read from environment (requires a build step).

## Verify Connection

After updating:
1. Visit your Vercel site
2. Open browser console (F12)
3. Check for any CORS or connection errors
4. Try uploading a file to test the connection

## Troubleshooting

**CORS Errors?**
- Make sure your Render backend CORS allows your Vercel domain
- Check backend logs in Render dashboard

**Connection Failed?**
- Verify your Render backend is running (not sleeping)
- Test backend directly: `https://your-backend-url.onrender.com/docs`
- Check the URL is correct (no typos)

