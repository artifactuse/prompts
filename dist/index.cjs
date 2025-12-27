var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var src_exports = {};
__export(src_exports, {
  allPrompts: () => allPrompts,
  canvasPrompt: () => canvasPrompt,
  default: () => src_default,
  diffPrompt: () => diffPrompt,
  formPrompt: () => formPrompt,
  fullPrompt: () => fullPrompt,
  getPrompt: () => getPrompt,
  getPrompts: () => getPrompts,
  htmlPrompt: () => htmlPrompt,
  javascriptPrompt: () => javascriptPrompt,
  jsonPrompt: () => jsonPrompt,
  jsxPrompt: () => jsxPrompt,
  pythonPrompt: () => pythonPrompt,
  socialPrompt: () => socialPrompt,
  svgPrompt: () => svgPrompt,
  videoPrompt: () => videoPrompt,
  vuePrompt: () => vuePrompt
});
module.exports = __toCommonJS(src_exports);

// src/prompts/canvas.js
var canvasPrompt = `
<canvas_artifact>
When user requests graphics, banners, logos, diagrams, thumbnails, posters, or illustrations, generate a \`canvas\` code block.

FORMAT:
\`\`\`canvas
{"width": NUMBER, "height": NUMBER, "backgroundColor": "COLOR", "shapes": [...]}
\`\`\`

SHAPES:
| Type | Properties |
|------|------------|
| rect | x, y, width, height |
| circle | x, y, radius |
| ellipse | x, y, radiusX, radiusY |
| diamond | x, y, width, height |
| triangle | x1, y1, x2, y2, x3, y3 |
| line | x1, y1, x2, y2, curveType?, controlPoint? |
| arrow | x1, y1, x2, y2, arrowType: "end"|"start"|"both", arrowHeadStyle?: "filled"|"outline"|"line" |
| text | x, y, text, fontSize, fontFamily?, bold?, italic?, align: "left"|"center"|"right", rotation? |
| image | x, y, width, height, src |
| path | segments: [{point: [x,y], handleIn?: [dx,dy], handleOut?: [dx,dy]}], closed |
| frame | name, x, y, width, height, clipContent, children: [...] |
| group | children: [...], rotation? |

COMMON PROPERTIES:
- color: stroke color ("transparent" for none)
- fillColor: fill color
- opacity: 0-100
- lineWidth: 1, 2, 4
- strokeStyle: "solid", "dashed", "dotted"
- rotation: radians (NEVER on frames)
- scaleX, scaleY: scale factors (-1 to flip)

CANVAS SIZES:
| Use Case | Size |
|----------|------|
| YouTube Thumbnail | 1280 \xD7 720 |
| Instagram Post | 1080 \xD7 1080 |
| Instagram Story | 1080 \xD7 1920 |
| Social Banner | 1200 \xD7 630 |
| Logo | 500 \xD7 500 |
| Presentation | 1920 \xD7 1080 |

PATH SHAPES (custom vectors):
- point: anchor coordinates [x, y] (required)
- handleIn/handleOut: bezier handles relative to point (optional)

Heart: {"type":"path","segments":[{"point":[200,280],"handleOut":[-60,-60]},{"point":[120,180],"handleIn":[0,40],"handleOut":[0,-40]},{"point":[200,120],"handleIn":[-40,0],"handleOut":[40,0]},{"point":[280,180],"handleIn":[0,-40],"handleOut":[0,40]},{"point":[200,280],"handleIn":[60,-60]}],"closed":true,"color":"transparent","fillColor":"#e94560"}

Star: {"type":"path","segments":[{"point":[200,50]},{"point":[230,140]},{"point":[320,140]},{"point":[250,200]},{"point":[280,290]},{"point":[200,240]},{"point":[120,290]},{"point":[150,200]},{"point":[80,140]},{"point":[170,140]}],"closed":true,"color":"transparent","fillColor":"#ffd700"}

Hexagon: {"type":"path","segments":[{"point":[200,100]},{"point":[287,150]},{"point":[287,250]},{"point":[200,300]},{"point":[113,250]},{"point":[113,150]}],"closed":true,"color":"transparent","fillColor":"#6c5ce7"}

Speech Bubble: {"type":"path","segments":[{"point":[50,50]},{"point":[250,50],"handleOut":[20,0]},{"point":[280,80],"handleIn":[0,-20],"handleOut":[0,20]},{"point":[280,130]},{"point":[250,160],"handleIn":[20,0]},{"point":[120,160]},{"point":[80,220]},{"point":[100,160]},{"point":[50,160],"handleOut":[-20,0]},{"point":[20,130],"handleIn":[0,20],"handleOut":[0,-20]},{"point":[20,80]},{"point":[50,50],"handleIn":[-20,0]}],"closed":true,"color":"transparent","fillColor":"#6c5ce7"}

VECTOR EDIT MODE:
Users can double-click any shape to enter vector edit mode:
- Drag anchor points to reshape
- Drag bezier handles to adjust curves
- Click on path to add new points
- Delete key removes selected points
- Escape exits vector edit mode

BOOLEAN OPERATIONS:
Users can combine shapes using:
- Union (Ctrl+Alt+U): merge shapes into one
- Subtract (Ctrl+Alt+S): cut one shape from another
- Intersect (Ctrl+Alt+I): keep only overlapping area
- Exclude (Ctrl+Alt+E): remove overlapping area

FRAMES vs GROUPS:
- Frame: exportable container, clips content, NEVER rotates
- Group: simple grouping, CAN rotate, no clipping
- Frame children use absolute canvas coordinates

COLOR PALETTES:
- Modern: #1a1a2e, #e94560, #f5f5f5
- Professional: #2d3436, #0984e3, #dfe6e9
- Vibrant: #6c5ce7, #fd79a8, #00cec9
- Dark Mode: #0a0a0f, #1a1a2e, #ffffff
- Neon: #0f0f0f, #00ff88, #ff0080

LAYERING (bottom to top):
1. Background shapes (opacity 10-30%)
2. Main content (text, images)
3. Accent elements (underlines, highlights)

IMAGES (CORS-friendly):
- Unsplash: https://images.unsplash.com/photo-ID?w=WIDTH
- Picsum: https://picsum.photos/WIDTH/HEIGHT
- Imgur: https://i.imgur.com/IMAGEID.png

KEYBOARD SHORTCUTS (for users):
Tools: V Select, R Rect, O Ellipse, T Triangle, D Diamond, A Arrow, L Line, X Text, F Frame
Actions: Ctrl+C/X/V Copy/Cut/Paste, Ctrl+D Duplicate, Ctrl+Z/Y Undo/Redo, Ctrl+G Group
Boolean: Ctrl+Alt+U Union, Ctrl+Alt+S Subtract, Ctrl+Alt+I Intersect, Ctrl+Alt+E Exclude

RULES:
- Shapes render bottom-to-top in array
- NEVER add rotation to frames (use groups instead)
- Use paths to draw any custom shape
- Use boolean operations for compound shapes
- Mention vector edit mode for user customization
- Always use canvas code blocks, never HTML/JavaScript
</canvas_artifact>
`;

// src/prompts/video.js
var videoPrompt = `
<video_artifact>
When user requests video intros, outros, title sequences, animated text, lower thirds, countdowns, or motion graphics, generate a \`video\` code block.

The video editor extends the canvas system with temporal properties. All canvas features apply.

FORMAT:
\`\`\`video
{"width": NUMBER, "height": NUMBER, "duration": SECONDS, "backgroundColor": "COLOR", "shapes": [...]}
\`\`\`

VIDEO RESOLUTIONS:
| Preset | Size | Use Case |
|--------|------|----------|
| 1080p | 1920 \xD7 1080 | YouTube, standard HD |
| 720p | 1280 \xD7 720 | Twitter, smaller files |
| 4K | 3840 \xD7 2160 | High quality |
| Vertical | 1080 \xD7 1920 | TikTok, Reels, Shorts |
| Square | 1080 \xD7 1080 | Instagram posts |
| Portrait | 1080 \xD7 1350 | Instagram (4:5) |
| Cinematic | 2560 \xD7 1080 | Ultra-wide (21:9) |
| FB Cover | 820 \xD7 312 | Facebook cover video |

TEMPORAL PROPERTIES (add to any shape):
| Property | Description | Default |
|----------|-------------|---------|
| startTime | When shape appears (seconds) | 0 |
| duration | How long visible (seconds) | 5 |
| trackId | "track-1", "track-2", "track-3" | "track-1" |

SHAPES (same as canvas + video-specific):
| Type | Properties |
|------|------------|
| rect | x, y, width, height |
| circle | x, y, radius |
| ellipse | x, y, radiusX, radiusY |
| diamond | x, y, width, height |
| triangle | x1, y1, x2, y2, x3, y3 |
| line | x1, y1, x2, y2, curveType?, controlPoint? |
| arrow | x1, y1, x2, y2, arrowType, arrowHeadStyle? |
| text | x, y, text, fontSize, fontFamily?, bold?, italic?, align? |
| image | x, y, width, height, src |
| video | x, y, width, height, src |
| audio | x, y, width, height, src |
| path | segments: [{point, handleIn?, handleOut?}], closed |
| frame | name, x, y, width, height, clipContent, children |
| group | children, rotation? |

VIDEO-SPECIFIC TYPES:

EFFECTS (type: "effect"):
| subtype | Properties |
|---------|------------|
| dropShadow | intensity, offset |
| glow | intensity, offset |
| vignette | intensity |
| blur | intensity |
| grain | intensity |
| glitch | intensity |
| chromatic | intensity, offset |
| pixelate | intensity |

Example: {"type":"effect","subtype":"chromatic","name":"Chromatic Aberration","startTime":0,"duration":5,"trackId":"track-fx-1","intensity":100,"offset":5}

FILTERS (type: "filter"):
| subtype | min | max | default |
|---------|-----|-----|---------|
| brightness | 0 | 200 | 100 |
| contrast | 0 | 200 | 100 |
| saturation | 0 | 200 | 100 |
| hue | 0 | 360 | 0 |
| grayscale | 0 | 100 | 0 |
| sepia | 0 | 100 | 0 |
| invert | 0 | 100 | 0 |
| temperature | -100 | 100 | 0 |

Example: {"type":"filter","subtype":"temperature","name":"Temperature","startTime":0,"duration":5,"trackId":"track-fx-1","value":50}

TRANSITIONS (type: "transition"):
| subtype | Description |
|---------|-------------|
| fade | Fade in/out |
| dissolve | Cross dissolve |
| wipeLeft, wipeRight, wipeUp, wipeDown | Directional wipe |
| slideLeft, slideRight | Slide animation |
| zoomIn, zoomOut | Zoom effect |
| crossZoom | Cross zoom |
| blur | Blur transition |

Example: {"type":"transition","subtype":"zoomOut","name":"Zoom Out","startTime":0,"duration":1,"trackId":"track-fx-1","easing":"ease-in-out","direction":"none"}

COMMON PROPERTIES:
- color: stroke ("transparent" for none)
- fillColor: fill color
- opacity: 0-100
- lineWidth: 1, 2, 4
- strokeStyle: "solid", "dashed", "dotted"
- rotation: radians (NEVER on frames)
- scaleX, scaleY: scale factors

PATH SHAPES:
Heart: {"type":"path","segments":[{"point":[200,280],"handleOut":[-60,-60]},{"point":[120,180],"handleIn":[0,40],"handleOut":[0,-40]},{"point":[200,120],"handleIn":[-40,0],"handleOut":[40,0]},{"point":[280,180],"handleIn":[0,-40],"handleOut":[0,40]},{"point":[200,280],"handleIn":[60,-60]}],"closed":true,"fillColor":"#e94560","startTime":0,"duration":5,"trackId":"track-1"}

Star: {"type":"path","segments":[{"point":[200,50]},{"point":[230,140]},{"point":[320,140]},{"point":[250,200]},{"point":[280,290]},{"point":[200,240]},{"point":[120,290]},{"point":[150,200]},{"point":[80,140]},{"point":[170,140]}],"closed":true,"fillColor":"#ffd700","startTime":0,"duration":5,"trackId":"track-1"}

VECTOR EDIT MODE:
Users can double-click any shape to edit vector points and bezier handles.
- Drag anchor points to reshape
- Drag bezier handles to adjust curves
- Click on path to add new points
- Delete key removes selected points

BOOLEAN OPERATIONS:
- Union (Ctrl+Alt+U): merge shapes into one
- Subtract (Ctrl+Alt+S): cut one shape from another
- Intersect (Ctrl+Alt+I): keep only overlapping area
- Exclude (Ctrl+Alt+E): remove overlapping area

FRAMES vs GROUPS:
- Frame: exportable container, clips content, NEVER rotates
- Group: simple grouping, CAN rotate, no clipping

TRACK ORGANIZATION:
- track-1: main content (titles, key text)
- track-2: secondary content (subtitles, accents)
- track-3: background elements (shapes, decorations)

Clips auto-place on first available track if trackId not specified.

CLIP COLORS (timeline):
- Shapes (rect, ellipse, etc.): Indigo
- Text: Purple
- Images: Cyan
- Video: Amber
- Audio: Green
- Effects/Filters/Transitions: track-fx tracks

TYPOGRAPHY:
- Main titles: 72-120px bold
- Subtitles: 32-48px
- Lower thirds: 28-36px name, 18-24px title
- Use align: "center" for centered text
- High contrast (white on dark, dark on light)

TIMING:
- Title cards: 3-5 seconds
- Lower thirds: 4-6 seconds
- Transition gaps: 0.5-1 second
- Stagger reveals: 0.3-0.5 second delays
- Total intro: 5-15 seconds

COLOR PALETTES:
- Modern: #1a1a2e, #e94560, #f5f5f5
- Professional: #2d3436, #0984e3, #dfe6e9
- Dark Mode: #0a0a0f, #1a1a2e, #ffffff
- Neon: #0f0f0f, #00ff88, #ff0080

LAYERING:
1. Background (track-3, opacity 10-30%)
2. Main content (track-1)
3. Accents (track-2)

IMAGES (CORS-friendly):
- Unsplash: https://images.unsplash.com/photo-ID?w=WIDTH
- Picsum: https://picsum.photos/WIDTH/HEIGHT
- Imgur: https://i.imgur.com/IMAGEID.png

KEYBOARD SHORTCUTS (for users):
Playback: Space Play/Pause, Home Start, End End, \u2190/\u2192 Prev/Next frame, L Loop
Timeline: Drag clips horizontally to change timing, vertically to change tracks, edges to resize
General: Ctrl+Z/Y Undo/Redo, Delete Remove selected

WHEN TO USE VIDEO vs CANVAS:
| Video | Canvas |
|-------|--------|
| Video intro/outro | Logo, banner, poster |
| Title sequence | Thumbnail |
| Animated text | Diagram, illustration |
| Lower thirds | Infographic |
| Countdown | Static graphics |
| Quote animation | |

RULES:
- Every shape MUST have startTime, duration, trackId
- Stagger elements for dynamic reveals
- Use large fonts for readability
- Background shapes on track-3 with low opacity
- NEVER add rotation to frames
- Use paths for custom shapes
- Always use video code blocks, never HTML/JavaScript
</video_artifact>
`;

// src/prompts/form.js
var formPrompt = `
<form_artifact>
When user needs to collect input, make choices, or complete a workflow, generate a JSON code block with type: "form".

FORMAT:
\`\`\`json
{
  "type": "form",
  "variant": "fields"|"wizard"|"buttons",
  "display": "inline"|"panel",
  "title": "Form Title",
  "submitLabel": "Submit",
  "data": {...}
}
\`\`\`

VARIANTS:

1. fields - Standard form
{
  "type": "form",
  "variant": "fields",
  "display": "inline",
  "title": "Contact",
  "data": {
    "fields": [
      {"name": "email", "type": "email", "label": "Email", "required": true},
      {"name": "message", "type": "textarea", "label": "Message"}
    ]
  }
}

2. wizard - Multi-step form
{
  "type": "form",
  "variant": "wizard",
  "display": "panel",
  "title": "Setup",
  "data": {
    "steps": [
      {"title": "Step 1", "fields": [...]},
      {"title": "Step 2", "fields": [...]}
    ]
  }
}

3. buttons - Quick actions
{
  "type": "form",
  "variant": "buttons",
  "display": "inline",
  "description": "Choose option:",
  "data": {
    "buttons": [
      {"id": "yes", "label": "Yes", "style": "primary"},
      {"id": "no", "label": "No", "style": "secondary"}
    ]
  }
}

FIELD TYPES:
text, email, password, number, tel, url, textarea, select, radio, checkbox, date, time, file, rating, color, range

FIELD PROPERTIES:
- name: field identifier (required)
- type: field type (required)
- label: display label
- placeholder: hint text
- required: true/false
- defaultValue: initial value
- helpText: description below field
- options: [{value, label}] for select/radio

DISPLAY RULES:
- inline: simple forms (1-3 fields), quick buttons
- panel: complex forms, wizards, file uploads, 4+ fields
</form_artifact>
`;

// src/prompts/social.js
var socialPrompt = `
<social_artifact>
When user requests social media post preview, draft, or mockup, generate a JSON code block with type: "social".

FORMAT:
\`\`\`json
{
  "type": "social",
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
  "type": "social",
  "platform": "twitter",
  "data": {
    "author": {"name": "Acme", "handle": "@acme", "verified": true},
    "content": {"text": "Launching today! \u{1F680} #startup"},
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

// src/prompts/html.js
var htmlPrompt = `
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

// src/prompts/jsx.js
var jsxPrompt = `
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

// src/prompts/vue.js
var vuePrompt = `
<vue_artifact>
When user requests Vue components, generate a \`vue\` code block.

FORMAT:
\`\`\`vue
<template>
  <div>{{ message }}</div>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('Hello')
</script>

<style scoped>
div { color: blue; }
</style>
\`\`\`

RULES:
- Use Composition API with <script setup> (preferred)
- Options API also supported
- Include <style scoped> for component styles
- Renders with live preview
</vue_artifact>
`;

// src/prompts/javascript.js
var javascriptPrompt = `
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

// src/prompts/python.js
var pythonPrompt = `
<python_artifact>
When user requests Python code, data analysis, or algorithms, generate a \`python\` or \`py\` code block.

FORMAT:
\`\`\`python
# Your code here
print('Output captured')
\`\`\`

AVAILABLE PACKAGES:
numpy, pandas, scipy, scikit-learn, matplotlib, sympy, networkx

FEATURES:
- Executes via Pyodide (WebAssembly)
- Print output captured
- Syntax highlighted

RULES:
- Use print() for output
- Some C-extension packages unavailable
- File system operations sandboxed
</python_artifact>
`;

// src/prompts/json.js
var jsonPrompt = `
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

// src/prompts/svg.js
var svgPrompt = `
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

// src/prompts/diff.js
var diffPrompt = `
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

// src/index.js
var allPrompts = {
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
  diff: diffPrompt
};
var fullPrompt = `
<artifacts>
You can generate interactive artifacts in your responses using special code blocks.

ARTIFACT SELECTION:
- Graphics, banners, logos, diagrams, thumbnails \u2192 \`canvas\`
- Video intros, animations, title sequences \u2192 \`video\`
- Collect input, quick actions \u2192 form (JSON with type: "form")
- Social media post mockups \u2192 social (JSON with type: "social")
- Web pages, demos \u2192 \`html\`
- React components \u2192 \`jsx\`
- Vue components \u2192 \`vue\`
- Vector icons \u2192 \`svg\`
- Data structures \u2192 \`json\`
- Code changes \u2192 \`diff\`
- Scripts \u2192 \`javascript\` or \`python\`

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
function getPrompt(type) {
  return allPrompts[type] || null;
}
function getPrompts(types) {
  return types.map((t) => allPrompts[t]).filter(Boolean).join("\n");
}
var src_default = {
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
  getPrompts
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  allPrompts,
  canvasPrompt,
  diffPrompt,
  formPrompt,
  fullPrompt,
  getPrompt,
  getPrompts,
  htmlPrompt,
  javascriptPrompt,
  jsonPrompt,
  jsxPrompt,
  pythonPrompt,
  socialPrompt,
  svgPrompt,
  videoPrompt,
  vuePrompt
});
