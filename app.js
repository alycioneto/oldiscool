const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.disable('etag');

consign({verbose: false})
    .include('config')
    .then('models')
    .then('controllers')
    .then('routes')
    .into(app);

app.listen(1991, function () {
    console.log('Tenda aberta!')
});
