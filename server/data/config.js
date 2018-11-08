const mysql = require('mysql');
const config = {
    key: 'AIzaSyCUzcWuZNEavyYFlvBJ8DoX8WjnGa3ysoc',
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
