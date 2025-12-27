/**
 * Canvas System Prompt
 * Instructs AI to generate canvas/whiteboard artifacts
 */

export const canvasPrompt = `
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
| YouTube Thumbnail | 1280 × 720 |
| Instagram Post | 1080 × 1080 |
| Instagram Story | 1080 × 1920 |
| Social Banner | 1200 × 630 |
| Logo | 500 × 500 |
| Presentation | 1920 × 1080 |

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

export default canvasPrompt;
