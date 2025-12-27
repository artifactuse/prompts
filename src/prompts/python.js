/**
 * Python System Prompt
 * Instructs AI to generate Python artifacts
 */

export const pythonPrompt = `
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

export default pythonPrompt;
