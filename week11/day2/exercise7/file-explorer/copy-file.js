const fs = require('fs');

// Read content from source.txt
fs.readFile('source.txt', 'utf8', (err, data) => {
    if (err) throw err;

    // Write the content to destination.txt
    fs.writeFile('destination.txt', data, (err) => {
        if (err) throw err;
        console.log('Content copied successfully!');
    });
});
