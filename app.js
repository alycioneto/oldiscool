const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.user = 'admin';
app.password = 'minhasenha';

app.use(session({
    secret: 'supersecret',
    resave: true,
    saveUninitialized: true
}));

app.disable('etag');

consign({verbose: false})
    .include('config')
    .then('middlewares')
    .then('models')
    .then('controllers')
    .then('routes')
    .into(app);

app.listen(1991, function () {
    console.log('OldIsCool no ar!')
});
