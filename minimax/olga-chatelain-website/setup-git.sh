#!/bin/bash

# GitHub Repository Setup Script for Dr. Olga Chatelain's Website
# This script helps initialize the git repository

echo "🚀 Setting up Git repository for Dr. Olga Chatelain's website..."
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Initialize git repository
echo "📦 Initializing Git repository..."
git init

# Add all files
echo "📁 Adding files to repository..."
git add .

# Make initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Dr. Olga Chatelain professional website

- AI & Blockchain Expert & Digital Transformation
- Responsive React + TypeScript website
- Professional portfolio with contact form
- Warm orange color scheme
- Optimized for all devices"

echo ""
echo "🎉 Repository initialized successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Create a GitHub repository at https://github.com/new"
echo "2. Repository name: olga-chatelain-website"
echo "3. Description: Professional website for Dr. Olga Chatelain - AI & Blockchain Expert & Digital Transformation"
echo "4. Make it Private (recommended for professional portfolio)"
echo "5. Run these commands to connect:"
echo ""
echo "git remote add origin https://github.com/YOUR_USERNAME/olga-chatelain-website.git"
echo "git branch -M main"
echo "git push -u origin main"
echo ""
echo "📖 See GITHUB_SETUP.md for detailed instructions"
