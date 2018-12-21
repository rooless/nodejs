// var createError = require('http-errors');
const express = require('express');
const http = require('http');
const path = require('path');
const config = require('./config');
const log = require('./libs/log')(module);
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var hbs  = require('express-handlebars');


const app = express();
/* const port = config.get('port'); */
const port = 3000;
const server = app.listen(port);
var io = require('socket.io');


app.set('port',port)
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(logger('dev')); 
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(myLogger)
app.use(requestTime)
app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
}) */
/* app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})
app.get('/user/:id', function (req, res, next) {
  res.send('USER')
}) */
/* app.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
}) */

/* app.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id)
  next()
}, function (req, res, next) {
  res.send('User Info')
})

// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', function (req, res, next) {
  res.end(req.params.id)
}) */

/* app.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id === '0') next('route')
  // otherwise pass the control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // send a regular response
  res.send('regular')
})

// handler for the /user/:id path, which sends a special response
app.get('/user/:id', function (req, res, next) {
  res.send('special')
})*/

app.get('/', (req, res) => {
  /* let responseText = 'Hello World!<br>'
   responseText += '<small>Requested at: ' + req.requestTime + '</small>' 
  res.send(responseText)*/
  res.render("index", {
    title: 'Madera Arte!',
    'logo-name': 'Madera-Arte',
    layout: 'layout'
  });
}); 

app.get('/canvas', (req, res) => {
  /* let responseText = 'Hello World!<br>'
   responseText += '<small>Requested at: ' + req.requestTime + '</small>' 
  res.send(responseText)*/
  res.render("canvas", {
    /* title: 'Madera Arte!', */
    layout: 'layout'
  });
}); 

app.get('/chat', (req, res) => {
  res.render("chat", {
    layout: 'layout'
  });
}); 

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

app.listen(port, () => log.info(`Example app listening on port ${port}!`));



/**
 



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



// view engine setup



app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/

module.exports = app;
