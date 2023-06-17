//when you want to creat a directory/folder

const fs = require('fs');
const path = require('path');

if(!fs.existsSync('../NPM')){ //first check if it exists or not 
    fs.mkdir('../NPM',(err) =>{
    if(err) throw err;
        console.log('Directory Created');
    });
}

// if it does exist then delete it 
/*if(fs.existsSync('./newFile')){ 
    fs.rmdir('./newFile',(err) =>{
    if(err) throw err;
        console.log('Directory removed');
    });
}*/