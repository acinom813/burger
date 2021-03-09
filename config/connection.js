const mysql = require('mysql');

//MySQL DB connection information 
const connection = mysql.createConnection({
    host: 'localhost',
    port: 4000,
    user:'root',
    password: '12345678',
    database: 'buger_db',
});

module.exports = connection;