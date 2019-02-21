var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var path = require('path'); //built-in methods


var app = express();
const port = process.env.PORT || 3000; 

app.use(express.static(path.join(__dirname, '/public')));

app.set('views', './src/views');
app.set('view engine', 'ejs'); //set default engine

app.get('/', function(req, res) {
    //--below is the way to send as a file
    //res.sendFile(__dirname + '/views/index.html');
    //__dirname: current file (here, app.js)
    //but if we use path method, we can code like this 
    //res.sendFile(path.join(__dirname, views, index.html'));
    //path methods ignore '/'
    //--below is the way using ejs
    res.render('index', { list: ['a', 'b'], title: 'Library' });
});

app.listen(port, function() {
    debug('listening on port ' + chalk.green(port));
});;