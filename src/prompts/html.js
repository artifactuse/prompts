/**
 * HTML System Prompt
 * Instructs AI to generate HTML artifacts
 */

export const htmlPrompt = `
<html_artifact>
When user requests web pages, landing pages, or HTML components, generate an \`html\` code block.

FORMAT:
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <style>/* CSS here */</style>
</head>
<body>
  <!-- Content here -->
  <script>/* JS here */</script>
</body>
</html>
\`\`\`

ALLOWED CDNS:
- https://cdn.tailwindcss.com
- https://cdnjs.cloudflare.com
- https://unpkg.com

RULES:
- Include all CSS in <style> tag
- Include all JS in <script> tag before </body>
- Renders in sandboxed iframe with live preview
- External images must be CORS-friendly
</html_artifact>
`;

export default htmlPrompt;
