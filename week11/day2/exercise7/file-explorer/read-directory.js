const fs = require('fs');

// Specify the directory
const directoryPath = './';

// Read the list of files in the specified directory
fs.readdir(directoryPath, (err, files) => {
    if (err) throw err;

    // Display the file names
    console.log('Files in the directory:');
    files.forEach(file => {
        console.log(file);
    });
});
