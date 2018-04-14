var createError = require('http-errors');
var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var i18n = require('i18n');

var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



var app = express();

// view engine setup
app.engine('.hbs',exphbs({defaultlayout:'layout',
extname:'.hbs',
helpers: {
  __: function() { return i18n.__.apply(this, arguments); },
  __n: function() { return i18n.__n.apply(this, arguments); }
}}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



i18n.configure({

  //define how many languages we would support in our application
  locales:['en', 'vi','ja','ko','th'],
  
  //define the path to language json files, default is /locales
  directory: __dirname + '/locales',
  
  //define the default language
  defaultLocale: 'vi',
  
  // define a custom cookie name to parse locale settings from 
  cookie: 'i18n',

  autoReload: true,
  
  api: {
    '__': '__',  //now req.__ becomes req.__
    '__n': '__n' //and req.__n can be called as req.__n
  }}
);
app.use(cookieParser("i18n_demo"));

app.use(session({
    secret: "i18n_demo",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

//init i18n after cookie-parser
app.use(i18n.init);



//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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

app.listen(9000,'144.202.115.228',function(){
  console.log('your app is started');
});

// app.listen(3001,function(){
//   console.log('your app is started');
// });
module.exports = app;
