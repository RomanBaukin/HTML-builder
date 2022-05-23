const fs = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, 'secret-folder');

fs.readdir(folderPath, {
  withFileTypes: true
}, (err, files) => {
  if (err) console.log(err.message);

  for (const file of files) {
    if (file.isFile()) {
      const filePath = path.join(__dirname, 'secret-folder', file.name);

      fs.stat(filePath, (err, stats) => {
        if (err) console.log(err.message);

        const fileName = file.name.split('.')[0];
        const fileExt = path.extname(file.name).split('.')[1];
        const fileSize = (stats.size / 1024).toFixed(2);

        console.log(`${fileName} - ${fileExt} - ${fileSize}kb`);
      });
    }
  }
});
