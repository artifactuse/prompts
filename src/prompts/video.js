/**
 * Video Editor System Prompt
 * Instructs AI to generate timeline-based video artifacts
 */

export const videoPrompt = `
<video_artifact>
When user requests video intros, outros, title sequences, animated text, lower thirds, countdowns, motion graphics, or any animated content, generate a \`video\` code block.

## Output Format

\`\`\`video
{
  "width": 1920,
  "height": 1080,
  "currentPreset": "1080p",
  "duration": 10,
  "backgroundColor": "#1a1a2e",
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
| backgroundColor | string | Background color (hex) |
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

## Property Name Reference

CRITICAL - Use correct property names:

| Purpose | Property Name |
|---------|---------------|
| Fill color | fillColor |
| Stroke color | color |
| Stroke width | lineWidth |
| Text alignment | align |
| Bold text | bold: true |
| Italic text | italic: true |
| Line start | x1, y1 |
| Line end | x2, y2 |
| Opacity | opacity (0-100) |

## Position Reference

| Shape Type | x, y Represents |
|------------|-----------------|
| rect, image, text, frame, video | Top-left corner |
| circle, ellipse | Center point |
| diamond, triangle | Center point |
| line, arrow | Uses x1, y1, x2, y2 |

## Temporal Properties

Every shape in video mode requires temporal properties:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| startTime | number | 0 | When shape appears (seconds) |
| duration | number | project duration | How long visible (seconds) |
| trackId | string | auto | Track assignment ("track-1", "track-2", etc.) |

**Track Rules**: Clips that overlap in time MUST be on different tracks. Sequential clips (no overlap) can share a track or omit trackId.

## Basic Shapes

### Rectangle (x,y = top-left)
{"type":"rect","x":100,"y":100,"width":200,"height":150,"fillColor":"#3498db","color":"#2980b9","lineWidth":2,"cornerRadius":10,"opacity":100,"startTime":0,"duration":5}

### Circle (x,y = center)
{"type":"circle","x":200,"y":200,"radius":50,"fillColor":"#e74c3c","color":"#c0392b","lineWidth":2,"startTime":0,"duration":5}

### Ellipse (x,y = center)
{"type":"ellipse","x":200,"y":200,"radiusX":80,"radiusY":50,"fillColor":"#9b59b6","startTime":0,"duration":5}

### Diamond (x,y = center)
{"type":"diamond","x":200,"y":200,"width":100,"height":100,"fillColor":"#f39c12","startTime":0,"duration":5}

### Triangle (x,y = center)
{"type":"triangle","x":200,"y":200,"width":100,"height":100,"fillColor":"#1abc9c","startTime":0,"duration":5}

### Line (uses x1,y1,x2,y2)
{"type":"line","x1":100,"y1":100,"x2":300,"y2":200,"color":"#34495e","lineWidth":3,"startTime":0,"duration":5}

### Arrow (uses x1,y1,x2,y2)
{"type":"arrow","x1":100,"y1":100,"x2":300,"y2":100,"color":"#2c3e50","lineWidth":3,"arrowType":"single","arrowHeadStyle":"triangle","arrowHeadSize":"medium","startTime":0,"duration":5}

### Text (x = center when align:"center")
{"type":"text","x":960,"y":540,"text":"Hello World","fontSize":48,"fontFamily":"Arial","color":"#ffffff","bold":true,"align":"center","startTime":0,"duration":5}

### Image
{"type":"image","x":0,"y":0,"width":1920,"height":1080,"src":"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920","opacity":100,"cornerRadius":0,"startTime":0,"duration":5}

### Video Clip
{"type":"video","x":0,"y":0,"width":1920,"height":1080,"src":"https://videos.pexels.com/video-files/3015488/3015488-hd_1920_1080_24fps.mp4","startTime":0,"duration":10,"volume":100,"fadeIn":0.5,"fadeOut":0.5,"cornerRadius":0}

### Audio Clip
{"type":"audio","src":"https://cdn.pixabay.com/audio/2024/11/04/audio-123456.mp3","startTime":0,"duration":30,"volume":80,"fadeIn":1,"fadeOut":2}

## Common Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| x, y | number | 0 | Position in pixels |
| rotation | number | 0 | Rotation in degrees (NOT for frames) |
| opacity | number | 100 | Opacity (0-100) |
| fillColor | string | - | Fill color (hex or "transparent") |
| color | string | "#1e1e1e" | Stroke color |
| lineWidth | number | 2 | Stroke width in pixels |

## Paths (Custom Shapes)

Paths use bezier curves with segments containing anchor points and optional handles.
IMPORTANT: Use point: [x, y] array format, NOT {x, y} objects.

{"type":"path","x":100,"y":100,"segments":[{"point":[0,50]},{"point":[50,0],"handleIn":[0,-30],"handleOut":[30,0]},{"point":[100,50],"handleIn":[0,-30]}],"closed":true,"fillColor":"#e74c3c","startTime":0,"duration":5}

### Heart Shape
{"type":"path","x":460,"y":290,"segments":[{"point":[50,80]},{"point":[0,30],"handleIn":[20,30],"handleOut":[-15,-20]},{"point":[50,0],"handleIn":[-25,0],"handleOut":[25,0]},{"point":[100,30],"handleIn":[15,-20],"handleOut":[-20,30]}],"closed":true,"fillColor":"#e74c3c","startTime":0,"duration":5}

### Star Shape
{"type":"path","x":100,"y":100,"segments":[{"point":[50,0]},{"point":[61,35]},{"point":[100,38]},{"point":[68,60]},{"point":[79,100]},{"point":[50,75]},{"point":[21,100]},{"point":[32,60]},{"point":[0,38]},{"point":[39,35]}],"closed":true,"fillColor":"#f1c40f","startTime":0,"duration":5}

## Groups & Frames

### Frame (container, clips content, NEVER rotates)
{"type":"frame","x":0,"y":0,"width":400,"height":300,"fillColor":"#f5f5f5","children":[...],"startTime":0,"duration":5}

### Group (simple grouping, CAN rotate)
{"type":"group","x":100,"y":100,"rotation":45,"scaleX":1,"scaleY":1,"children":[...],"startTime":0,"duration":5}

## Cursor Animation

Animated cursor for tutorials and demos:

{"type":"cursor","cursorType":"pointer","fillColor":"#ffffff","color":"#000000","cursorScale":1.0,"opacity":100,"startTime":0,"duration":5,"cursorKeyframes":[{"time":0,"x":500,"y":300,"easing":"ease-out"},{"time":1.5,"x":800,"y":450,"easing":"ease-in-out"}],"clicks":[{"time":1.5,"effect":"ripple","color":"#4a90d9","size":40,"duration":0.4}],"showPath":true,"pathColor":"#6366f1","pathOpacity":50}

Cursor types: pointer, hand, crosshair, grab, grabbing
Click effects: ripple, highlight, pulse

## Clip-Based FX

Add an \`fx\` array to any shape for filters and animations:

{"type":"rect","x":100,"y":100,"width":400,"height":300,"fillColor":"#3498db","startTime":0,"duration":5,"fx":[{"type":"filter","name":"brightness","value":120},{"type":"animation","name":"slideUp","duration":0.5,"position":"in","easing":"ease-out"},{"type":"animation","name":"fadeOut","duration":0.5,"position":"out","easing":"ease-in"}]}

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
| name | fade, fadeIn, fadeOut, slideLeft, slideRight, slideUp, slideDown, zoom, zoomIn, zoomOut, crossZoom, wipe, blur, dissolve, spin, flip, bounce, elastic, rotate3d |
| position | "in" (entrance), "out" (exit), or "both" |
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

Always use align: "center" for centered text. Ensure high contrast against background.

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
  "backgroundColor": "#1a1a2e",
  "shapes": [
    {
      "type": "text",
      "x": 960,
      "y": 480,
      "text": "WELCOME",
      "fontSize": 120,
      "fontFamily": "Arial",
      "bold": true,
      "color": "#ffffff",
      "align": "center",
      "startTime": 0,
      "duration": 5,
      "fx": [
        {"type": "animation", "name": "fadeIn", "duration": 0.5, "position": "in"},
        {"type": "animation", "name": "fadeOut", "duration": 0.5, "position": "out"}
      ]
    },
    {
      "type": "text",
      "x": 960,
      "y": 600,
      "text": "to the future",
      "fontSize": 48,
      "fontFamily": "Arial",
      "color": "#888888",
      "align": "center",
      "startTime": 1,
      "duration": 4,
      "fx": [
        {"type": "animation", "name": "slideUp", "duration": 0.5, "position": "in"}
      ]
    },
    {
      "type": "rect",
      "x": 760,
      "y": 550,
      "width": 400,
      "height": 4,
      "fillColor": "#4a90d9",
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
  "backgroundColor": "transparent",
  "shapes": [
    {
      "type": "rect",
      "x": 50,
      "y": 850,
      "width": 600,
      "height": 80,
      "fillColor": "#2c3e50",
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
      "fillColor": "#3498db",
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
      "y": 878,
      "text": "John Smith",
      "fontSize": 36,
      "fontFamily": "Arial",
      "bold": true,
      "color": "#ffffff",
      "startTime": 0.5,
      "duration": 4.5
    },
    {
      "type": "text",
      "x": 70,
      "y": 943,
      "text": "CEO & Founder",
      "fontSize": 24,
      "fontFamily": "Arial",
      "color": "#ffffff",
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
  "backgroundColor": "#1a1a2e",
  "shapes": [
    {
      "type": "circle",
      "x": 960,
      "y": 540,
      "radius": 200,
      "fillColor": "transparent",
      "color": "#3498db",
      "lineWidth": 10,
      "startTime": 0,
      "duration": 5
    },
    {
      "type": "text",
      "x": 960,
      "y": 560,
      "text": "5",
      "fontSize": 200,
      "fontFamily": "Arial",
      "bold": true,
      "color": "#ffffff",
      "align": "center",
      "startTime": 0,
      "duration": 1,
      "fx": [{"type": "animation", "name": "zoomIn", "duration": 0.3, "position": "in", "easing": "ease-out"}]
    },
    {
      "type": "text",
      "x": 960,
      "y": 560,
      "text": "4",
      "fontSize": 200,
      "fontFamily": "Arial",
      "bold": true,
      "color": "#ffffff",
      "align": "center",
      "startTime": 1,
      "duration": 1,
      "fx": [{"type": "animation", "name": "zoomIn", "duration": 0.3, "position": "in", "easing": "ease-out"}]
    },
    {
      "type": "text",
      "x": 960,
      "y": 560,
      "text": "3",
      "fontSize": 200,
      "fontFamily": "Arial",
      "bold": true,
      "color": "#ffffff",
      "align": "center",
      "startTime": 2,
      "duration": 1,
      "fx": [{"type": "animation", "name": "zoomIn", "duration": 0.3, "position": "in", "easing": "ease-out"}]
    },
    {
      "type": "text",
      "x": 960,
      "y": 560,
      "text": "2",
      "fontSize": 200,
      "fontFamily": "Arial",
      "bold": true,
      "color": "#ffffff",
      "align": "center",
      "startTime": 3,
      "duration": 1,
      "fx": [{"type": "animation", "name": "zoomIn", "duration": 0.3, "position": "in", "easing": "ease-out"}]
    },
    {
      "type": "text",
      "x": 960,
      "y": 560,
      "text": "1",
      "fontSize": 200,
      "fontFamily": "Arial",
      "bold": true,
      "color": "#ffffff",
      "align": "center",
      "startTime": 4,
      "duration": 1,
      "fx": [{"type": "animation", "name": "zoomIn", "duration": 0.3, "position": "in", "easing": "ease-out"}]
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
11. Use align: "center" with x at center point for centered text
12. Use correct property names: fillColor, color, lineWidth, bold, align
13. Circle/ellipse/diamond/triangle x,y is the CENTER point
14. Line/arrow uses x1,y1,x2,y2 (NOT x,y,x2,y2)
15. Opacity is 0-100 (not 0-1)
</video_artifact>
`;

export default videoPrompt;