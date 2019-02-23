var express = require('express');
const bookRouter = express.Router(); //encapsulate all routes


bookRouter.route('/')
  .get((req, res) => {
      res.render(
          'bookListView',
          { 
            nav: [
                {link: '/books', title: 'Books'},
                {link: '/authors', title: 'Authors'}],
            title: 'Books' 
        } );
  });

bookRouter.route('/:id') //for rendering single book using id
  .get((req, res) => {
      const { id } = req.params;
      res.render(
        'bookView',
        { 
          nav: [
              {link: '/books', title: 'Books'},
              {link: '/authors', title: 'Authors'}],
          title: 'Library',
          //book: books[id]
      } );
  });


module.exports = bookRouter;