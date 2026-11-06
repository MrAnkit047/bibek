const fs = require('fs');
const path = require('path');

const pub = path.join(__dirname, 'public');
if (!fs.existsSync(pub)) fs.mkdirSync(pub, { recursive: true });

const files = fs.readdirSync(__dirname);
for (const f of files) {
  if (f === 'public' || f === '.git' || f === 'node_modules') continue;
  const src = path.join(__dirname, f);
  const dest = path.join(pub, f);
  if (fs.statSync(src).isFile()) {
    fs.copyFileSync(src, dest);
  }
}
console.log('Build complete: All static files copied to public/');
