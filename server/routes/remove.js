const express = require('express')
const router = express.Router()
// Load the MySQL pool connection
const pool = require('../data/config');

// delete for channel_creator 
// curl -X DELETE http://localhost:8001/channel_creator/bxzhu_channel
router.delete('/channel_creator/:channel', (request, response) => {
    const channel = request.params.channel;
    pool.query('DELETE FROM channel_creator WHERE channel = ?', channel, (error, result) => {
        if (error) throw error;
        response.send(result);
    });
});

// delete for channel_task
// curl -X DELETE http://localhost:8001/channel_task/bxzhu_channel
router.delete('/channel_task/:channel', (request, response) => {
    const channel = request.params.channel;
    pool.query('DELETE FROM channel_task WHERE channel = ?', channel, (error, result) => {
        if (error) throw error;
        response.send(result);
    });
});

// delete for channel_user_subscribe
// curl -X DELETE http://localhost:8001/channel_user_subscribe/bxzhu_channel
router.delete('/channel_user_subscribe/:channel', (request, response) => {
    const channel = request.params.channel;
    pool.query('DELETE FROM channel_user_subscribe WHERE channel = ?', channel, (error, result) => {
        if (error) throw error;
        response.send(result);
    });
});

// delete for task_info
// curl -X DELETE http://localhost:8001/task_info/bxzhu\&bxchannel  
router.delete('/task_info/:task&:channel', (request, response) => {
    const task = request.params.task;
    const channel = request.params.channel;
    pool.query('DELETE FROM task_info WHERE task = ? AND channel = ?', [task, channel], (error, result) => {
        if (error) throw error;
        response.send(result);
    });
});
//delete for user_channel_point
//curl -X DELETE http://localhost:8001/user_channel_point/bxzhu\&xzhu_channel
router.delete('/user_channel_point/:user&:channel', (request, response) => {
    const user = request.params.user;
    const channel = request.params.channel;
    pool.query('DELETE FROM user_channel_point WHERE user = ? AND channel = ?', [user, channel], (error, result) => {
        if (error) throw error;
        response.send(result);
    });
});
// delete for user_task_info 
// curl -X DELETE http://localhost:8001/user_task_info/bxzhu\&bxzhu_channel\&bxzhu_task
router.delete('/user_task_info/:user&:channel&:task', (request, response) => {
    const user = request.params.user;
    const channel = request.params.channel;
    const task = request.params.task;
    pool.query('DELETE FROM user_task_info WHERE user = ? AND channel = ? AND task = ?', [user, channel, task], (error, result) => {
        if (error) throw error;
        response.send(result);
    });
});

module.exports = router

