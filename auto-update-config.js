#!/usr/bin/env node
/**
 * Automated script to update backend URL in frontend configuration
 * Usage: node auto-update-config.js <BACKEND_URL>
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function updateConfig(backendUrl) {
  console.log('\n🔄 Updating frontend configuration...\n');

  // Validate URL
  if (!backendUrl.startsWith('http://') && !backendUrl.startsWith('https://')) {
    console.error('❌ Error: URL must start with http:// or https://');
    process.exit(1);
  }

  // Remove trailing slash
  backendUrl = backendUrl.replace(/\/$/, '');

  // Update config.js
  const configPath = path.join(__dirname, 'config.js');
  const configContent = `// API Configuration
// Auto-generated configuration - Updated: ${new Date().toISOString()}
(function() {
  'use strict';
  
  let apiBaseUrl = null;
  
  if (typeof window !== 'undefined' && window.location) {
    const metaApiUrl = document.querySelector('meta[name="api-url"]');
    if (metaApiUrl) {
      apiBaseUrl = metaApiUrl.getAttribute('content');
    }
  }
  
  const DEFAULT_API_URL = '${backendUrl}';
  const baseUrl = apiBaseUrl || DEFAULT_API_URL;
  
  window.API_CONFIG = {
    BASE_URL: baseUrl,
    API_BASE: baseUrl,
    API_BASE_URL: baseUrl + '/api'
  };
  
  const API_CONFIG = window.API_CONFIG;
  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = API_CONFIG;
  }
})();
`;

  fs.writeFileSync(configPath, configContent);
  console.log('✅ Updated config.js');

  // Update index.html
  const indexPath = path.join(__dirname, 'index.html');
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Update or add meta tag
  if (indexContent.includes('<meta name="api-url"')) {
    indexContent = indexContent.replace(
      /<meta name="api-url" content="[^"]*" \/>/,
      `<meta name="api-url" content="${backendUrl}" />`
    );
  } else {
    // Add after viewport meta tag
    indexContent = indexContent.replace(
      /(<meta name="viewport"[^>]*>)/,
      `$1\n  <meta name="api-url" content="${backendUrl}" />`
    );
  }
  
  fs.writeFileSync(indexPath, indexContent);
  console.log('✅ Updated index.html');

  console.log('\n✅ Configuration updated successfully!\n');
  console.log('Next steps:');
  console.log('  1. Review the changes:');
  console.log('     git diff config.js index.html');
  console.log('  2. Commit and push:');
  console.log('     git add config.js index.html');
  console.log(`     git commit -m "Connect to Render backend: ${backendUrl}"`);
  console.log('     git push origin main');
  console.log('\n🎉 Vercel will automatically redeploy your frontend!\n');
}

// Get URL from command line or prompt
const backendUrl = process.argv[2];

if (backendUrl) {
  updateConfig(backendUrl);
  process.exit(0);
} else {
  console.log('\n🔗 Backend Connection Setup\n');
  console.log('Enter your Render backend URL (e.g., https://backtesting-api.onrender.com)');
  console.log('Or run: node auto-update-config.js <URL>\n');
  
  rl.question('Backend URL: ', (url) => {
    if (url.trim()) {
      updateConfig(url.trim());
    } else {
      console.log('❌ No URL provided. Exiting.');
    }
    rl.close();
  });
}

