const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const profileRoutes = require("./api/routes/profile");
const db = require("./utils/database");



app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use('/Users',profileRoutes);

app.use((req,res,next) => {
const error = new Error("404 Not found");
error.status = 404;
next(error);
});

app.use((error,req,res,next ) => {
res.status(error.status || 500);
res.json({
error: {
  message:error.message  
}
}); 
});

module.exports = app;