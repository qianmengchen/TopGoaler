const express = require('express')
const router = express.Router()
// Load the MySQL pool connection
const pool = require('../data/config');


// UPDATE for activity_log
// primary key is task_id, user_id, create_time,
// note: create_time is auto generated, so only need two arguments: task_id, user_id 
// curl -X PUT -d "task_id=1" -d "user_id=2" http://localhost:8001/activity_log/1\&1

router.put('/activity_log/:orig_task_id&:orig_user_id', (request, response) => { 
    const orig_task_id = request.params.orig_task_id; 
    const orig_user_id = request.params.orig_user_id; 
    pool.query('UPDATE activity_log SET ? WHERE task_id = ? AND user_id = ?', [request.body, orig_task_id, orig_user_id], (error, result) => {
        if (error) response.status(401).send(`unable to update: ${err}`); 
        response.send(result);
    });
});


// UPDATE for channel
// arguments are:title, creator, subtitle, image_url
// primary key is id, title is a must , 
// curl -X PUT -d "title=bxzhu_channel" -d "creator=2" http://localhost:8001/channel/bxzhu_channel\&1
router.put('/channel/:orig_title&:orig_creator', (request, response) => {
    const orig_title = request.params.orig_title; 
    const orig_creator = request.params.orig_creator; 
 
    pool.query('UPDATE channel SET ? WHERE title = ? AND creator = ?', [request.body, orig_title, orig_creator], (error, result) => {
        if (error)  response.status(401).json({msg: `cannot update: ${err}`})
        response.send(result);
    });
});
  
// UPDATE for proposal
// arguments are:title, channel_id, subtitle, period, pattern
// primary key is id, must have: title, channel_id, 
// curl -X PUT -d "title=bxzhu_proposal" -d "channel_id=2" http://localhost:8001/proposal/bxzhu_proposal\&1
router.put('/proposal/:orig_title&:orig_channel_id', (request, response) => {

    const orig_title = request.params.orig_title; 
    const orig_channel_id = request.params.orig_channel_id; 
 
    pool.query('UPDATE proposal SET ? WHERE title = ? AND channel_id = ?', [request.body, orig_title, orig_channel_id], (error, result) => {
        if (error) response.status(401).send(`unable to update: ${err}`); 
        response.send(result);
    });
});


// UPDATE for task
// arguments are:title, channel_id, subtitle, period, pattern, point
// primary key is id, must have: title, channel_id, other arguments are optional 
// curl -X PUT -d "title=bxzhu_task" -d "channel_id=2" http://localhost:8001/task/bxzhu_task\&1
router.put('/task/:orig_title&:orig_channel_id', (request, response) => {

    const orig_title = request.params.orig_title; 
    const orig_channel_id = request.params.orig_channel_id; 
 
    pool.query('UPDATE task SET ? WHERE title = ? AND channel_id = ?', [request.body,orig_title, orig_channel_id], (error, result) => {
        if (error) response.status(401).send(`unable to update: ${err}`); 
        response.send(result);
    });
});


// UPDATE for user
// arguments are:name, password, email, avatar_url, description
// primary key is id, must have: name, password, other arguments are optional 
// curl -X PUT -d "name=bzhu" -d "password=bzhu" http://localhost:8001/user/bxzhu\&bxzhu_password
router.put('/user/:orig_name:orig_password', (request, response) => {
    const orig_name = request.params.orig_name; 
    const orig_password = request.params.orig_password; 
    pool.query('UPDATE user SET ? WHERE name = ? AND password = ?', [request.body, orig_name, orig_password], (error, result) => {
        if (error) response.status(401).send(`unable to update: ${err}`); 
        response.send(result);
    });
});


// UPDATE for user_channel
// arguments are:user_id, channel_id
// must have: user_id, channel_id
// curl -X PUT -d "user_id=1" -d "channel_id=1" http://localhost:8001/user_channel/2\&1
router.put('/user_channel/:orig_user_id:orig_channel_id', (request, response) => {
    const orig_user_id = request.params.orig_user_id; 
    const orig_channel_id = request.params.orig_channel_id; 
    pool.query('UPDATE user_channel SET ? WHERE user_id = ? AND channel_id = ?', [request.body, orig_user_id, orig_channel_id], (error, result) => {
        if (error) response.status(401).send(`unable to update: ${err}`); 
        response.send(result);
    });
});

// UPDATE for user_task
// arguments are:user_id, task_id
// must have: user_id, task_id 
// curl -X PUT -d "user_id=1" -d "task_id=1" http://localhost:8001/user_task/2\&1
router.put('/user_task/:orig_user_id:orig_task_id', (request, response) => {
    const orig_user_id = request.params.orig_user_id; 
    const orig_task_id = request.params.orig_task_id; 
    pool.query('UPDATE user_task SET ? WHERE user_id = ? AND task_id = ?', [request.body, orig_user_id, orig_task_id], (error, result) => {
        if (error) response.status(401).send(`unable to update: ${err}`); 
        response.send(result);
    });
});

// UPDATE for vote
// arguments are:proposal_id, user_id, score
// must have: user_id, proposal_id 
// curl -X PUT -d "user_id=1" -d "proposal_id=1" http://localhost:8001/vote/2\&1
router.put('/vote/:orig_user_id:orig_proposal_id', (request, response) => {
    const orig_user_id = request.params.orig_user_id; 
    const orig_proposal_id = request.params.proposal_id; 
    pool.query('UPDATE vote SET ?  WHERE user_id = ? AND proposal_id =  ?', [request.body, orig_user_id, orig_proposal_id], (error, result) => {
        if (error) response.status(401).send(`unable to update: ${err}`);  
        response.send(result);
    });
});


module.exports = router

