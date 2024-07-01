const mysql = require('mysql2');

const dbConfig = {
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'user_management_db'
};

const pool = mysql.createPool(dbConfig);

module.exports = pool.promise();
