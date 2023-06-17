// to avoid callback hell we use this method with promises async
const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'tmp','hello.txt'),'utf8');
        console.log(data);

        await fsPromises.unlink(path.join(__dirname,'tmp','hello.txt'));
        await fsPromises.writeFile(path.join(__dirname,'tmp','helloWrld.txt'),data);
        await fsPromises.appendFile(path.join(__dirname,'tmp','helloWrld.txt'),',Nice to meet you!');
        await fsPromises.rename(path.join(__dirname,'tmp','helloWrld.txt'),path.join(__dirname,'tmp','world.txt'));

        //reading a newly created file

        const newData = await fsPromises.readFile(path.join(__dirname,'tmp','world.txt'),'utf8');
        console.log(newData);
    } catch (err){
        console.error(err);
    }
}

fileOps();