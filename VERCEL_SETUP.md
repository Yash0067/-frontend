# Connecting Frontend (Vercel) to Backend (Render)

## Current Setup

- **Frontend**: Deployed on Vercel at `https://frontend-nu-ten-75.vercel.app`
- **Backend**: Should be deployed on Render (get your Render URL)

## Step 1: Get Your Render Backend URL

1. Go to your Render dashboard
2. Find your backend service
3. Copy the URL (e.g., `https://backtesting-api.onrender.com`)

## Step 2: Update Frontend Configuration

### Option A: Update config.js (Recommended)

Edit `frontend/config.js` and replace the placeholder URLs:

```javascript
const API_CONFIG = {
  BASE_URL: 'https://your-backend-url.onrender.com',  // Replace with your Render URL
  API_BASE: 'https://your-backend-url.onrender.com',  // Replace with your Render URL
  API_BASE_URL: 'https://your-backend-url.onrender.com/api'  // Replace with your Render URL
};
```

### Option B: Update Directly in Files

If you prefer, you can update the URLs directly in:
- `frontend/script.js` - Line 4: Update `API_BASE`
- `frontend/history.js` - Line 29: Update `API_BASE_URL`

## Step 3: Deploy Updated Frontend

1. Commit your changes:
   ```bash
   cd frontend
   git add .
   git commit -m "Update API endpoints to connect to Render backend"
   git push origin main
   ```

2. Vercel will automatically redeploy your frontend

## Step 4: Verify Connection

1. Open your Vercel frontend: `https://frontend-nu-ten-75.vercel.app`
2. Try uploading a file or running a backtest
3. Check browser console (F12) for any CORS or connection errors

## Troubleshooting

### CORS Errors

If you see CORS errors, make sure:
1. Your backend CORS settings allow your Vercel domain
2. The backend is deployed and running on Render
3. Check the backend logs in Render dashboard

### Connection Errors

1. Verify your Render backend URL is correct
2. Test the backend directly: `https://your-backend-url.onrender.com/docs`
3. Check that the backend is not in "sleep" mode (free tier spins down after 15 min)

### API Not Found

1. Make sure your backend endpoints match:
   - `/backtests` for backtest operations
   - `/api/files/` for file management
   - `/api/historical-data/` for historical data

## Environment Variables (Alternative)

If you want to use Vercel environment variables:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add:
   - `NEXT_PUBLIC_API_URL` = `https://your-backend-url.onrender.com`
3. Update your JavaScript to use: `process.env.NEXT_PUBLIC_API_URL`

Note: This requires a build step. For static sites, use the `config.js` approach instead.

## Testing Locally

To test the connection locally:

1. Update `config.js` to point to your Render backend
2. Or temporarily update `script.js` and `history.js` to use your Render URL
3. Run a local server: `python -m http.server 8080`
4. Test the connection

## Next Steps

Once connected:
- Test file uploads
- Test backtest creation
- Test historical data retrieval
- Monitor both Vercel and Render logs for any issues

