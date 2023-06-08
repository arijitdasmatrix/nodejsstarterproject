const mysql = require('mysql2');

const pool = mysql.createPool({
host: 'localhost',
user: 'root',
database: 'node_complete',
password:'Admin@123'
});

// const Sequlaize = require('Sequlaize'); 

// const sequlaize = new Sequlaize('node_sequlization','root','Admin@123', {
// dialect: 'mysql',
// host:'localhost'  
// });
// module.exports = Sequlaize;

module.exports = pool.promise();

