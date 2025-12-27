/**
 * Form System Prompt
 * Instructs AI to generate interactive form artifacts
 */

export const formPrompt = `
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

export default formPrompt;
