/**
 * Video Editor System Prompt
 * Instructs AI to generate timeline-based video artifacts
 */

export const videoPrompt = `
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
| 1080p | 1920 × 1080 | YouTube, standard HD |
| 720p | 1280 × 720 | Twitter, smaller files |
| 4K | 3840 × 2160 | High quality |
| Vertical | 1080 × 1920 | TikTok, Reels, Shorts |
| Square | 1080 × 1080 | Instagram posts |
| Portrait | 1080 × 1350 | Instagram (4:5) |
| Cinematic | 2560 × 1080 | Ultra-wide (21:9) |
| FB Cover | 820 × 312 | Facebook cover video |

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
Playback: Space Play/Pause, Home Start, End End, ←/→ Prev/Next frame, L Loop
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

export default videoPrompt;
