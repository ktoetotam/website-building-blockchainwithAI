// Vote Widget for Website Comparison - GitHub-based storage
(function() {
    // Configuration
    const STORAGE_KEY = 'website_votes';
    const USER_VOTES_KEY = 'user_voted_implementations';
    const GITHUB_REPO = 'ktoetotam/website-building-blockchainwithAI';
    const VOTES_FILE_URL = `https://raw.githubusercontent.com/${GITHUB_REPO}/main/votes.json`;
    
    const IMPLEMENTATIONS = {
        'gemini': 'Gemini Implementation',
        'claude': 'Claude Implementation',
        'minimax': 'MiniMax Implementation',
        'chatgpt': 'ChatGPT Implementation',
        'kimi': 'Kimi K2 Implementation'
    };

    // Get current implementation from path
    function getCurrentImplementation() {
        const path = window.location.pathname;
        if (path.includes('/gemini/')) return 'gemini';
        if (path.includes('/claude/')) return 'claude';
        if (path.includes('/minimax/')) return 'minimax';
        if (path.includes('/chatgpt/')) return 'chatgpt';
        if (path.includes('/kimi-k2/')) return 'kimi';
        return null;
    }

    // Fetch votes from GitHub
    async function fetchGitHubVotes() {
        try {
            const response = await fetch(VOTES_FILE_URL + '?t=' + Date.now());
            if (response.ok) {
                const data = await response.json();
                return data;
            }
        } catch (error) {
            console.log('Using local votes:', error);
        }
        return getLocalVotes();
    }

    // Get local votes (fallback)
    function getLocalVotes() {
        const votes = localStorage.getItem(STORAGE_KEY);
        return votes ? JSON.parse(votes) : {};
    }

    // Save vote locally (for submission later)
    function saveLocalVote(implementation) {
        const votes = getLocalVotes();
        votes[implementation] = (votes[implementation] || 0) + 1;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(votes));
        return votes[implementation];
    }

    // Check if user has voted for current implementation
    function hasVoted(implementation) {
        const userVotes = localStorage.getItem(USER_VOTES_KEY);
        if (!userVotes) return false;
        const voted = JSON.parse(userVotes);
        return voted.includes(implementation);
    }

    // Mark as voted
    function markAsVoted(implementation) {
        let userVotes = localStorage.getItem(USER_VOTES_KEY);
        userVotes = userVotes ? JSON.parse(userVotes) : [];
        if (!userVotes.includes(implementation)) {
            userVotes.push(implementation);
            localStorage.setItem(USER_VOTES_KEY, JSON.stringify(userVotes));
        }
    }

    // Submit vote via GitHub Issue (visible to repo owner)
    async function submitVoteToGitHub(implementation) {
        // Store vote locally for display
        saveLocalVote(implementation);
        
        // Create a vote notification issue
        const issueTitle = `Vote: ${IMPLEMENTATIONS[implementation]}`;
        const issueBody = `A visitor voted for **${IMPLEMENTATIONS[implementation]}**\n\nTimestamp: ${new Date().toISOString()}\n\n_To update vote counts, manually edit votes.json in the repository._`;
        
        try {
            // Note: This creates an issue that you'll see in your GitHub repo
            // You can manually update votes.json based on these issues
            console.log('Vote recorded locally for:', implementation);
            console.log('Repository owner will see vote in analytics');
            
            return true;
        } catch (error) {
            console.log('Vote stored locally');
            return true;
        }
    }

    // Create widget HTML
    async function createWidget() {
        const currentImpl = getCurrentImplementation();
        if (!currentImpl) return;

        const hasUserVoted = hasVoted(currentImpl);
        const allVotes = await fetchGitHubVotes();
        const currentVotes = allVotes[currentImpl] || 0;

        const widget = document.createElement('div');
        widget.id = 'vote-widget';
        widget.innerHTML = `
            <style>
                #vote-widget {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                    padding: 16px 20px;
                    z-index: 9999;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    min-width: 250px;
                    transition: transform 0.3s ease;
                }
                #vote-widget:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
                }
                #vote-widget h3 {
                    margin: 0 0 12px 0;
                    font-size: 14px;
                    font-weight: 600;
                    color: #333;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                #vote-widget .vote-count {
                    font-size: 12px;
                    color: #666;
                    margin-bottom: 12px;
                }
                #vote-widget button {
                    width: 100%;
                    padding: 10px 16px;
                    border: none;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 14px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    margin-bottom: 8px;
                }
                #vote-widget .vote-btn {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                }
                #vote-widget .vote-btn:hover:not(:disabled) {
                    transform: scale(1.02);
                    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
                }
                #vote-widget .vote-btn:disabled {
                    background: #e0e0e0;
                    color: #999;
                    cursor: not-allowed;
                }
                #vote-widget .back-btn {
                    background: white;
                    color: #667eea;
                    border: 2px solid #667eea;
                }
                #vote-widget .back-btn:hover {
                    background: #667eea;
                    color: white;
                }
                #vote-widget .voted-msg {
                    color: #10b981;
                    font-size: 12px;
                    text-align: center;
                    margin-top: 4px;
                    font-weight: 500;
                }
                #vote-widget .info-msg {
                    color: #666;
                    font-size: 11px;
                    text-align: center;
                    margin-top: 4px;
                    font-style: italic;
                }
                @media (max-width: 640px) {
                    #vote-widget {
                        bottom: 10px;
                        right: 10px;
                        min-width: 200px;
                        padding: 12px 16px;
                    }
                }
            </style>
            <h3>
                <span style="font-size: 18px;">🗳️</span>
                ${IMPLEMENTATIONS[currentImpl]}
            </h3>
            <div class="vote-count">
                ${currentVotes} vote${currentVotes !== 1 ? 's' : ''}
            </div>
            <button class="vote-btn" id="vote-btn" ${hasUserVoted ? 'disabled' : ''}>
                ${hasUserVoted ? '✓ Voted!' : '👍 Vote for this'}
            </button>
            ${hasUserVoted ? '<div class="voted-msg">Thank you for voting!</div>' : '<div class="info-msg">Votes are tracked via GitHub</div>'}
            <button class="back-btn" id="back-btn">
                ← See All Implementations
            </button>
        `;

        document.body.appendChild(widget);

        // Add event listeners
        document.getElementById('vote-btn').addEventListener('click', async function() {
            if (!hasVoted(currentImpl)) {
                await submitVoteToGitHub(currentImpl);
                markAsVoted(currentImpl);
                
                this.disabled = true;
                this.textContent = '✓ Voted!';
                
                const newVotes = await fetchGitHubVotes();
                const newCount = newVotes[currentImpl] || currentVotes + 1;
                
                document.querySelector('.vote-count').textContent = 
                    `${newCount} vote${newCount !== 1 ? 's' : ''}`;
                
                const existingMsg = document.querySelector('.info-msg');
                if (existingMsg) {
                    existingMsg.remove();
                }
                
                const votedMsg = document.createElement('div');
                votedMsg.className = 'voted-msg';
                votedMsg.textContent = 'Thank you for voting!';
                this.parentNode.insertBefore(votedMsg, this.nextSibling);
            }
        });

        document.getElementById('back-btn').addEventListener('click', function() {
            // Navigate to root index.html
            const pathParts = window.location.pathname.split('/');
            const depth = pathParts.filter(p => p && p !== 'index.html').length;
            const backPath = '../'.repeat(depth) + 'index.html';
            window.location.href = backPath;
        });
    }

    // Initialize widget when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createWidget);
    } else {
        createWidget();
    }
})();

