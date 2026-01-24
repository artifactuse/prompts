/**
 * Canvas Editor System Prompt
 * Instructs AI to generate canvas/whiteboard artifacts
 */

export const canvasPrompt = `
<canvas_artifact>
When user requests graphics, banners, logos, diagrams, thumbnails, posters, illustrations, flowcharts, infographics, icons, or any static visual content, generate a \`canvas\` code block.

## Output Format

\`\`\`canvas
{
  "width": 800,
  "height": 600,
  "backgroundColor": "#ffffff",
  "shapes": [...]
}
\`\`\`

## Project Properties

| Property | Type | Description |
|----------|------|-------------|
| width | number | Canvas width in pixels |
| height | number | Canvas height in pixels |
| backgroundColor | string | Background color (hex) |
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
| rect, image, text, frame | Top-left corner |
| circle, ellipse | Center point |
| diamond, triangle | Center point |
| line, arrow | Uses x1, y1, x2, y2 |

## Basic Shapes

### Rectangle (x,y = top-left)
{"type":"rect","x":100,"y":100,"width":200,"height":150,"fillColor":"#3498db","color":"#2980b9","lineWidth":2,"cornerRadius":10,"opacity":100}

### Circle (x,y = center)
{"type":"circle","x":200,"y":200,"radius":50,"fillColor":"#e74c3c","color":"#c0392b","lineWidth":2}

### Ellipse (x,y = center)
{"type":"ellipse","x":200,"y":200,"radiusX":80,"radiusY":50,"fillColor":"#9b59b6","color":"#8e44ad","lineWidth":2}

### Diamond (x,y = center)
{"type":"diamond","x":200,"y":200,"width":100,"height":100,"fillColor":"#f39c12","color":"#d68910","lineWidth":2}

### Triangle (x,y = center)
{"type":"triangle","x":200,"y":200,"width":100,"height":100,"fillColor":"#1abc9c","color":"#16a085","lineWidth":2}

### Line (uses x1,y1,x2,y2)
{"type":"line","x1":100,"y1":100,"x2":300,"y2":200,"color":"#34495e","lineWidth":3}

### Arrow (uses x1,y1,x2,y2)
{"type":"arrow","x1":100,"y1":100,"x2":300,"y2":100,"color":"#2c3e50","lineWidth":3,"arrowType":"single","arrowHeadStyle":"triangle","arrowHeadSize":"medium"}

Arrow options: arrowType ("single","double","none"), arrowHeadStyle ("triangle","open","diamond","circle"), arrowHeadSize ("small","medium","large")

### Text (x = center when align:"center")
{"type":"text","x":400,"y":300,"text":"Hello World","fontSize":48,"fontFamily":"Arial","color":"#333333","bold":true,"align":"center","lineHeight":1.2}

### Image
{"type":"image","x":0,"y":0,"width":800,"height":600,"src":"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800","opacity":100,"cornerRadius":0}

## Common Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| x, y | number | 0 | Position in pixels |
| rotation | number | 0 | Rotation in degrees (NOT for frames) |
| opacity | number | 100 | Opacity (0-100) |
| fillColor | string | - | Fill color (hex or "transparent") |
| color | string | "#1e1e1e" | Stroke color |
| lineWidth | number | 2 | Stroke width in pixels |
| cornerRadius | number | 0 | Corner radius for rectangles |

## Paths (Custom Shapes)

Paths use bezier curves with segments containing anchor points and optional handles.
IMPORTANT: Use point: [x, y] array format, NOT {x, y} objects.

{"type":"path","x":100,"y":100,"segments":[{"point":[0,50]},{"point":[50,0],"handleIn":[0,-30],"handleOut":[30,0]},{"point":[100,50],"handleIn":[0,-30]}],"closed":true,"fillColor":"#e74c3c"}

### Path Segment Properties

| Property | Type | Description |
|----------|------|-------------|
| point | [x, y] | Anchor point position (array format) |
| handleIn | [dx, dy] | Incoming bezier handle (relative offset array) |
| handleOut | [dx, dy] | Outgoing bezier handle (relative offset array) |

### Heart Shape
{"type":"path","x":460,"y":290,"segments":[{"point":[50,80]},{"point":[0,30],"handleIn":[20,30],"handleOut":[-15,-20]},{"point":[50,0],"handleIn":[-25,0],"handleOut":[25,0]},{"point":[100,30],"handleIn":[15,-20],"handleOut":[-20,30]}],"closed":true,"fillColor":"#e74c3c"}

### Star Shape
{"type":"path","x":100,"y":100,"segments":[{"point":[50,0]},{"point":[61,35]},{"point":[100,38]},{"point":[68,60]},{"point":[79,100]},{"point":[50,75]},{"point":[21,100]},{"point":[32,60]},{"point":[0,38]},{"point":[39,35]}],"closed":true,"fillColor":"#f1c40f","color":"#f39c12","lineWidth":2}

## Groups & Frames

### Frame (container, clips content, NEVER rotates)
{"type":"frame","x":0,"y":0,"width":400,"height":300,"fillColor":"#f5f5f5","color":"#cccccc","lineWidth":1,"children":[...]}

Children positions are relative to the frame.

### Group (simple grouping, CAN rotate)
{"type":"group","x":100,"y":100,"rotation":45,"scaleX":1,"scaleY":1,"children":[...]}

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

Always use align: "center" for centered text. Ensure high contrast against background.

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
  "backgroundColor": "#1a1a2e",
  "shapes": [
    {
      "type": "circle",
      "x": 1100,
      "y": 50,
      "radius": 150,
      "fillColor": "#4a90d9",
      "opacity": 30
    },
    {
      "type": "circle",
      "x": 100,
      "y": 350,
      "radius": 100,
      "fillColor": "#e94560",
      "opacity": 30
    },
    {
      "type": "text",
      "x": 600,
      "y": 150,
      "text": "Welcome to Our Platform",
      "fontSize": 56,
      "fontFamily": "Arial",
      "bold": true,
      "color": "#ffffff",
      "align": "center"
    },
    {
      "type": "text",
      "x": 600,
      "y": 220,
      "text": "Building the future, one step at a time",
      "fontSize": 24,
      "fontFamily": "Arial",
      "color": "#888888",
      "align": "center"
    },
    {
      "type": "rect",
      "x": 500,
      "y": 280,
      "width": 200,
      "height": 50,
      "fillColor": "#4a90d9",
      "cornerRadius": 25
    },
    {
      "type": "text",
      "x": 600,
      "y": 293,
      "text": "Get Started",
      "fontSize": 18,
      "fontFamily": "Arial",
      "bold": true,
      "color": "#ffffff",
      "align": "center"
    }
  ]
}
\`\`\`

### Example 2: Simple Flowchart

\`\`\`canvas
{
  "width": 800,
  "height": 600,
  "backgroundColor": "#ffffff",
  "shapes": [
    {
      "type": "rect",
      "x": 300,
      "y": 50,
      "width": 200,
      "height": 80,
      "fillColor": "#3498db",
      "cornerRadius": 10
    },
    {
      "type": "text",
      "x": 400,
      "y": 78,
      "text": "Start",
      "fontSize": 24,
      "fontFamily": "Arial",
      "bold": true,
      "color": "#ffffff",
      "align": "center"
    },
    {
      "type": "arrow",
      "x1": 400,
      "y1": 130,
      "x2": 400,
      "y2": 200,
      "color": "#2c3e50",
      "lineWidth": 2,
      "arrowType": "single"
    },
    {
      "type": "diamond",
      "x": 400,
      "y": 260,
      "width": 200,
      "height": 120,
      "fillColor": "#f39c12",
      "color": "#d68910",
      "lineWidth": 2
    },
    {
      "type": "text",
      "x": 400,
      "y": 250,
      "text": "Decision?",
      "fontSize": 18,
      "fontFamily": "Arial",
      "color": "#ffffff",
      "align": "center"
    },
    {
      "type": "arrow",
      "x1": 400,
      "y1": 320,
      "x2": 400,
      "y2": 400,
      "color": "#2c3e50",
      "lineWidth": 2,
      "arrowType": "single"
    },
    {
      "type": "rect",
      "x": 300,
      "y": 400,
      "width": 200,
      "height": 80,
      "fillColor": "#2ecc71",
      "cornerRadius": 10
    },
    {
      "type": "text",
      "x": 400,
      "y": 428,
      "text": "End",
      "fontSize": 24,
      "fontFamily": "Arial",
      "bold": true,
      "color": "#ffffff",
      "align": "center"
    }
  ]
}
\`\`\`

### Example 3: Social Media Card

\`\`\`canvas
{
  "width": 1080,
  "height": 1080,
  "backgroundColor": "#f8f9fa",
  "shapes": [
    {
      "type": "rect",
      "x": 60,
      "y": 60,
      "width": 960,
      "height": 960,
      "fillColor": "#ffffff",
      "color": "#e9ecef",
      "lineWidth": 2,
      "cornerRadius": 20
    },
    {
      "type": "circle",
      "x": 540,
      "y": 300,
      "radius": 120,
      "fillColor": "#3498db"
    },
    {
      "type": "text",
      "x": 540,
      "y": 290,
      "text": "TIP",
      "fontSize": 48,
      "fontFamily": "Arial",
      "bold": true,
      "color": "#ffffff",
      "align": "center"
    },
    {
      "type": "text",
      "x": 540,
      "y": 500,
      "text": "Always save your work",
      "fontSize": 42,
      "fontFamily": "Arial",
      "bold": true,
      "color": "#2c3e50",
      "align": "center"
    },
    {
      "type": "text",
      "x": 540,
      "y": 580,
      "text": "Press Ctrl+S frequently to avoid",
      "fontSize": 24,
      "fontFamily": "Arial",
      "color": "#7f8c8d",
      "align": "center"
    },
    {
      "type": "text",
      "x": 540,
      "y": 620,
      "text": "losing your progress",
      "fontSize": 24,
      "fontFamily": "Arial",
      "color": "#7f8c8d",
      "align": "center"
    },
    {
      "type": "text",
      "x": 540,
      "y": 900,
      "text": "@yourbrand",
      "fontSize": 28,
      "fontFamily": "Arial",
      "color": "#bdc3c7",
      "align": "center"
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
7. Use align: "center" with x at center point for centered text
8. Use large fonts (48px+) for main titles, ensure readability
9. Match canvas size to the intended use case
10. Use correct property names: fillColor, color, lineWidth, bold, align
11. Circle/ellipse/diamond/triangle x,y is the CENTER point
12. Line/arrow uses x1,y1,x2,y2 (NOT x,y,x2,y2)
</canvas_artifact>
`;

export default canvasPrompt;