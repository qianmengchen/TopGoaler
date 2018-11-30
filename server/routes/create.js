const express = require('express')
const router = express.Router()
// Load the MySQL pool connection
const pool = require('../data/config');


// post for activity_log
// primary key is task_id, user_id, create_time,
// note: create_time is auto generated, so only need two arguments: task_id, user_id
// curl -d "task_id=1&user_id=2" http://localhost:8001/activity_log
router.post('/activity_log', (request, response) => {
    try {
        pool.query('INSERT INTO activity_log SET ?', request.body, (error, result) => { 
            response.status(201).send(`activity_log added with activity_log: ${result.insertId}`);
        });
    } catch (error) {
        response.status(401).send(`error create: ${error}`); 
    }
    
});


// post for channel
// arguments are:title, creator, subtitle, image_url
// primary key is id, title is a must , other arguments are optional
// curl -d "title=2&creator=1" http://localhost:8001/channel
router.post('/channel', (request, response) => {
    try {
        pool.query('INSERT INTO channel SET ?', request.body, (error, result) => {
            response.status(201).send(`channel added with channel: ${result.insertId}`);
        });
    } catch (error) {
        response.status(401).send(`error create: ${error}`);   
    }
});

// post for proposal
// arguments are:title, channel_id, subtitle, period, pattern
// primary key is id, must have: title, channel_id, other arguments are optional
// curl -d "title=2&channel_id=1" http://localhost:8001/proposal
router.post('/proposal', (request, response) => {
    try {
        pool.query('INSERT INTO proposal SET ?', request.body, (error, result) => {
            response.status(201).send(`proposal added with proposal: ${result.insertId}`);
        });
    } catch (error) {
        response.status(401).send(`error create: ${error}`);  
    }
    
});


// post for task
// arguments are:title, channel_id, subtitle, period, pattern, point
// primary key is id, must have: title, channel_id, other arguments are optional
// curl -d "channel_id=1&title=bxzhu_task" http://localhost:8001/task
router.post('/task', (request, response) => {
    try {
        pool.query('INSERT INTO task SET ?', request.body, (error, result) => {
            response.status(201).send(`task added with task: ${result.insertId}`);
        });
    } catch (error) {
        response.status(401).send(`error create: ${error}`); 
    }

});

// post for user
// arguments are:name, password, email, avatar_url, description
// primary key is id, must have: name, password, other arguments are optional
// curl -d "name=bzhu&password=bzhu" http://localhost:8001/user
router.post('/user', (request, response) => {
    try {
        pool.query('INSERT INTO user SET ?', request.body, (error, result) => {
            response.status(201).send(`user added with user: ${result.insertId}`);
        });
    } catch (error) {
        response.status(401).send(`error create: ${error}`);   
    }
    
});



// post for user_channel
// arguments are:user_id, channel_id
// must have: user_id, channel_id
// curl -d "user_id=1&channel_id=1" http://localhost:8001/user_channel
router.post('/user_channel', (request, response) => {
    try {
        pool.query('INSERT INTO user_channel SET ?', request.body, (error, result) => {
            response.status(201).send(`user_channel added with user_channel: ${result}`);
        });
    } catch (error) {
        response.status(401).send(`error create: ${error}`); 
    }
    
});
 
// post for user_task
// arguments are:user_id, task_id
// must have: user_id, task_id
// curl -d "user_id=1&task_id=1" http://localhost:8001/user_task
router.post('/user_task', (request, response) => {
    try {
        pool.query('INSERT INTO user_task SET ?', request.body, (error, result) => {
            response.status(201).send(`user_task added with user_task: ${result} `);
        });
    } catch (error) {
        response.status(401).send(`error create: ${error}`);   
    }
});

// post for vote
// arguments are:proposal_id, user_id, score
// must have: user_id, proposal_id
// curl -d "user_id=1&proposal_id=1&score=1 http://localhost:8001/vote
// return 1 means this proposal is able to change to a task, return 0 means not yet
router.post('/vote', (request, response) => {
    try {
        const proposal_id = request.body.proposal_id;  
        pool.query('INSERT INTO vote SET ?',  request.body, (error, result) => { 
        });
        pool.query(` SELECT 
                (SELECT
                (SELECT COUNT(*) FROM user_channel WHERE channel_id = (SELECT channel_id FROM proposal WHERE id = ? )) /
                (SELECT COUNT(*) FROM vote WHERE proposal_id = ? ) 
                ) <= 2`, [proposal_id, proposal_id], (error, result) => {  
                response.json(result[0]);  
            });
    } catch (error) {
        response.status(401).send(`error create: ${error}`); 
    }
 
});

module.exports = router;

