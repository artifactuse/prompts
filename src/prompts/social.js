/**
 * Social Preview System Prompt
 * Instructs AI to generate social media post previews
 */

export const socialPrompt = `
<social_artifact>
When user requests social media post preview, draft, or mockup, generate a \`social\` code block with type: "social".

FORMAT:
\`\`\`social
{
  "platform": "twitter"|"linkedin"|"instagram"|"facebook"|"threads"|"tiktok"|"youtube",
  "data": {
    "author": {...},
    "content": {...},
    "engagement": {...}
  }
}
\`\`\`

AUTHOR OBJECT:
{
  "name": "Display Name",
  "handle": "@username",
  "avatar": "https://...",
  "verified": true
}

CONTENT OBJECT:
{
  "text": "Post text with #hashtags and @mentions",
  "media": [{"type": "image", "url": "https://..."}],
  "link": {"url": "...", "title": "...", "description": "...", "image": "..."}
}

ENGAGEMENT OBJECT (optional):
{
  "likes": 1234,
  "comments": 56,
  "shares": 78,
  "views": 12000
}

PLATFORM-SPECIFIC:
- twitter: replies, retweets, likes, views, bookmarks
- linkedin: likes, comments, reposts
- instagram: likes, comments
- facebook: reactions, comments, shares
- threads: likes, replies, reposts
- tiktok: likes, comments, shares, saves
- youtube: views, likes, comments

EXAMPLE:
{
  "platform": "twitter",
  "data": {
    "author": {"name": "Acme", "handle": "@acme", "verified": true},
    "content": {"text": "Launching today! 🚀 #startup"},
    "engagement": {"likes": 500, "retweets": 120, "views": 15000}
  }
}

RULES:
- Always specify platform
- Match engagement metrics to platform
- Use realistic engagement numbers
- Renders inline in message
</social_artifact>
`;

export default socialPrompt;
