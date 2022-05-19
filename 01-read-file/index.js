const fs = require('fs');
const path = require('path');
const {
  stdout
} = process;

fs.readFile(path.join(__dirname, 'text.txt'), 'utf8', (error, fileContent) => {
  if (error) throw error;
  stdout.write(fileContent);
});
