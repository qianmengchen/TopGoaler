const express = require('express')
const router = express.Router()
// Load the MySQL pool connection
const pool = require('../data/config');
const { doQuery } = require('./helper'); 

/**
 * Remove an entry for table user_channel 
 * @function
 * @param {string} user_id - The user_id of the user.
 * @param {string} channel_id - The channel_id of the channel. 
 * @example 
 * curl -X DELETE http://localhost:8001/user_channel/1\&1
 * @returns {Integer} Returns the removed id of the entry.
 */    
function remove_user_channel_entry(user_id, channel_id){} 
router.delete('/user_channel/:user&:channel', async (request, response) => {
    try {
        const user = request.params.user;
        const channel = request.params.channel;  
        const result = await doQuery(
            'DELETE FROM user_channel WHERE user_id = ? AND channel_id = ?', 
            [user, channel])
        if (result.affectedRows == 1)
            response.send(result);
        else
            throw 'no entry found'
    } catch (error) {
        response.status(401).send(`unable to remove: ${error}`);  
    }
});

 
/**
 * Remove an entry for table user_task 
 * @function
 * @param {string} user_id - The user_id of the user.
 * @param {string} task_id - The channel_id of the task. 
 * @example 
 * curl -X DELETE http://localhost:8001/user_task/1\&1
 * @returns {Integer} Returns the removed id of the entry.
 */    

function remove_user_task_entry(user_id, task_id){} 
router.delete('/user_task/:user&:task', async (request, response) => {
    try {
        const user = request.params.user;
        const task = request.params.task;
        const result = await doQuery(
            'DELETE FROM user_task WHERE user_id = ? AND task_id = ?', 
            [user, task])
        if (result.affectedRows == 1)
            response.send(result);
        else
            throw 'no entry found'
    } catch (error) {
        response.status(401).send(`unable to remove: ${error}`);  
    } 
});

module.exports = router

