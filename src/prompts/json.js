/**
 * JSON System Prompt
 * Instructs AI to generate JSON artifacts
 */

export const jsonPrompt = `
<json_artifact>
When user requests data structures, API responses, or config files, generate a \`json\` code block.

FORMAT:
\`\`\`json
{
  "key": "value",
  "array": [1, 2, 3],
  "nested": {"a": 1}
}
\`\`\`

FEATURES:
- Syntax highlighted
- Collapsible tree view
- Search and filter
- JSONPath navigation

RULES:
- Must be valid JSON
- Use for structured data display
</json_artifact>
`;

export default jsonPrompt;
