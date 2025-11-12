# Frontend - Trading Strategy Backtesting Platform

This is the frontend web application for the Trading Strategy Backtesting Platform.

## Structure

```
frontend/
├── index.html           # Main application page
├── results.html         # Results display page
├── history.html         # Historical strategies page
├── script.js            # Main application logic
├── results.js           # Results page logic
├── history.js           # History page logic
├── advanced-features.js # Advanced features functionality
├── enhancements.js      # UI enhancements
└── styles.css           # Application styles
```

## Setup

No build process required! This is a static HTML/CSS/JavaScript application.

## Running the Frontend

### Option 1: Using a Simple HTTP Server

**Python 3:**
```bash
cd frontend
python -m http.server 8080
```

**Python 2:**
```bash
cd frontend
python -m SimpleHTTPServer 8080
```

**Node.js (using http-server):**
```bash
cd frontend
npx http-server -p 8080
```

### Option 2: Using VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html` and select "Open with Live Server"

### Option 3: Using any Web Server

You can serve the frontend files using any web server (Apache, Nginx, etc.)

The frontend will be available at `http://localhost:8080` (or the port you choose)

## Configuration

The frontend is configured to connect to the backend API at `http://localhost:8000`.

To change the backend URL, update the `API_BASE` constant in:
- `script.js`: `const API_BASE = 'http://localhost:8000';`
- `history.js`: `const API_BASE_URL = 'http://localhost:8000/api';`

## Features

- **Strategy Configuration**: Upload CSV files and configure backtest parameters
- **Real-time Backtesting**: Run backtests and view results
- **Historical Data**: View and manage previous backtest strategies
- **Interactive Charts**: Visualize equity curves and monthly returns
- **File Management**: Upload, view, and manage CSV files
- **Dark/Light Theme**: Toggle between themes
- **Export Results**: Download trades and metrics as CSV files

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Uses ES6+ features

## Dependencies (CDN)

The frontend uses the following CDN libraries:
- Chart.js (for charts)
- Chart.js Zoom Plugin (for chart zooming)
- PapaParse (for CSV parsing)
- XLSX (for Excel file support)

All dependencies are loaded from CDN, so no local installation is required.

## Notes

- Make sure the backend API is running on `http://localhost:8000` before using the frontend
- The frontend makes CORS requests to the backend, so ensure CORS is properly configured on the backend
- File uploads are limited by browser and server settings

