const fs = require('fs');
const path = require('path');
const glob = require('glob');

const files = glob.sync('src/**/*.tsx');

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const fixedContent = content.replace(/<\/([a-zA-Z0-9.-]+)_content>/g, '</$1>');
  // Also fix the spaces I introduced
  const finalContent = fixedContent.replace(/<\/ ([a-zA-Z0-9.-]+)>/g, '</$1>');
  fs.writeFileSync(file, finalContent);
});
console.log('Cleaned up all JSX tags.');
