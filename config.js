// API Configuration
// Update this with your Render backend URL
// Example: 'https://backtesting-api.onrender.com'
const API_CONFIG = {
  // Replace 'your-backend-url.onrender.com' with your actual Render backend URL
  BASE_URL: 'https://your-backend-url.onrender.com',
  API_BASE: 'https://your-backend-url.onrender.com',
  API_BASE_URL: 'https://your-backend-url.onrender.com/api'
};

// For Vercel deployment, you can also use environment variables
// Uncomment and use this if you set VERCEL_ENV variables:
// const API_CONFIG = {
//   BASE_URL: window.VERCEL_ENV?.API_URL || 'https://your-backend-url.onrender.com',
//   API_BASE: window.VERCEL_ENV?.API_URL || 'https://your-backend-url.onrender.com',
//   API_BASE_URL: (window.VERCEL_ENV?.API_URL || 'https://your-backend-url.onrender.com') + '/api'
// };

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = API_CONFIG;
}

