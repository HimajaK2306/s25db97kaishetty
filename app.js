var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var quarriesRouter = require('./routes/quarries');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var quarries = require("./models/quarries");
var resourceRouter = require("./routes/resource");
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('dotenv').config();
const connectionString = process.env.MONGO_CONN
mongoose = require('mongoose');
mongoose.connect(connectionString);

// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
await quarries.deleteMany();
let instance1 = new
quarries({quarries_type:"Granite Hills", depth_meters:'50',
material:"Granite"});
instance1.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});
let instance2 = new
quarries({quarries_type:"Limestone Cove", depth_meters:'30',
material:"Limestone"});
instance2.save().then(doc=>{
console.log("Second object saved")}
).catch(err=>{
console.error(err)
});

let instance3 = new
quarries({quarries_type:"Marble Valley", depth_meters:'45',
material:"Marble"});
instance3.save().then(doc=>{
console.log("Third object saved")}
).catch(err=>{
console.error(err)
});
}
let reseed = true;
if (reseed) {recreateDB();}

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/quarries', quarriesRouter);
app.use('/grid', gridRouter);
app.use('/pick', pickRouter);
app.use('/resource', resourceRouter);


app.get('/gridbuild', function(req, res) {
  let query = req.query;

  // Convert query parameters to numbers
  let rows = parseInt(query.rows, 10) || 0;
  let cols = parseInt(query.cols, 10) || 0;

  // Debugging: Log parsed values
  console.log(`Parsed rows: ${rows}`);
  console.log(`Parsed cols: ${cols}`);

  // Pass the parsed numbers to the template
  res.render('grid', { title: "Grid Display", query: { rows, cols } });
});

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

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

module.exports = app;


