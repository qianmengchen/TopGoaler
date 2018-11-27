const express = require('express')
const router = express.Router()
// Load the MySQL pool connection
const pool = require('../data/config');
      
// query to get all channels
router.get('/channel/', (request, response) => {
    pool.query('SELECT * FROM channel', (error, result) => {
        if (error) {
            console.log(error);
            throw error;
        }
        response.send(result);
    });
});

// query to get all tasks
router.get('/task/', (request, response) => {
    pool.query('SELECT * FROM task', (error, result) => {
        if (error) throw error;
        response.send(result);
    });
});

// query to get all user_channel
router.get('/user_channel/', (request, response) => {
    pool.query('SELECT * FROM user_channel', (error, result) => {
        if (error) throw error;
        response.send(result);
    });
});

// query to get all user_task
router.get('/user_task/', (request, response) => {
    pool.query('SELECT * FROM user_task', (error, result) => {
        if (error) throw error;
        response.send(result);
    });
}); 


// query to get all user
router.get('/user/', (request, response) => {
    pool.query('SELECT id, name, email, avatar_url, description FROM user', (error, result) => {
        if (error) throw error;
        response.send(result);
    });
});

// query to get all activity_log
router.get('/activity_log/', (request, response) => {
    pool.query('SELECT * FROM activity_log', (error, result) => {
        if (error) throw error;
        response.send(result);
    });
});

// query to get all vote
router.get('/vote/', (request, response) => {
    pool.query('SELECT * FROM vote', (error, result) => {
        if (error) throw error;
        response.send(result);
    });
});


// query to get all proposal
router.get('/proposal/', (request, response) => {
    pool.query('SELECT * FROM proposal', (error, result) => {
        if (error) throw error;
        response.send(result);
    });
});
module.exports = router;

