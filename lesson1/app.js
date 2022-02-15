// const {greeting} = require('./helper');
// greeting('Olenka')

// console.log(__filename);
// console.log(__dirname)

// const {test} = require('./test/helper')
// test();
// console.log(process.cwd(), 'process')
// console.log(__dirname, 'dirname')
// require('./test/helper')
// console.log(name)

 const path = require('path');
// const joinPath = path.join(__dirname, 'test2', 'files', 'public', 'text.txt');
// console.log(joinPath);
// const normalize = path.normalize('test///files//public///text.txt');
// console.log(normalize)
// const resolve = path.resolve('test///files//public///text.txt');
// console.log(resolve)
//const os = require('os');
// console.log(os.cpus())
// console.log(os.cpus().length)
//console.log(os.arch())



const fs = require('fs');
//fs.writeFileSync(path.join(__dirname, 'files', 'file.txt.txt'), 'SOME DATA')
// fs.writeFile(path.join(__dirname, 'files', 'file2.txt'), 'SOME DATA2', (err =>{
//  if (err){
//   console.log(err)
//   throw err
//  }
// } ))
// fs.readFile(path.join(__dirname, 'files', 'file2.txt'),'utf8', ((err, data) => {
//  if(err){
//   console.log(err)
//   throw err;
//  }
//  console.log(data)
// }))

// fs.appendFile(path.join(__dirname, 'files', 'file2.txt'), '\nNEW DATA', (err => {
//  if(err){
//   console.log(err)
//   throw err;
//  }
// }))

// for (let i = 0; i < 100; i++) {
//  fs.appendFile(path.join(__dirname, 'files', 'file2.txt'), '\nNEW DATA',{flag:'a'}, (err => {
//   if(err){
//    console.log(err)
//    throw err;
//   }
//  }))
// }
// fs.truncate(path.join(__dirname, 'files', 'file2.txt'), err => {
//  if(err){
//   console.log(err)
//   throw err;
//  }
// } )
// fs.unlink(path.join(__dirname, 'files', 'file2.txt'), (err) => {
//  if(err){
//   console.log(err)
//   throw err;
//  }
// })
// fs.mkdir(path.join(__dirname, 'public'), (err) => {
//  if(err){
//   console.log(err)
//   throw err;
//  }
// })
// fs.mkdir(path.join(__dirname, 'public2', 'text2', 'test23'),{recursive:true}, (err)=>{
//  if(err){
//   console.log(err)
//   throw err;
//  }
// })
// fs.rmdir(path.join(__dirname, 'public2', 'text2', 'test23'), (err)=>{
//  if(err){
//   console.log(err)
//   throw err;
//  }
// })

// fs.readdir(path.join(__dirname, 'test'), ((err, data) =>{
//  console.log(data)
// } ))
// fs.rename(path.join(__dirname, 'test', 'file.txt'), path.join(__dirname, 'test', 'file2.txt'), (err)=>{
//  if(err){
//   console.log(err)
//   throw err;
//  }
// })
fs.rename(path.join(__dirname, 'test', 'file2.txt'), path.join(__dirname, 'public2', 'text2', 'file2.txt'), (err)=>{
 if(err){
  console.log(err)
  throw err;
 }
})