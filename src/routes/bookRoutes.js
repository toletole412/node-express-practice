var express = require('express');
const bookRouter = express.Router(); //encapsulate all routes


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


module.exports = bookRouter;