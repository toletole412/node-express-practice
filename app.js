var express = require('express');
var chalk = require('chalk');
//var debug = require('debug')('app');

var app = express();

app.get('/', function(req, res) {
    res.send('Hello from my app');
});

app.listen(3001, function() {
    console.log('listening on port ' + chalk.green('3001'));
});