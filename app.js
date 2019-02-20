var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('Hello from my app');
});

app.listen(3000, function() {
    console.log('listening on port 3000');
});