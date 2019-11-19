const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'giogiu',
    database: 'bem_mais_db'
});

module.exports = connection;