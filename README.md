# @artifactuse/prompts

System prompts that teach AI models to generate Artifactuse artifacts. Include these in your AI's system prompt to enable artifact generation capabilities.

## Installation

```bash
npm install @artifactuse/prompts
```

## Quick Start

```javascript
import { canvasPrompt, videoPrompt } from '@artifactuse/prompts';

const systemPrompt = `
You are a helpful creative assistant.

${canvasPrompt}
${videoPrompt}
`;

// Use with your AI provider
const response = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: 'Create a YouTube thumbnail for a coding tutorial' }
  ]
});
```

## Available Prompts

| Import | Use Case | Size |
|--------|----------|------|
| `canvasPrompt` | Graphics, banners, logos, diagrams | ~2KB |
| `videoPrompt` | Video intros, animations, titles | ~1.4KB |
| `formPrompt` | Input forms, wizards, quick actions | ~1.7KB |
| `socialPrompt` | Social media post previews | ~1.5KB |
| `htmlPrompt` | Web pages, HTML components | ~0.6KB |
| `jsxPrompt` | React components | ~0.7KB |
| `vuePrompt` | Vue components | ~0.5KB |
| `javascriptPrompt` | JavaScript code | ~0.5KB |
| `pythonPrompt` | Python code | ~0.5KB |
| `jsonPrompt` | JSON data structures | ~0.4KB |
| `svgPrompt` | Vector graphics, icons | ~0.6KB |
| `diffPrompt` | Code diffs | ~0.5KB |
| `fullPrompt` | All artifacts combined | ~11KB |

## Usage

### Selective Prompts (Recommended)

Include only what you need to minimize token usage:

```javascript
import { canvasPrompt, videoPrompt, formPrompt } from '@artifactuse/prompts';

const systemPrompt = `
You are Megan, a creative assistant for Soundpen.

${canvasPrompt}
${videoPrompt}
${formPrompt}
`;
```

### Full Prompt

Enable all artifact types:

```javascript
import { fullPrompt } from '@artifactuse/prompts';

const systemPrompt = `You are a helpful assistant.\n${fullPrompt}`;
```

### Helper Functions

```javascript
import { getPrompt, getPrompts } from '@artifactuse/prompts';

// Get single prompt
const prompt = getPrompt('canvas');

// Get multiple prompts combined
const prompts = getPrompts(['canvas', 'video', 'form']);
```

## CommonJS

```javascript
const { canvasPrompt, videoPrompt } = require('@artifactuse/prompts');
```

## How It Works

Each prompt contains:
1. **Trigger conditions** - When to generate the artifact
2. **Format specification** - Code block syntax and structure
3. **Schema** - Required and optional properties
4. **Rules** - Constraints and best practices

Example canvas prompt teaches the AI:
- Use `canvas` code block for graphics requests
- Structure: `{width, height, backgroundColor, shapes}`
- Shape types and their properties
- Canvas sizes for different platforms
- Layering and styling rules

## License

MIT
