/**
 * @artifactuse/prompts
 * 
 * System prompts that teach AI models to generate Artifactuse artifacts.
 * Include these in your system prompt to enable artifact generation.
 * 
 * @example
 * import { canvasPrompt, videoPrompt } from '@artifactuse/prompts';
 * const systemPrompt = `You are a helpful assistant.\n${canvasPrompt}\n${videoPrompt}`;
 */

// Individual prompts
export { canvasPrompt } from './prompts/canvas.js';
export { videoPrompt } from './prompts/video.js';
export { formPrompt } from './prompts/form.js';
export { socialPrompt } from './prompts/social.js';
export { htmlPrompt } from './prompts/html.js';
export { jsxPrompt } from './prompts/jsx.js';
export { vuePrompt } from './prompts/vue.js';
export { javascriptPrompt } from './prompts/javascript.js';
export { pythonPrompt } from './prompts/python.js';
export { jsonPrompt } from './prompts/json.js';
export { svgPrompt } from './prompts/svg.js';
export { diffPrompt } from './prompts/diff.js';

// Import for internal use
import { canvasPrompt } from './prompts/canvas.js';
import { videoPrompt } from './prompts/video.js';
import { formPrompt } from './prompts/form.js';
import { socialPrompt } from './prompts/social.js';
import { htmlPrompt } from './prompts/html.js';
import { jsxPrompt } from './prompts/jsx.js';
import { vuePrompt } from './prompts/vue.js';
import { javascriptPrompt } from './prompts/javascript.js';
import { pythonPrompt } from './prompts/python.js';
import { jsonPrompt } from './prompts/json.js';
import { svgPrompt } from './prompts/svg.js';
import { diffPrompt } from './prompts/diff.js';

/**
 * All prompts by type
 */
export const allPrompts = {
  canvas: canvasPrompt,
  video: videoPrompt,
  form: formPrompt,
  social: socialPrompt,
  html: htmlPrompt,
  jsx: jsxPrompt,
  vue: vuePrompt,
  javascript: javascriptPrompt,
  python: pythonPrompt,
  json: jsonPrompt,
  svg: svgPrompt,
  diff: diffPrompt,
};

/**
 * Full system prompt with all artifact capabilities
 */
export const fullPrompt = `
<artifacts>
You can generate interactive artifacts in your responses using special code blocks.

ARTIFACT SELECTION:
- Graphics, banners, logos, diagrams, thumbnails → \`canvas\`
- Video intros, animations, title sequences → \`video\`
- Collect input, quick actions → form (JSON with type: "form")
- Social media post mockups → social (JSON with type: "social")
- Web pages, demos → \`html\`
- React components → \`jsx\`
- Vue components → \`vue\`
- Vector icons → \`svg\`
- Data structures → \`json\`
- Code changes → \`diff\`
- Scripts → \`javascript\` or \`python\`

${canvasPrompt}
${videoPrompt}
${formPrompt}
${socialPrompt}
${htmlPrompt}
${jsxPrompt}
${vuePrompt}
${svgPrompt}
${jsonPrompt}
${diffPrompt}
${javascriptPrompt}
${pythonPrompt}
</artifacts>
`;

/**
 * Get prompt by type
 */
export function getPrompt(type) {
  return allPrompts[type] || null;
}

/**
 * Get multiple prompts combined
 */
export function getPrompts(types) {
  return types.map(t => allPrompts[t]).filter(Boolean).join('\n');
}

// Default export
export default {
  canvasPrompt,
  videoPrompt,
  formPrompt,
  socialPrompt,
  htmlPrompt,
  jsxPrompt,
  vuePrompt,
  javascriptPrompt,
  pythonPrompt,
  jsonPrompt,
  svgPrompt,
  diffPrompt,
  allPrompts,
  fullPrompt,
  getPrompt,
  getPrompts,
};
