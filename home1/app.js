// Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів, але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
//
// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу. (ті, що були в папці inPerson будуть в папці online)
const path = require("path");
const fs = require("fs");

const onlineUsers= [{name:'Petro', age:28, city:'Lviv'}, {name:'Olya', age: 30, city: 'Kyiv'}, {name: 'Mike', age: 41, city: 'Barselona'}]
const inPersonUsers = [{name:'Victor', age:18, city:'Dnipro'}, {name: 'Philip', age: 45, city: 'New York'}]


// fs.mkdir(path.join(__dirname, 'main', 'online' ), {recursive:true},(err)=>{
//     if(err){
//         console.log(err)
//         throw err;
//     }
// })
// fs.mkdir(path.join(__dirname, 'main', 'inPerson'), (err)=>{
//     if(err){
//         console.log(err)
//         throw err;
//     }
// })
// for (let i = 0; i < onlineUsers.length; i++) {
//     for (const key in onlineUsers[i]) {
// fs.appendFile(path.join(__dirname, 'main', 'online', 'online.txt'),`\n${key}: ${onlineUsers[i][key]}`, (err)=>{
//     if(err){
//         console.log(err)
//         throw err;
//     }
// } )
//     }
// }

// for (let i = 0; i < inPersonUsers.length; i++) {
//     for (const inPersonUsersKey in inPersonUsers[i]) {
//         fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'),( `\n${inPersonUsersKey}: ${inPersonUsers[i][inPersonUsersKey]}`),(err)=>{
//             if(err){
//                 console.log(err)
//                 throw err;
//             }
//         })
//     }
// }
// fs.readFile(path.join(__dirname, 'main', 'online', 'online.txt'),'utf8', (err, data) => {
//     if(err){
//         console.log(err)
//         throw err;
//     }
//     fs.writeFile(path.join(__dirname, 'main', 'buffer.txt'), data, (err1 => {
//         if(err1){
//             console.log(err1)
//             throw err1
//         }
//     }))
// })

// fs.readFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), 'utf8', ((err, data) => {
//     if(err){
//         console.log(err)
//         throw err;
//     }
//     fs.appendFile(path.join(__dirname, 'main', 'online', 'online.txt'), data, {flag:'w'}, (err1 => {
//         if(err){
//             console.log(err)
//             throw err;
//         }
//     }))
// }))

fs.readFile(path.join(__dirname, 'main', 'buffer.txt'), 'utf8', ((err, data) => {
    if(err){
        console.log(err)
        throw err;
    }
    fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), data, {flag:'w'},(err1 => {
        if(err1){
            console.log(err1)
            throw err1;
        }
    }))
}))