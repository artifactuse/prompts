/**
 * JavaScript System Prompt
 * Instructs AI to generate JavaScript artifacts
 */

export const javascriptPrompt = `
<javascript_artifact>
When user requests JavaScript code, algorithms, or scripts, generate a \`javascript\` or \`js\` code block.

FORMAT:
\`\`\`javascript
// Your code here
console.log('Output captured');
\`\`\`

FEATURES:
- ES6+ syntax supported
- async/await supported
- Console output (log, warn, error) captured
- Executes in sandboxed browser environment

RULES:
- Use console.log for output
- Code can be executed by user
- Syntax highlighted with line numbers
</javascript_artifact>
`;

export default javascriptPrompt;
