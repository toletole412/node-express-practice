var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var path = require('path'); //built-in methods


var app = express();
const port = process.env.PORT || 3000; 
const bookRouter = express.Router(); //encapsulate all routes

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs'); //set default engine

bookRouter.route('/')
  .get((req, res) => {
      res.render(
          'books',
          { 
            nav: [
                {link: '/books', title: 'Books'},
                {link: '/authors', title: 'Authors'}],
            title: 'Books' 
        } );
  });

bookRouter.route('/single')
  .get((req, res) => {
      res.send('hello single book');
  });

app.use('/books', bookRouter);

app.get('/', function(req, res) {
    //--below is the way to send as a file
    //res.sendFile(__dirname + '/views/index.html');
    //__dirname: current file (here, app.js)
    //but if we use path method, we can code like this 
    //res.sendFile(path.join(__dirname, views, index.html'));
    //path methods ignore '/'
    //--below is the way using ejs
    res.render(
        'index',
        { 
            nav: [
                {link: '/books', title: 'Books'},
                {link: '/authors', title: 'Authors'}],
            title: 'Library' 
        }
    );
});

app.listen(port, function() {
    debug('listening on port ' + chalk.green(port));
});;