/**
 * Vue System Prompt
 * Instructs AI to generate Vue component artifacts
 */

export const vuePrompt = `
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

export default vuePrompt;
