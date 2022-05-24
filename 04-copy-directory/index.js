const fs = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, 'files');
const copyPath = path.join(__dirname, 'files-copy');

async function copyDir(sourcePath, copyPath) {
  await fs.promises.rm(copyPath, {
    recursive: true,
    force: true
  });

  await fs.promises.mkdir(copyPath, {
    recursive: true
  });

  const files = await fs.promises.readdir(sourcePath);

  for (const file of files) {
    fs.promises.copyFile(path.join(sourcePath, file), path.join(copyPath, file));
  }

  console.log('Папка скопирована');
}

copyDir(folderPath, copyPath);
