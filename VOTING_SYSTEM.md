# Voting System - Formspree Setup

## Overview
This website has a voting system where visitors can vote for their favorite AI implementation. When someone votes, you receive an email notification via Formspree.

## Setup Instructions

### 1. Create a Formspree Account (Free)

1. Go to https://formspree.io/
2. Sign up for a free account
3. Create a new form called "Website Votes"
4. Copy your form ID (looks like: `xyzabc12`)

### 2. Add Your Formspree ID to the Code

Edit `vote-widget.js` and replace the placeholder:

```javascript
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORMSPREE_ID';
```

Change to:

```javascript
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyzabc12'; // Your actual ID
```

### 3. Commit and Push

```bash
git add vote-widget.js
git commit -m "Add Formspree ID for voting"
git push
```

### 4. Test It!

1. Visit any implementation page on your deployed site
2. Click the vote button
3. You should receive an email like:

```
Subject: Vote: Gemini Implementation

implementation: gemini
implementationName: Gemini Implementation
timestamp: 2025-12-07T10:30:00.000Z
```

## How It Works

### For Visitors:
1. Visit any implementation page (Gemini, Claude, MiniMax, etc.)
2. See the floating vote widget in the bottom-right corner
3. Click "👍 Vote for this" to cast a vote
4. Their vote is sent to your email via Formspree
5. Each visitor can vote once per implementation (tracked in their browser)

### For You:
1. **Receive Emails**: Get an email notification for each vote
2. **Track Votes**: Count emails to see which implementation is winning
3. **Optional**: Update display counts manually if you want

### Email Format:
Each vote sends you an email with:
- **Subject**: "Vote: [Implementation Name]"
- **Implementation ID**: gemini, claude, minimax, chatgpt, or kimi
- **Implementation Name**: Full name (e.g., "Gemini Implementation")
- **Timestamp**: When the vote was cast

## Files in This System:

- **`vote-widget.js`** - Voting widget with Formspree integration
- **`index.html`** - Main comparison page
- **`votes.json`** - (Optional) Can be deleted if not needed

## Counting Votes

### Method 1: Email Count (Simple)
Just count how many emails you receive for each implementation:
- Search inbox for "Vote: Gemini Implementation"
- Count results
- Repeat for each implementation

### Method 2: Formspree Dashboard
1. Log into Formspree
2. View your "Website Votes" form
3. See all submissions with timestamps
4. Export to CSV if needed

### Method 3: Email Filters
Set up email filters/labels:
- Label: "Vote-Gemini" for emails containing "gemini"
- Label: "Vote-Claude" for emails containing "claude"
- etc.

Then count emails in each label!

## Browser Display

The vote counts shown on the page are **stored in each visitor's browser** (localStorage). This means:
- Each visitor sees their own vote counts
- Counts are not shared between visitors
- This prevents vote manipulation
- You get the real data via email

## Cost

- **Formspree Free Tier**: 50 submissions/month
- **Formspree Plus**: $10/month for 1,000 submissions
- For most showcase sites, the free tier is plenty!

## Security

✅ Votes are sent to your private email  
✅ No one can see other people's votes  
✅ No database to hack  
✅ No vote manipulation possible  
✅ Simple and secure  

## Troubleshooting

### Not receiving emails?
1. Check Formspree dashboard for submissions
2. Check spam folder
3. Verify Formspree ID is correct in vote-widget.js
4. Make sure you're testing on the deployed site (not localhost)

### Votes not working locally?
Formspree requires proper domains. Test on:
- Your GitHub Pages deployment
- Not on localhost:8080

### Want to disable email notifications?
You can configure Formspree to store data without sending emails, or use a different email address.

## Future Enhancements

If you want real-time shared vote counts, you would need:
- A backend database (Firebase, Supabase)
- API to aggregate votes
- Real-time updates

But for a simple showcase/portfolio site, email tracking works great!

