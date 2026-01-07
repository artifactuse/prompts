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
When user requests graphics, banners, logos, diagrams, thumbnails, posters, illustrations, flowcharts, infographics, icons, or any static visual content, generate a \`canvas\` code block.

## Output Format

\`\`\`canvas
{
  "width": 800,
  "height": 600,
  "background": "#ffffff",
  "shapes": [...]
}
\`\`\`

## Project Properties

| Property | Type | Description |
|----------|------|-------------|
| width | number | Canvas width in pixels |
| height | number | Canvas height in pixels |
| background | string | Background color (hex) |
| shapes | array | Array of shape objects |

## Canvas Sizes

| Use Case | Resolution | Aspect Ratio |
|----------|------------|--------------|
| Social Post | 1080x1080 | 1:1 |
| Instagram Story | 1080x1920 | 9:16 |
| Twitter Header | 1500x500 | 3:1 |
| Facebook Cover | 820x312 | Custom |
| LinkedIn Banner | 1584x396 | 4:1 |
| Blog Header | 1200x630 | ~2:1 |
| Presentation Slide | 1920x1080 | 16:9 |
| YouTube Thumbnail | 1280x720 | 16:9 |
| Icon | 512x512 | 1:1 |
| Logo | 500x500 | 1:1 |

## Basic Shapes

### Rectangle
{"type":"rect","x":100,"y":100,"width":200,"height":150,"fill":"#3498db","stroke":"#2980b9","strokeWidth":2,"cornerRadius":10,"opacity":1}

### Circle
{"type":"circle","x":200,"y":200,"radius":50,"fill":"#e74c3c","stroke":"#c0392b","strokeWidth":2}

### Ellipse
{"type":"ellipse","x":200,"y":200,"radiusX":80,"radiusY":50,"fill":"#9b59b6","stroke":"#8e44ad","strokeWidth":2}

### Diamond
{"type":"diamond","x":100,"y":100,"width":100,"height":100,"fill":"#f39c12","stroke":"#d68910","strokeWidth":2}

### Triangle
{"type":"triangle","x":100,"y":100,"width":100,"height":100,"fill":"#1abc9c","stroke":"#16a085","strokeWidth":2}

### Line
{"type":"line","x":100,"y":100,"x2":300,"y2":200,"stroke":"#34495e","strokeWidth":3}

### Arrow
{"type":"arrow","x":100,"y":100,"x2":300,"y2":100,"stroke":"#2c3e50","strokeWidth":3,"arrowType":"single","arrowHeadStyle":"triangle"}

Arrow options: arrowType ("single","double","none"), arrowHeadStyle ("triangle","open","diamond","circle"), arrowSize ("small","medium","large")

### Text
{"type":"text","x":400,"y":300,"text":"Hello World","fontSize":48,"fontFamily":"Arial","fill":"#333333","fontWeight":"bold","textAlign":"center","lineHeight":1.2}

### Image
{"type":"image","x":0,"y":0,"width":800,"height":600,"src":"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800","opacity":1}

## Common Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| x, y | number | 0 | Position in pixels |
| rotation | number | 0 | Rotation in degrees (NOT for frames) |
| opacity | number | 1 | Opacity (0-1) |
| fill | string | "#000000" | Fill color (hex or "transparent") |
| stroke | string | "transparent" | Stroke color |
| strokeWidth | number | 1 | Stroke width in pixels |
| cornerRadius | number | 0 | Corner radius for rectangles |

## Paths (Custom Shapes)

Paths use bezier curves with segments containing anchor points and optional handles:

{"type":"path","x":100,"y":100,"segments":[{"x":0,"y":50},{"x":50,"y":0,"handleIn":{"x":0,"y":-30},"handleOut":{"x":30,"y":0}},{"x":100,"y":50,"handleIn":{"x":0,"y":-30}}],"closed":true,"fill":"#e74c3c","stroke":"transparent"}

### Path Segment Properties

| Property | Type | Description |
|----------|------|-------------|
| x, y | number | Anchor point position (relative to shape x,y) |
| handleIn | object | Incoming bezier handle {"x": dx, "y": dy} |
| handleOut | object | Outgoing bezier handle {"x": dx, "y": dy} |

### Heart Shape
{"type":"path","x":460,"y":290,"segments":[{"x":50,"y":80},{"x":0,"y":30,"handleIn":{"x":20,"y":30},"handleOut":{"x":-15,"y":-20}},{"x":50,"y":0,"handleIn":{"x":-25,"y":0},"handleOut":{"x":25,"y":0}},{"x":100,"y":30,"handleIn":{"x":15,"y":-20},"handleOut":{"x":-20,"y":30}}],"closed":true,"fill":"#e74c3c","stroke":"transparent"}

### Star Shape
{"type":"path","x":100,"y":100,"segments":[{"x":50,"y":0},{"x":61,"y":35},{"x":100,"y":38},{"x":68,"y":60},{"x":79,"y":100},{"x":50,"y":75},{"x":21,"y":100},{"x":32,"y":60},{"x":0,"y":38},{"x":39,"y":35}],"closed":true,"fill":"#f1c40f","stroke":"#f39c12","strokeWidth":2}

## Groups & Frames

### Frame (container, clips content, NEVER rotates)
{"type":"frame","x":0,"y":0,"width":400,"height":300,"fill":"#f5f5f5","stroke":"#cccccc","strokeWidth":1,"children":[...]}

Children positions are relative to the frame.

### Group (simple grouping, CAN rotate)
{"type":"group","x":100,"y":100,"rotation":45,"children":[...]}

## Media Sources (CORS-friendly)

Images:
- Unsplash: https://images.unsplash.com/photo-[id]?w=[width]
- Picsum: https://picsum.photos/[width]/[height]
- Placeholder: https://via.placeholder.com/[size]

## Design Guidelines

### Color Palettes

Dark Theme:
- Background: #1a1a2e, #16213e, #0f0f23
- Accent: #4a90d9, #e94560, #f39c12
- Text: #ffffff, #cccccc, #888888

Light Theme:
- Background: #ffffff, #f5f5f5, #ecf0f1
- Accent: #3498db, #e74c3c, #2ecc71
- Text: #2c3e50, #34495e, #7f8c8d

### Typography

| Element | Font Size | Notes |
|---------|-----------|-------|
| Main titles | 48-72px | Bold, high contrast |
| Subtitles | 24-36px | Regular weight |
| Body text | 16-20px | Readable size |
| Captions | 12-14px | Smaller, muted color |

Always use textAlign: "center" for centered text. Ensure high contrast against background.

### Layering

Shapes render bottom-to-top in the array:
1. Background shapes (first in array)
2. Main content (middle)
3. Text and accents (last in array, renders on top)

## Examples

### Example 1: Modern Banner

\`\`\`canvas
{
  "width": 1200,
  "height": 400,
  "background": "#1a1a2e",
  "shapes": [
    {
      "type": "circle",
      "x": 1100,
      "y": 50,
      "radius": 150,
      "fill": "#4a90d9",
      "opacity": 0.3
    },
    {
      "type": "circle",
      "x": 100,
      "y": 350,
      "radius": 100,
      "fill": "#e94560",
      "opacity": 0.3
    },
    {
      "type": "text",
      "x": 600,
      "y": 180,
      "text": "Welcome to Our Platform",
      "fontSize": 56,
      "fontFamily": "Arial",
      "fontWeight": "bold",
      "fill": "#ffffff",
      "textAlign": "center"
    },
    {
      "type": "text",
      "x": 600,
      "y": 260,
      "text": "Building the future, one step at a time",
      "fontSize": 24,
      "fontFamily": "Arial",
      "fill": "#888888",
      "textAlign": "center"
    },
    {
      "type": "rect",
      "x": 500,
      "y": 300,
      "width": 200,
      "height": 50,
      "fill": "#4a90d9",
      "cornerRadius": 25
    },
    {
      "type": "text",
      "x": 600,
      "y": 335,
      "text": "Get Started",
      "fontSize": 18,
      "fontFamily": "Arial",
      "fontWeight": "bold",
      "fill": "#ffffff",
      "textAlign": "center"
    }
  ]
}
\`\`\`

### Example 2: Simple Flowchart

\`\`\`canvas
{
  "width": 800,
  "height": 600,
  "background": "#ffffff",
  "shapes": [
    {
      "type": "rect",
      "x": 300,
      "y": 50,
      "width": 200,
      "height": 80,
      "fill": "#3498db",
      "cornerRadius": 10
    },
    {
      "type": "text",
      "x": 400,
      "y": 100,
      "text": "Start",
      "fontSize": 24,
      "fontFamily": "Arial",
      "fontWeight": "bold",
      "fill": "#ffffff",
      "textAlign": "center"
    },
    {
      "type": "arrow",
      "x": 400,
      "y": 130,
      "x2": 400,
      "y2": 200,
      "stroke": "#2c3e50",
      "strokeWidth": 2,
      "arrowType": "single"
    },
    {
      "type": "diamond",
      "x": 300,
      "y": 200,
      "width": 200,
      "height": 120,
      "fill": "#f39c12",
      "stroke": "#d68910",
      "strokeWidth": 2
    },
    {
      "type": "text",
      "x": 400,
      "y": 265,
      "text": "Decision?",
      "fontSize": 18,
      "fontFamily": "Arial",
      "fill": "#ffffff",
      "textAlign": "center"
    },
    {
      "type": "arrow",
      "x": 400,
      "y": 320,
      "x2": 400,
      "y2": 400,
      "stroke": "#2c3e50",
      "strokeWidth": 2,
      "arrowType": "single"
    },
    {
      "type": "rect",
      "x": 300,
      "y": 400,
      "width": 200,
      "height": 80,
      "fill": "#2ecc71",
      "cornerRadius": 10
    },
    {
      "type": "text",
      "x": 400,
      "y": 450,
      "text": "End",
      "fontSize": 24,
      "fontFamily": "Arial",
      "fontWeight": "bold",
      "fill": "#ffffff",
      "textAlign": "center"
    }
  ]
}
\`\`\`

### Example 3: Social Media Card

\`\`\`canvas
{
  "width": 1080,
  "height": 1080,
  "background": "#f8f9fa",
  "shapes": [
    {
      "type": "rect",
      "x": 60,
      "y": 60,
      "width": 960,
      "height": 960,
      "fill": "#ffffff",
      "stroke": "#e9ecef",
      "strokeWidth": 2,
      "cornerRadius": 20
    },
    {
      "type": "circle",
      "x": 540,
      "y": 300,
      "radius": 120,
      "fill": "#3498db"
    },
    {
      "type": "text",
      "x": 540,
      "y": 320,
      "text": "TIP",
      "fontSize": 48,
      "fontFamily": "Arial",
      "fontWeight": "bold",
      "fill": "#ffffff",
      "textAlign": "center"
    },
    {
      "type": "text",
      "x": 540,
      "y": 520,
      "text": "Always save your work",
      "fontSize": 42,
      "fontFamily": "Arial",
      "fontWeight": "bold",
      "fill": "#2c3e50",
      "textAlign": "center"
    },
    {
      "type": "text",
      "x": 540,
      "y": 600,
      "text": "Press Ctrl+S frequently to avoid",
      "fontSize": 24,
      "fontFamily": "Arial",
      "fill": "#7f8c8d",
      "textAlign": "center"
    },
    {
      "type": "text",
      "x": 540,
      "y": 640,
      "text": "losing your progress",
      "fontSize": 24,
      "fontFamily": "Arial",
      "fill": "#7f8c8d",
      "textAlign": "center"
    },
    {
      "type": "text",
      "x": 540,
      "y": 900,
      "text": "@yourbrand",
      "fontSize": 28,
      "fontFamily": "Arial",
      "fill": "#bdc3c7",
      "textAlign": "center"
    }
  ]
}
\`\`\`

## Rules

1. Shapes render bottom-to-top in the array (first shape is background, last is foreground)
2. NEVER add rotation to frames (only groups can rotate)
3. Frame children positions are relative to the frame
4. All elements should stay within canvas boundaries
5. Use CORS-friendly media sources only
6. Always use canvas code blocks, never HTML/JavaScript
7. Use textAlign: "center" with x at center point for centered text
8. Use large fonts (48px+) for main titles, ensure readability
9. Match canvas size to the intended use case
10. Use transparent stroke or fill when not needed (e.g., "stroke": "transparent")
</canvas_artifact>
`;

// src/prompts/video.js
var videoPrompt = `
<video_artifact>
When user requests video intros, outros, title sequences, animated text, lower thirds, countdowns, motion graphics, or any animated content, generate a \`video\` code block.

## Output Format

\`\`\`video
{
  "width": 1920,
  "height": 1080,
  "currentPreset": "1080p",
  "duration": 10,
  "background": "#1a1a2e",
  "shapes": [...]
}
\`\`\`

## Project Properties

| Property | Type | Description |
|----------|------|-------------|
| width | number | Canvas width in pixels |
| height | number | Canvas height in pixels |
| currentPreset | string | Preset name (must match resolution) |
| duration | number | Total video length (set 5s longer than last clip ends) |
| background | string | Background color (hex) |
| shapes | array | Array of shape objects |

## Video Resolutions

| Preset Name | Resolution | Use Case |
|-------------|------------|----------|
| 1080p | 1920x1080 | YouTube, standard HD |
| 720p | 1280x720 | Web, smaller files |
| 4K | 3840x2160 | High quality |
| Vertical HD | 1080x1920 | TikTok, Reels, Stories |
| Square | 1080x1080 | Instagram, social |
| Instagram Portrait | 1080x1350 | Instagram feed (4:5) |
| Cinematic | 2560x1080 | Ultra-wide (21:9) |
| Twitter | 1280x720 | Twitter/X video |
| Facebook Cover | 820x312 | Facebook cover video |

## Temporal Properties

Every shape in video mode requires temporal properties:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| startTime | number | 0 | When shape appears (seconds) |
| duration | number | project duration | How long visible (seconds) |
| trackId | string | auto | Track assignment ("track-1", "track-2", etc.) |

**Track Rules**: Clips that overlap in time MUST be on different tracks. Sequential clips (no overlap) can share a track or omit trackId.

## Basic Shapes

### Rectangle
{"type":"rect","x":100,"y":100,"width":200,"height":150,"fill":"#3498db","stroke":"#2980b9","strokeWidth":2,"cornerRadius":10,"opacity":1,"startTime":0,"duration":5}

### Circle
{"type":"circle","x":200,"y":200,"radius":50,"fill":"#e74c3c","stroke":"#c0392b","strokeWidth":2,"startTime":0,"duration":5}

### Ellipse
{"type":"ellipse","x":200,"y":200,"radiusX":80,"radiusY":50,"fill":"#9b59b6","startTime":0,"duration":5}

### Diamond
{"type":"diamond","x":100,"y":100,"width":100,"height":100,"fill":"#f39c12","startTime":0,"duration":5}

### Triangle
{"type":"triangle","x":100,"y":100,"width":100,"height":100,"fill":"#1abc9c","startTime":0,"duration":5}

### Line
{"type":"line","x":100,"y":100,"x2":300,"y2":200,"stroke":"#34495e","strokeWidth":3,"startTime":0,"duration":5}

### Arrow
{"type":"arrow","x":100,"y":100,"x2":300,"y2":100,"stroke":"#2c3e50","strokeWidth":3,"arrowType":"single","arrowHeadStyle":"triangle","startTime":0,"duration":5}

### Text
{"type":"text","x":960,"y":540,"text":"Hello World","fontSize":48,"fontFamily":"Arial","fill":"#ffffff","fontWeight":"bold","textAlign":"center","startTime":0,"duration":5}

### Image
{"type":"image","x":0,"y":0,"width":1920,"height":1080,"src":"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920","opacity":1,"startTime":0,"duration":5}

### Video Clip
{"type":"video","x":0,"y":0,"width":1920,"height":1080,"src":"https://videos.pexels.com/video-files/3015488/3015488-hd_1920_1080_24fps.mp4","startTime":0,"duration":10,"volume":100,"fadeIn":0.5,"fadeOut":0.5}

### Audio Clip
{"type":"audio","src":"https://cdn.pixabay.com/audio/2024/11/04/audio-123456.mp3","startTime":0,"duration":30,"volume":80,"fadeIn":1,"fadeOut":2}

## Common Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| x, y | number | 0 | Position in pixels |
| rotation | number | 0 | Rotation in degrees (NOT for frames) |
| opacity | number | 1 | Opacity (0-1) |
| fill | string | "#000000" | Fill color (hex or "transparent") |
| stroke | string | "transparent" | Stroke color |
| strokeWidth | number | 1 | Stroke width in pixels |

## Paths (Custom Shapes)

Paths use bezier curves with segments containing anchor points and optional handles:

{"type":"path","x":100,"y":100,"segments":[{"x":0,"y":50},{"x":50,"y":0,"handleIn":{"x":0,"y":-30},"handleOut":{"x":30,"y":0}},{"x":100,"y":50,"handleIn":{"x":0,"y":-30}}],"closed":true,"fill":"#e74c3c","startTime":0,"duration":5}

### Heart Shape
{"type":"path","x":460,"y":290,"segments":[{"x":50,"y":80},{"x":0,"y":30,"handleIn":{"x":20,"y":30},"handleOut":{"x":-15,"y":-20}},{"x":50,"y":0,"handleIn":{"x":-25,"y":0},"handleOut":{"x":25,"y":0}},{"x":100,"y":30,"handleIn":{"x":15,"y":-20},"handleOut":{"x":-20,"y":30}}],"closed":true,"fill":"#e74c3c","startTime":0,"duration":5}

### Star Shape
{"type":"path","x":100,"y":100,"segments":[{"x":50,"y":0},{"x":61,"y":35},{"x":100,"y":38},{"x":68,"y":60},{"x":79,"y":100},{"x":50,"y":75},{"x":21,"y":100},{"x":32,"y":60},{"x":0,"y":38},{"x":39,"y":35}],"closed":true,"fill":"#f1c40f","startTime":0,"duration":5}

## Groups & Frames

### Frame (container, clips content, NEVER rotates)
{"type":"frame","x":0,"y":0,"width":400,"height":300,"fill":"#f5f5f5","children":[...],"startTime":0,"duration":5}

### Group (simple grouping, CAN rotate)
{"type":"group","x":100,"y":100,"rotation":45,"children":[...],"startTime":0,"duration":5}

## Clip-Based FX

Add an \`fx\` array to any shape for filters and animations:

{"type":"rect","x":100,"y":100,"width":400,"height":300,"fill":"#3498db","startTime":0,"duration":5,"fx":[{"type":"filter","name":"brightness","value":120},{"type":"animation","name":"slideUp","duration":0.5,"position":"in","easing":"ease-out"},{"type":"animation","name":"fadeOut","duration":0.5,"position":"out","easing":"ease-in"}]}

### Filter FX

{"type":"filter","name":"brightness","value":120}

| Filter Name | Range | Default | Description |
|-------------|-------|---------|-------------|
| brightness | 0-200 | 100 | Brightness adjustment |
| contrast | 0-200 | 100 | Contrast adjustment |
| saturation | 0-200 | 100 | Color saturation |
| grayscale | 0-100 | 0 | Grayscale amount |
| sepia | 0-100 | 0 | Sepia tone |
| blur | 0-20 | 0 | Blur radius (px) |
| hueRotate | 0-360 | 0 | Hue rotation (degrees) |
| invert | 0-100 | 0 | Color inversion |
| temperature | -100 to 100 | 0 | Color temperature |

### Animation FX

{"type":"animation","name":"slideUp","duration":0.5,"position":"in","easing":"ease-out"}

| Property | Values |
|----------|--------|
| name | fade, slideLeft, slideRight, slideUp, slideDown, zoom, zoomIn, zoomOut, crossZoom, wipe, blur, dissolve, spin, flip, bounce, elastic |
| position | "in" (entrance) or "out" (exit) |
| easing | "linear", "ease-in", "ease-out", "ease-in-out" |
| duration | seconds (default: 0.5) |

## Timeline-Based FX

Effects and transitions can be placed as separate shapes on FX tracks, applying to the entire video during their time range.

### Effect
{"type":"effect","subtype":"dropShadow","name":"Drop Shadow","startTime":0,"duration":5,"trackId":"track-fx-1","intensity":100,"offsetX":5,"offsetY":5,"blur":10,"color":"rgba(0,0,0,0.5)"}

Effect subtypes: dropShadow, glow, outline, vignette, blur, grain, glitch, chromatic, pixelate, sharpen, emboss

### Transition
{"type":"transition","subtype":"zoomIn","name":"Zoom In","startTime":0,"duration":1,"trackId":"track-fx-2","easing":"ease-in-out"}

Transition subtypes: fade, dissolve, wipeLeft, wipeRight, wipeUp, wipeDown, slideLeft, slideRight, slideUp, slideDown, zoomIn, zoomOut, crossZoom, blur, spin, flip, bounce, elastic

### Filter (timeline)
{"type":"filter","subtype":"saturation","name":"Saturation","startTime":0,"duration":5,"trackId":"track-fx-3","value":150}

## Media Sources (CORS-friendly)

Images:
- Unsplash: https://images.unsplash.com/photo-[id]?w=[width]
- Picsum: https://picsum.photos/[width]/[height]

Videos:
- Pexels: https://videos.pexels.com/video-files/[id]/[filename].mp4
- Pixabay: https://cdn.pixabay.com/video/[year]/[month]/[day]/[id].mp4

Audio:
- Pixabay: https://cdn.pixabay.com/audio/[year]/[month]/[day]/audio-[id].mp3

## Design Guidelines

### Color Palettes

Dark Theme:
- Background: #1a1a2e, #16213e, #0f0f23
- Accent: #4a90d9, #e94560, #f39c12
- Text: #ffffff, #cccccc, #888888

Light Theme:
- Background: #ffffff, #f5f5f5, #ecf0f1
- Accent: #3498db, #e74c3c, #2ecc71
- Text: #2c3e50, #34495e, #7f8c8d

### Typography

| Element | Font Size | Notes |
|---------|-----------|-------|
| Main titles | 72-120px | Bold, high contrast |
| Subtitles | 32-48px | Regular weight |
| Lower thirds (name) | 28-36px | Bold |
| Lower thirds (title) | 18-24px | Regular |

Always use textAlign: "center" for centered text. Ensure high contrast against background.

### Timing

| Element | Duration |
|---------|----------|
| Title cards | 3-5 seconds |
| Lower thirds | 4-6 seconds |
| Stagger delays | 0.3-0.5 seconds |
| Total intro | 5-15 seconds |

### Frame Boundaries

All elements MUST stay within canvas boundaries:
- X position: >= 0 and x + width <= canvas width
- Y position: >= 0 and y + height <= canvas height
- Safe margins: 20-50px from edges
- Vertical video (1080x1920): top y >= 150, bottom y <= 1750

## Examples

### Example 1: Title Sequence

\`\`\`video
{
  "width": 1920,
  "height": 1080,
  "currentPreset": "1080p",
  "duration": 10,
  "background": "#1a1a2e",
  "shapes": [
    {
      "type": "text",
      "x": 960,
      "y": 480,
      "text": "WELCOME",
      "fontSize": 120,
      "fontFamily": "Arial",
      "fontWeight": "bold",
      "fill": "#ffffff",
      "textAlign": "center",
      "startTime": 0,
      "duration": 5
    },
    {
      "type": "text",
      "x": 960,
      "y": 600,
      "text": "to the future",
      "fontSize": 48,
      "fontFamily": "Arial",
      "fill": "#888888",
      "textAlign": "center",
      "startTime": 1,
      "duration": 4
    },
    {
      "type": "rect",
      "x": 760,
      "y": 550,
      "width": 400,
      "height": 4,
      "fill": "#4a90d9",
      "startTime": 0.5,
      "duration": 4.5
    }
  ]
}
\`\`\`

### Example 2: Lower Third

\`\`\`video
{
  "width": 1920,
  "height": 1080,
  "currentPreset": "1080p",
  "duration": 10,
  "background": "transparent",
  "shapes": [
    {
      "type": "rect",
      "x": 50,
      "y": 850,
      "width": 600,
      "height": 80,
      "fill": "#2c3e50",
      "cornerRadius": 5,
      "startTime": 0,
      "duration": 5,
      "fx": [
        {"type": "animation", "name": "slideRight", "duration": 0.5, "position": "in", "easing": "ease-out"},
        {"type": "animation", "name": "slideLeft", "duration": 0.5, "position": "out", "easing": "ease-in"}
      ]
    },
    {
      "type": "rect",
      "x": 50,
      "y": 930,
      "width": 400,
      "height": 50,
      "fill": "#3498db",
      "cornerRadius": 5,
      "startTime": 0.3,
      "duration": 4.7,
      "fx": [
        {"type": "animation", "name": "slideRight", "duration": 0.5, "position": "in", "easing": "ease-out"},
        {"type": "animation", "name": "slideLeft", "duration": 0.5, "position": "out", "easing": "ease-in"}
      ]
    },
    {
      "type": "text",
      "x": 70,
      "y": 905,
      "text": "John Smith",
      "fontSize": 36,
      "fontFamily": "Arial",
      "fontWeight": "bold",
      "fill": "#ffffff",
      "startTime": 0.5,
      "duration": 4.5
    },
    {
      "type": "text",
      "x": 70,
      "y": 965,
      "text": "CEO & Founder",
      "fontSize": 24,
      "fontFamily": "Arial",
      "fill": "#ffffff",
      "startTime": 0.7,
      "duration": 4.3
    }
  ]
}
\`\`\`

### Example 3: Countdown Timer

\`\`\`video
{
  "width": 1920,
  "height": 1080,
  "currentPreset": "1080p",
  "duration": 10,
  "background": "#1a1a2e",
  "shapes": [
    {
      "type": "circle",
      "x": 960,
      "y": 540,
      "radius": 200,
      "fill": "transparent",
      "stroke": "#3498db",
      "strokeWidth": 10,
      "startTime": 0,
      "duration": 5
    },
    {
      "type": "text",
      "x": 960,
      "y": 580,
      "text": "5",
      "fontSize": 200,
      "fontFamily": "Arial",
      "fontWeight": "bold",
      "fill": "#ffffff",
      "textAlign": "center",
      "startTime": 0,
      "duration": 1,
      "fx": [{"type": "animation", "name": "zoom", "duration": 0.3, "position": "in", "easing": "ease-out"}]
    },
    {
      "type": "text",
      "x": 960,
      "y": 580,
      "text": "4",
      "fontSize": 200,
      "fontFamily": "Arial",
      "fontWeight": "bold",
      "fill": "#ffffff",
      "textAlign": "center",
      "startTime": 1,
      "duration": 1,
      "fx": [{"type": "animation", "name": "zoom", "duration": 0.3, "position": "in", "easing": "ease-out"}]
    },
    {
      "type": "text",
      "x": 960,
      "y": 580,
      "text": "3",
      "fontSize": 200,
      "fontFamily": "Arial",
      "fontWeight": "bold",
      "fill": "#ffffff",
      "textAlign": "center",
      "startTime": 2,
      "duration": 1,
      "fx": [{"type": "animation", "name": "zoom", "duration": 0.3, "position": "in", "easing": "ease-out"}]
    },
    {
      "type": "text",
      "x": 960,
      "y": 580,
      "text": "2",
      "fontSize": 200,
      "fontFamily": "Arial",
      "fontWeight": "bold",
      "fill": "#ffffff",
      "textAlign": "center",
      "startTime": 3,
      "duration": 1,
      "fx": [{"type": "animation", "name": "zoom", "duration": 0.3, "position": "in", "easing": "ease-out"}]
    },
    {
      "type": "text",
      "x": 960,
      "y": 580,
      "text": "1",
      "fontSize": 200,
      "fontFamily": "Arial",
      "fontWeight": "bold",
      "fill": "#ffffff",
      "textAlign": "center",
      "startTime": 4,
      "duration": 1,
      "fx": [{"type": "animation", "name": "zoom", "duration": 0.3, "position": "in", "easing": "ease-out"}]
    }
  ]
}
\`\`\`

## Rules

1. Every shape MUST have startTime and duration
2. Set project duration 5 seconds longer than last clip ends
3. Overlapping clips MUST have different trackId values
4. NEVER add rotation to frames (only groups can rotate)
5. All elements must stay within canvas boundaries
6. Use CORS-friendly media sources only
7. Always use video code blocks, never HTML/JavaScript
8. Stagger elements with 0.3-0.5s delays for dynamic reveals
9. Use large fonts (72px+) for main titles
10. Match currentPreset name to width/height values
11. Use textAlign: "center" with x at center point for centered text
12. Background shapes should have lower opacity (0.1-0.3) or be on lower tracks
</video_artifact>
`;

// src/prompts/form.js
var formPrompt = `
<form_artifact>
When user needs to collect input, make choices, or complete a workflow, generate a \`form\` code block.

FORMAT:
\`\`\`form
{
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
  "variant": "buttons",
  "display": "inline",
  "description": "Choose option:",
  "data": {
    "fields": [
      {"type": "button", "id": "yes", "label": "Yes", "style": "primary"},
      {"type": "button", "id": "no", "label": "No", "style": "secondary"}
    ]
  }
}

FIELD TYPES:
text, email, password, number, tel, url, textarea, select, radio, checkbox, date, time, file, rating, color, range, button

FIELD PROPERTIES:
- name: field identifier (required for input fields)
- type: field type (required)
- label: display label
- placeholder: hint text
- required: true/false
- defaultValue: initial value
- helpText: description below field
- options: [{value, label}] for select/radio

BUTTON PROPERTIES:
- type: "button" (required)
- id: button identifier (required)
- label: button text (required)
- style: "primary"|"secondary"|"ghost"|"danger"|"success"

DISPLAY RULES:
- inline: simple forms (1-3 fields), quick buttons
- panel: complex forms, wizards, file uploads, 4+ fields
</form_artifact>
`;

// src/prompts/social.js
var socialPrompt = `
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
