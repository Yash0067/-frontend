// API Configuration
// This file will be automatically updated or you can set it manually
// For Vercel: You can also set VERCEL_ENV_API_URL in Vercel environment variables

(function() {
  'use strict';
  
  // Try to get from Vercel environment variable first
  let apiBaseUrl = null;
  
  // Check if running on Vercel with environment variable
  if (typeof window !== 'undefined' && window.location) {
    // Check for Vercel environment variable (set in Vercel dashboard)
    const hostname = window.location.hostname;
    
    // If on Vercel domain, try to get from meta tag or environment
    const metaApiUrl = document.querySelector('meta[name="api-url"]');
    if (metaApiUrl) {
      apiBaseUrl = metaApiUrl.getAttribute('content');
    }
  }
  
  // Default fallback - UPDATE THIS WITH YOUR RENDER BACKEND URL
  // To update: Run 'node auto-update-config.js <YOUR_RENDER_URL>'
  // Or edit this file and index.html manually
  const DEFAULT_API_URL = 'https://your-backend-url.onrender.com';
  
  // Use detected URL or default
  const baseUrl = apiBaseUrl || DEFAULT_API_URL;
  
  // Create global API_CONFIG
  window.API_CONFIG = {
    BASE_URL: baseUrl,
    API_BASE: baseUrl,
    API_BASE_URL: baseUrl + '/api'
  };
  
  // Also set as const for backward compatibility
  const API_CONFIG = window.API_CONFIG;
  
  // Export for module systems
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = API_CONFIG;
  }
})();
