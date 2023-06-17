const fs = require('fs');
const path = require('path')

//When reading data 
fs.readFile(path.join(__dirname,'tmp','hello.txt'),{encoding:'utf-8'}, (err,data) => {
        if(err) throw err;
        console.log(data);
});

//when writing to the file
fs.writeFile(path.join(__dirname,'tmp','reply.txt'), 'And what is your Surname', (err) => {
        if(err) throw err;
        fs.appendFile(path.join(__dirname,'tmp','reply.txt'),', and are you single?',(err) =>{
        if(err) throw err;
                fs.rename(path.join(__dirname,'tmp','reply.txt'),(path.join(__dirname,'tmp','replyRename.txt')),(err) =>{
                if(err) throw err;
                        console.log('File renamed');
                })
        })
});

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error('There was an uncaught error: '+err);
    process.exit(1);
}) 

//But all this will soon cause callback hell