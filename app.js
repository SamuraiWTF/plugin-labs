var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nunjucks = require('nunjucks')

var lab1Router = require('./routes/api-lab1');

var app = express();

app.use(logger('dev'));

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.get('/', function(req, res) {
  res.render('index.html');
});

app.get('/lab:id?', function(req, res) {
  res.render('lab' + req.params.id + '.html');
});


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/bulma.css',function(req, res){//get,put,post,delete
  res.sendFile(__dirname + '/node_modules/bulma/css/bulma.min.css');
});
app.get('/axios.js', function(req, res){//get,put,post,delete
  res.sendFile(__dirname + '/node_modules/axios/dist/axios.min.js');
});
app.get('/axios.min.map', function(req, res){//get,put,post,delete
  res.sendFile(__dirname + '/node_modules/axios/dist/axios.min.map');
});


app.use('/api/lab1', lab1Router);

module.exports = app;
