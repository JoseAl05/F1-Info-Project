const createError = require('http-errors');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const appRouter = require("./routes/router");
const cors = require("cors");
const compression = require('compression');

var app = express();

app.use(compression())

require('dotenv').config()
app.use(
  cors({
    origin:'*',
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
