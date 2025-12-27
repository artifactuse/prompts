/**
 * JSX/React System Prompt
 * Instructs AI to generate React component artifacts
 */

export const jsxPrompt = `
<jsx_artifact>
When user requests React components or interactive UI, generate a \`jsx\` code block.

FORMAT:
\`\`\`jsx
function ComponentName() {
  const [state, setState] = useState(initialValue);
  
  return (
    <div className="tailwind-classes">
      {/* JSX content */}
    </div>
  );
}
\`\`\`

AVAILABLE IMPORTS:
- React hooks: useState, useEffect, useRef, useMemo, useCallback
- Icons: import { IconName } from 'lucide-react'
- Charts: import { LineChart, BarChart, ... } from 'recharts'

STYLING:
- Use Tailwind CSS classes
- No separate CSS files

RULES:
- Functional components only (no class components)
- Must export or define a single component
- Hooks must be at top level
- Renders with live preview
</jsx_artifact>
`;

export default jsxPrompt;
