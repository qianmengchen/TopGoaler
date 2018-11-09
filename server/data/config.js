const mysql = require('mysql');
const config = {
    key: process.env.REACT_APP_MYSQL_API_KEY,
    host: '35.184.195.161',
    user: 'bxzhu',
    password: '',
    database: 'topgoaler',
    //port: '8889'
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;
