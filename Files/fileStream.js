// If we have a large files we use this method 

const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname,'tmp','lorem.txt'),{encoding:'utf8'});

const ws = fs.createWriteStream(path.join(__dirname,'tmp','textEditor.txt'));

// once this has been defined we need to leston from our streams 

//traditional way is :
/*
rs.on('data',(dataChunk) => {
    ws.write(dataChunk);
});
*/

//effeciant way of doing this is:
rs.pipe(ws);