const http = require('http');
let dotenv = require('dotenv').config();
const app = require("./app");
const port = process.env.port || 5000;

const server = http.createServer(app);
console.log("port",port);
server.listen(port);