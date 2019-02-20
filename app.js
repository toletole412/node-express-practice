var express = require('express');
var chalk = require('chalk');
//var debug = require('debug')('app');
var path = require('path'); //built-in methods

var app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
    //__dirname: current file (here, app.js)
    //but if we use path method, we can code like this 
    //res.sendFile(path.join(__dirname, views, index.html'));
    //path methods ignore '/'
});

app.listen(3002, function() {
    console.log('listening on port ' + chalk.green('3002'));
});