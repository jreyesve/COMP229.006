/*   File Name:    app.js
  -  Student Name: Julio Reyes
  -  Student Id:   301308609
  -  Date:         October 7th, 2023 
*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Create the route pointing out to index.js file
var indexRouter = require('../app/routes/index');
var app = express();

//Set path for views
app.set('views', path.join(__dirname, '../app/views'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

//Entry point on URL using / symbol, then look for indexrouter path to redirect to
//respectives web pages
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error Page' });
});

module.exports = app;
