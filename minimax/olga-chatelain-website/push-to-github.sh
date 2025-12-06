#!/bin/bash

# GitHub Repository Push Script
# Run this script after creating the repository manually on GitHub

echo "🚀 Pushing Olga Chatelain Website to GitHub..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the olga-chatelain-website directory"
    exit 1
fi

# Add remote origin (replace with your username if different)
git remote remove origin 2>/dev/null
git remote add origin https://github.com/ktoetotam/olga-chatelain-website.git

# Push to GitHub
echo "📤 Pushing files to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Success! Your website is now on GitHub!"
    echo "🌐 Repository URL: https://github.com/ktoetotam/olga-chatelain-website"
    echo ""
    echo "Next steps:"
    echo "1. Visit your repository to verify all files are uploaded"
    echo "2. Enable GitHub Pages for automatic deployment"
    echo "3. Share your professional website with the world! 🌍"
else
    echo "❌ Push failed. Please check your GitHub credentials and repository name."
    echo "Make sure you created the repository named 'olga-chatelain-website' on GitHub first."
fi