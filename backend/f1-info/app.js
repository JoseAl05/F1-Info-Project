var createError = require('http-errors');
const bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const morgan = require('morgan');
const appRouter = require("./routes/router");
const cors = require("cors");

var app = express();

require('dotenv').config()
app.use(
  cors({
    origin:'http://localhost:3000',
  })
);
app.set('port',process.env.PORT || 5000);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', appRouter);
app.listen(app.get('port'), () => {
  console.log("Server Started on port", app.get('port'));
})

module.exports = app;
