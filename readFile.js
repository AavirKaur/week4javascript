const fs = require('fs'); //File System module (fs), used to read a file

fs.readFile('content.txt', 'utf8', (err, data) => {//name of the file u want to read, encoding for reading file, callback functions
    if (err) {//err for an error and no output result in terminal
        console.error("Error reading the file:", err); 
        return;
    }
    console.log(data); //data for if no error and output result in terminal
});
