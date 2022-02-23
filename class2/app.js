const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({extended: true}))
const {engine} = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'static')))
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'))

let users = [];
let error = '';


app.get('/login', (req, res) => {
    res.render('login')
});


app.post('/login', ({body}, res) => {
    const userExist = users.some(user => user.email === body.email);
    if (userExist) {
        error = 'User with this email exist';
        res.redirect('/error')
        return
    }
    users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1});
    res.redirect('/users')
})

app.get('/signIn', (req, res) => {
    res.render('signIn')
})

app.post('/signIn', ({body}, res) => {
    const user = users.find(user => user.email === body.email && user.password === body.password);
    if (!user) {
        error = 'Your password or  login is wrong';
        res.redirect('/error');
        return
    }
    res.redirect(`/users/${user.id}`)

})

app.get('/users', ({query}, res) => {
    const {city, age} = query;
    let usersArr = [...users];
    if (city) {
        usersArr = usersArr.filter(user => user.city === city);
        res.render('users', {users: usersArr})
    }
    if (age) {
        usersArr = usersArr.filter(user => user.age = age);
        res.render('users', {users: usersArr})
    }
    res.render('users', {users})
})

app.get('/users/:userId', ({params}, res) => {
    const user = users.find(user => user.id === +params.userId);
    if (!user) {
        error = `User with ${params.userId} don't exist`;
        res.redirect('/error');
        return
    }
    res.render('userInfo', {user})
})
app.post('/users/:userId', ({params}, res, next) => {
    users = users.filter(user => user.id !== +params.userId);
    res.redirect('/users')
})


app.get('/error', (req, res) => {
    res.render('error', {error})
})

app.use((req, res) => {
    res.render('notFound')
})
app.listen(5200, () => {
    console.log('Server is working')
});
