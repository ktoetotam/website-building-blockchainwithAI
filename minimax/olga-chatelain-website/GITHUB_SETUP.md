# GitHub Repository Setup Guide

This guide will help you create a GitHub repository for Dr. Olga Chatelain's website.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Terminal/Command Prompt access

## 🚀 Step-by-Step Instructions

### 1. Create GitHub Repository

1. **Go to GitHub.com** and sign in to your account
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Fill in repository details:**
   - **Repository name**: `olga-chatelain-website`
   - **Description**: `Professional website for Dr. Olga Chatelain - AI & Blockchain Expert & Digital Transformation`
   - **Visibility**: Choose Public or Private (recommended: Private for professional portfolio)
   - **Initialize repository**: Check "Add a README file" (we already have one, but it's okay)
   - **Add .gitignore**: Select "Node" template
   - **Choose a license**: Leave as "None" for now

5. **Click "Create repository"**

### 2. Prepare Local Repository

```bash
# Navigate to the project directory
cd olga-chatelain-website

# Initialize git (if not already done)
git init

# Add all files to git
git add .

# Make initial commit
git commit -m "Initial commit: Dr. Olga Chatelain professional website"
```

### 3. Connect to GitHub Repository

```bash
# Add GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/olga-chatelain-website.git

# Verify remote was added
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Update Repository Settings (Optional but Recommended)

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab
3. **Pages section**:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
4. **General section**:
   - Features: Enable Issues and Wiki if desired
   - Pull Requests: Configure as needed

## 📁 Repository Structure

Your repository will contain:

```
olga-chatelain-website/
├── README.md              # Professional documentation
├── .gitignore             # Git ignore rules
├── package.json           # Project dependencies
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # TailwindCSS configuration
├── src/                   # Source code
├── public/                # Static assets
├── dist/                  # Built files (auto-generated)
└── docs/                  # Additional documentation
```

## 🔧 Available Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)
1. Enable GitHub Pages in repository settings
2. Build and push the `dist/` folder to `gh-pages` branch
3. Your site will be available at `https://YOUR_USERNAME.github.io/olga-chatelain-website`

### Option 2: Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Automatic deployments on every push
3. Custom domain support
4. SSL included

### Option 3: Netlify
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Automatic deployments

## 🔒 Security Notes

- **Private Repository**: Recommended for professional portfolio
- **Environment Variables**: Add any sensitive data as GitHub secrets
- **Access Control**: Manage collaborators through repository settings

## 📞 Support

If you encounter any issues:
1. Check the repository settings
2. Verify Git is properly installed
3. Ensure GitHub credentials are configured
4. Review the console for error messages

## 🎯 Next Steps

After creating the repository:

1. **Set up automatic deployments** (Vercel/Netlify recommended)
2. **Configure custom domain** (if desired)
3. **Set up branch protection** for main branch
4. **Enable GitHub Actions** for automated testing (if needed)
5. **Configure notifications** for repository activity

---

**Repository Ready! 🚀**

Your professional website is now version-controlled and ready for collaboration and deployment.
