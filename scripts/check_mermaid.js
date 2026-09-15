const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const regex = /<pre class="mermaid">([\s\S]*?)<\/pre>/g;
let match;
let i = 0;
while ((match = regex.exec(content)) !== null) {
  console.log(`=== Diagram ${i} ===`);
  console.log(match[1].trim());
  console.log('\n');
  i++;
}
