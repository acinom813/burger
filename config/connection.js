const mysql = require('mysql');

//MySQL DB connection information 
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user:'root',
    password: '12345678',
    database: 'burgers_db',
});

module.exports = connection;