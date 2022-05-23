const fs = require('fs');
const path = require('path');
const {
  stdin,
  stdout,
  exit
} = process;

const filePath = path.join(__dirname, 'text.txt');
const writeableStream = fs.createWriteStream(filePath);

stdout.write('Введите текст для записи в файл text.txt\n' +
  'Для выхода нажмите Ctrl + C или введите: exit\n');

stdin.on('data', data => {
  if (data.toString().trim() === 'exit') exit();
  writeableStream.write(data.toString());
});

process.on('exit', () => stdout.write('Запись в файл text.txt закончена'));
process.on('SIGINT', exit);
