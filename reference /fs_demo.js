const fs = require('fs');
const path = require('path');

//create folder 
/* fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
  if(err) throw err;
  console.log("folder created")
});
 */
//create and write to file
/* fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "Hello World", err =>{
  if(err) throw err;
  console.log("File created")

  fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), " I love Node js", err =>{
  if(err) throw err;
  console.log("File created")
});
}); */


  fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err,data) =>{
  if(err) throw err;
  console.log(data)
});

  fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello111.txt'), (err) =>{
  if(err) throw err;
  console.log("File Rename")
});
