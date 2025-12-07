# Voting System - How It Works

## Overview
This website has a simple voting system where visitors can vote for their favorite AI implementation. Votes are displayed to all visitors using a GitHub-based storage system.

## How It Works

### For Visitors:
1. Visit any implementation page (Gemini, Claude, MiniMax, ChatGPT, or Kimi K2)
2. See the floating vote widget in the bottom-right corner
3. Click "👍 Vote for this" to cast a vote
4. Each visitor can vote once per implementation
5. Vote counts are pulled from the `votes.json` file in this repository

### For You (Repository Owner):

#### Viewing Votes:
Votes are stored locally in each visitor's browser. To see aggregate results:
1. Check your browser's console when visiting implementation pages
2. Look at localStorage data (voters track their own votes)
3. Manually track votes by checking browser analytics or feedback

#### Updating Vote Counts:
To update the public vote counts shown to all visitors:

1. **Edit votes.json manually:**
   ```bash
   # Edit the file
   nano votes.json
   
   # Or use VSCode
   code votes.json
   ```

2. **Update the numbers:**
   ```json
   {
     "gemini": 15,
     "claude": 23,
     "minimax": 42,
     "chatgpt": 18,
     "kimi": 7,
     "lastUpdated": "2025-12-07T12:00:00Z"
   }
   ```

3. **Commit and push:**
   ```bash
   git add votes.json
   git commit -m "Update vote counts"
   git push
   ```

4. **Wait 1-2 minutes** for GitHub Pages to update, then visitors will see new counts!

## Files in This System:

- **`votes.json`** - Public vote counts (you update this manually)
- **`vote-widget.js`** - Voting widget shown on implementation pages
- **`index.html`** - Main comparison page that displays vote counts

## Technical Details:

### Storage:
- **GitHub Repository**: `votes.json` stores official counts
- **localStorage**: Each visitor's browser tracks which implementations they voted for

### Data Flow:
1. Visitor clicks vote → Stored in their localStorage
2. Vote counts fetched from `votes.json` via GitHub raw content URL
3. All visitors see the same counts from `votes.json`
4. You manually update `votes.json` periodically based on feedback/analytics

### Cache Busting:
The system adds `?t={timestamp}` to the fetch URL to prevent caching issues.

## Limitations:

- **Manual Updates**: You need to manually edit `votes.json` to update counts
- **No Automatic Aggregation**: Individual votes aren't automatically counted
- **Browser-based Tracking**: Each visitor's votes are only in their browser

## Future Enhancements:

To make this fully automatic, you would need:
1. A backend server (Node.js, Python, etc.)
2. A database (Firebase, Supabase, MongoDB)
3. API endpoints to receive and store votes
4. Automatic aggregation of votes

For now, this system allows you to showcase vote counts while keeping everything simple and hosted on GitHub Pages!
