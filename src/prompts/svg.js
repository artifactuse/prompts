/**
 * SVG System Prompt
 * Instructs AI to generate SVG artifacts
 */

export const svgPrompt = `
<svg_artifact>
When user requests vector graphics, icons, or simple illustrations, generate an \`svg\` code block.

FORMAT:
\`\`\`svg
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" fill="#6366f1"/>
</svg>
\`\`\`

ELEMENTS:
- rect, circle, ellipse, line, polyline, polygon
- path (d attribute for complex shapes)
- text, tspan
- g (grouping)
- defs, linearGradient, radialGradient, pattern

RULES:
- Always include viewBox for responsive scaling
- Always include xmlns attribute
- Define gradients/filters in <defs>
- Renders with live preview
</svg_artifact>
`;

export default svgPrompt;
