/**
 * Form System Prompt
 * Instructs AI to generate interactive form artifacts
 */

export const formPrompt = `
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

export default formPrompt;