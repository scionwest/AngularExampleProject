var express = require('express');
var path = require('path');
var events = require('./eventsController');
var bodyParser = require('body-parser');

var app = express();
var rootPath = path.normalize(__dirname + '/../');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootPath + 'app'));
app.get('/api/data/event/:id', events.get);
app.post('/api/data/event/:id', events.save);

app.listen(8000);
console.log('Server listening on port 8000');
