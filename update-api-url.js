#!/usr/bin/env node
/**
 * Script to update API URL in config files
 * Usage: node update-api-url.js https://your-backend-url.onrender.com
 */

const fs = require('fs');
const path = require('path');

// Get API URL from command line argument
const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Usage: node update-api-url.js <API_URL>');
  console.error('Example: node update-api-url.js https://backtesting-api.onrender.com');
  process.exit(1);
}

// Validate URL
try {
  new URL(apiUrl);
} catch (e) {
  console.error('Invalid URL:', apiUrl);
  process.exit(1);
}

console.log('Updating API URL to:', apiUrl);

// Update config.js
const configPath = path.join(__dirname, 'config.js');
let configContent = fs.readFileSync(configPath, 'utf8');
configContent = configContent.replace(
  /const DEFAULT_API_URL = ['"](.*?)['"]/,
  `const DEFAULT_API_URL = '${apiUrl}'`
);
fs.writeFileSync(configPath, configContent);
console.log('✓ Updated config.js');

// Update index.html meta tag
const indexPath = path.join(__dirname, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');
indexContent = indexContent.replace(
  /<meta name="api-url" content="(.*?)" \/>/,
  `<meta name="api-url" content="${apiUrl}" />`
);
fs.writeFileSync(indexPath, indexContent);
console.log('✓ Updated index.html');

console.log('\n✅ API URL updated successfully!');
console.log('Now commit and push:');
console.log('  git add config.js index.html');
console.log('  git commit -m "Update API URL to ' + apiUrl + '"');
console.log('  git push origin main');

