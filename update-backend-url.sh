#!/bin/bash
# Script to update backend URL in frontend files

if [ -z "$1" ]; then
    echo "Usage: ./update-backend-url.sh <BACKEND_URL>"
    echo "Example: ./update-backend-url.sh https://backtesting-api.onrender.com"
    exit 1
fi

BACKEND_URL="$1"

# Validate URL
if [[ ! $BACKEND_URL =~ ^https?:// ]]; then
    echo "❌ Invalid URL. Must start with http:// or https://"
    exit 1
fi

echo "🔄 Updating backend URL to: $BACKEND_URL"
echo ""

# Update config.js
if [ -f "config.js" ]; then
    sed -i.bak "s|const DEFAULT_API_URL = 'https://your-backend-url.onrender.com'|const DEFAULT_API_URL = '$BACKEND_URL'|g" config.js
    echo "✅ Updated config.js"
    rm -f config.js.bak
else
    echo "⚠️  config.js not found"
fi

# Update index.html
if [ -f "index.html" ]; then
    sed -i.bak "s|<meta name=\"api-url\" content=\"https://your-backend-url.onrender.com\" />|<meta name=\"api-url\" content=\"$BACKEND_URL\" />|g" index.html
    echo "✅ Updated index.html"
    rm -f index.html.bak
else
    echo "⚠️  index.html not found"
fi

echo ""
echo "✅ Backend URL updated!"
echo ""
echo "Next steps:"
echo "  git add config.js index.html"
echo "  git commit -m 'Update backend URL to $BACKEND_URL'"
echo "  git push origin main"
echo ""

