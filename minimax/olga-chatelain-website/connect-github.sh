#!/bin/bash

# GitHub Repository Connection Script
# Run this after creating the repository on GitHub

echo "🔗 Connecting to GitHub repository..."
echo ""

# Check if repository URL was provided
if [ -z "$1" ]; then
    echo "❌ Please provide the repository URL"
    echo "Usage: ./connect-github.sh https://github.com/YOUR_USERNAME/olga-chatelain-website.git"
    exit 1
fi

REPO_URL="$1"

# Extract username and repo name from URL
USERNAME=$(echo "$REPO_URL" | sed -n 's|https://github.com/\([^/]*\)/.*|\1|p')
REPO_NAME=$(echo "$REPO_URL" | sed -n 's|https://github.com/[^/]*/\([^.]*\).*|\1|p')

echo "📋 Repository Information:"
echo "   Username: $USERNAME"
echo "   Repository: $REPO_NAME"
echo ""

# Check if we're in the right directory
if [ ! -d ".git" ]; then
    echo "❌ Not in a git repository. Please run this from the project directory."
    exit 1
fi

# Add remote origin
echo "🔗 Adding remote origin..."
git remote add origin "$REPO_URL"

# Set main branch
echo "🌿 Setting up main branch..."
git branch -M main

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Successfully connected and pushed to GitHub!"
echo "🌐 Your website is now available at: $REPO_URL"
echo ""
echo "📝 Next steps:"
echo "1. Enable GitHub Pages (optional):"
echo "   - Go to repository Settings → Pages"
echo "   - Source: Deploy from a branch"
echo "   - Branch: main / (root)"
echo "2. Your website will be live at: https://$USERNAME.github.io/$REPO_NAME"