// Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так
//
// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після того як все завершиться. Також вийде callback hell
//
//
const path = require("path");
const fs = require("fs");
// fs.writeFile(path.join(__dirname,  'test.txt'), 'Some important information', err => {
//     if (err){
//         console.log(err)
//         throw err
//     }
//     fs.readFile(path.join(__dirname, 'test.txt'), 'utf8', ((err1, data) => {
//         if (err1){
//             console.log(err1)
//             throw err1
//         }
//         fs.writeFile(path.join(__dirname, 'text.txt'), data, (err2 => {
//             if (err2){
//                 console.log(err2)
//                 throw err2
//             }
//         }))
//     }))
// }
//)
//Second task
// fs.mkdir(path.join(__dirname, 'directory', 'class', 'letter'), {recursive:true}, (err => {
//     if (err){
//         console.log(err)
//         throw err
//     }
// }))
// fs.readFile(path.join(__dirname, 'main','file.txt'), 'utf8', ((err, data) => {
//     if (err){
//         console.log(err)
//         throw err
//     }fs.rename(path.join(__dirname, 'main', 'file.txt'), (path.join(__dirname, 'directory', 'class', 'letter', 'file1.txt')), (err1 => {
//         if (err1){
//             console.log(err1)
//             throw err1
//         }fs.unlink(path.join(__dirname, 'main', 'file.txt'), (err2 => {
//             if (err2){
//                 console.log(err2)
//                 throw err2
//             }
//         }))
//     }))
//
// }))

//Third task
// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new
// fs.mkdir(path.join(__dirname, 'task3', 'files', 'file'), {recursive:true}, (err => {
//     if (err){
//         console.log(err)
//         throw err
//     }
//     fs.writeFile(path.join(__dirname, 'task3', 'files', 'file', 'some.txt'), 'Some information',(err1 => {
//         if (err1){
//             console.log(err1)
//             throw err1
//         }
//     }))
// }))

// Чому не працює?
fs.readdir(path.join(__dirname, 'task3'),(err, files) => {
    if (err){
        console.log(err)
        throw err
    } files.forEach(file =>{
        if (file.includes('.txt')){
            fs.truncate(path.join(__dirname, 'task3', file), err1 => {
                if (err1){
                    console.log(err1)
                    throw err1
                }
            })
        }else {
            fs.rename(path.join(__dirname, 'task3', file), path.join(__dirname, 'task3', `_new${file}`), (err2 => {
                if (err2){
                    console.log(err2)
                    throw err2
                }
            }))
        }
    })
})