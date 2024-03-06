const fs = require('fs');

function readFileContent() {
  fs.readFile('./files/file-data.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Content of file-data.txt:');
    console.log(data);
  });
}

module.exports = readFileContent;