const express = require("express");
const app = express();
const profileRoutes = require("./api/routes/profile");

app.use('/Users',profileRoutes);

module.exports = app;