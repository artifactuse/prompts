/**
 * Diff System Prompt
 * Instructs AI to generate diff/patch artifacts
 */

export const diffPrompt = `
<diff_artifact>
When showing code changes, modifications, or comparisons, generate a \`diff\` code block.

FORMAT:
\`\`\`diff
--- a/file.js
+++ b/file.js
@@ -1,5 +1,6 @@
 unchanged line
-removed line
+added line
 context line
\`\`\`

SYNTAX:
- Lines starting with - are removed (red)
- Lines starting with + are added (green)
- Lines starting with space are context (unchanged)
- @@ marks line number ranges

RULES:
- Include context lines around changes
- Use unified diff format
- Displays with side-by-side view option
</diff_artifact>
`;

export default diffPrompt;
