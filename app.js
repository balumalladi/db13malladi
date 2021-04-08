var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var snakes = require('./routes/snakes');
var stars = require('./routes/stars');
var slot = require('./routes/slot');
var snakes = require('./models/snakes')
var resourceRouter = require('./routes/resource')

const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true, useUnifiedTopology: true});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/snakes', snakes);
app.use('/stars', stars);
app.use('/slot', slot);
app.use('/resource', resourceRouter);

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


// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  // await Costume.deleteMany();
  let instance1 = new snakes({snakename:"cobras",habitat:"Lowland",classification:"Cyprinidae",price:300});
  instance1.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("First object saved")
  });

  let instance2 = new snakes({snakename:"vipers",habitat:"River Channels",classification:"Pangasiidae",price:500});
  instance2.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("Second object saved")
  });

  let instance3 = new snakes({snakename:"anakonda",habitat:"Rocky Substrates",classification:"Cichlidae",price:1000});
  instance3.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("Third object saved")
  });
  }
  let reseed = true;
  if (reseed) { recreateDB();}
module.exports = app;
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")})