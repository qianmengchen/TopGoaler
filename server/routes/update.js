const express = require('express')
const router = express.Router()
// Load the MySQL pool connection
const pool = require('../data/config');
const { doQuery } = require('./helper');

/**
 * UPDATE an entry for table activity_log 
 * @function
 * @param {string} task_id - The id of the task.
 * @param {string} user_id - The id of the user.
 * @example 
 * curl -X PUT -d "task_id=1" -d "user_id=2" http://localhost:8001/activity_log/1\&1
 * @returns {json} Json format of result.
 */  
function update_activity_log(task_id, user_id){}
router.put('/activity_log/:orig_task_id&:orig_user_id', async (request, response) => { 
    try {
        const orig_task_id = request.params.orig_task_id; 
        const orig_user_id = request.params.orig_user_id; 
        const result = await doQuery(
            'UPDATE activity_log SET ? WHERE task_id = ? AND user_id = ?', 
            [request.body, orig_task_id, orig_user_id])
        response.send(result);
    } catch (error) {
        response.status(401).send(`unable to update: ${error}`);  
    }
});

/**
 * UPDATE an entry for table channel 
 * @function
 * @param {string} orig_title - The original title of the channel.
 * @param {string} orig_creator - The original creator of the channel.
 * @param {string} title - The title of the channel.
 * @param {string} creator - The creator of the channel.
 * @example 
 * curl -X PUT -d "title=bxzhu_channel" -d "creator=2" http://localhost:8001/channel/bxzhu_channel\&1
 * @returns {json} Json format of result.
 */ 
function update_channel(orig_title, orig_creator, title, creator){}
router.put('/channel/:orig_title&:orig_creator', async (request, response) => {
    try {
        const orig_title = request.params.orig_title; 
        const orig_creator = request.params.orig_creator; 
     
        const result = await doQuery('UPDATE channel SET ? WHERE title = ? AND creator = ?', [request.body, orig_title, orig_creator]);
        response.send(result);
    } catch (error) {
        response.status(401).json({msg: `cannot update: ${err}`}) 
    }
    
});

/**
 * UPDATE an entry for table proposal 
 * @function
 * @param {string} title - The title of the proposal.
 * @param {string} channel_id - The channel where proposal at.
 * @example 
 * curl -X PUT -d "title=bxzhu_proposal" -d "channel_id=2" http://localhost:8001/proposal/bxzhu_proposal\&1
 * @returns {json} Json format of result.
 */ 
function update_proposal(orig_proposal_id, orig_channel_id, proposal_id, channel_id){}
router.put('/proposal/:orig_title&:orig_channel_id', async (request, response) => {
    try {
        const orig_title = request.params.orig_title; 
        const orig_channel_id = request.params.orig_channel_id;  
        const result = await doQuery(
            'UPDATE proposal SET ? WHERE title = ? AND channel_id = ?', 
            [request.body, orig_title, orig_channel_id]) 
        response.send(result);
    } catch (error) {
        esponse.status(401).send(`unable to update: ${err}`); 
    }


});

/**
 * UPDATE an entry for table task 
 * @function
 * @param {string} orig_title - The original title of the task.
 * @param {string} orig_channel_id - The original channel where task at. 
 * @param {string} title - The title of the task.
 * @param {string} channel_id - The channel where task at. 
 * @example 
 * curl -X PUT -d "title=bxzhu_task" -d "channel_id=2" http://localhost:8001/task/bxzhu_task\&1
 * @returns {json} Json format of result.
 */ 
function update_task(orig_title, orig_channel_id, title, channel_id){}
router.put('/task/:orig_title&:orig_channel_id', async (request, response) => {
    try {
        const orig_title = request.params.orig_title; 
        const orig_channel_id = request.params.orig_channel_id; 
        const result = await doQuery('UPDATE task SET ? WHERE title = ? AND channel_id = ?', [request.body,orig_title, orig_channel_id])
        response.send(result);
    } catch (error) {
        response.status(401).send(`unable to update: ${err}`);  
    }


});


/**
 * UPDATE an entry for table user 
 * @function
 * @param {string} orig_name - The original name of the user.
 * @param {string} orig_password - The original password of the account. 
 * @param {string} name - The name of the user.
 * @param {string} password - The password of the account. 
 * @example
 * curl -X PUT -d "name=bzhu" -d "password=bzhu" http://localhost:8001/user/bxzhu\&bxzhu_password
 * @returns {json} Json format of result.
 */  
function update_user(orig_name, orig_password, name, password){}
router.put('/user/:orig_name:orig_password', async (request, response) => {
    try {
        const orig_name = request.params.orig_name; 
        const orig_password = request.params.orig_password;  
        const result = await doQuery('UPDATE user SET ? WHERE name = ? AND password = ?', [request.body,orig_name, orig_password])
        response.send(result);
    } catch (error) {
        response.status(401).send(`unable to update: ${err}`); 
    }

});

/**
 * Create an entry for table user_channel 
 * @function 
 * @param {string} orig_user_id - The original user_id of the user.
 * @param {string} orig_channel_id - The original channel_id of the channel. 
 * @param {string} user_id - The user_id of the user.
 * @param {string} channel_id - The channel_id of the channel. 
 * @example
 * curl -X PUT -d "user_id=1" -d "channel_id=1" http://localhost:8001/user_channel/2\&1
 * @returns {json} Json format of result.
 */    
function update_user_channel(orig_user_id, orig_channel_id,user_id, channel_id){}
router.put('/user_channel/:orig_user_id:orig_channel_id', async (request, response) => {
    try {
        const orig_user_id = request.params.orig_user_id; 
        const orig_channel_id = request.params.orig_channel_id;  
        const result = await doQuery('UPDATE user_channel SET ? WHERE user_id = ? AND channel_id = ?', [request.body,orig_user_id, orig_channel_id])
        response.send(result);
    } catch (error) {
        response.status(401).send(`unable to update: ${err}`); 
        
    }
});

/**
 * Create an entry for table use_task 
 * @function
 * @param {string} orig_user_id - The original user_id of the user.
 * @param {string} orig_task_id - The original task_id of the task. 
 * @param {string} user_id - The user_id of the user.
 * @param {string} task_id - The task_id of the task. 
 * @example 
 * curl -X PUT -d "user_id=1" -d "task_id=1" http://localhost:8001/user_task/2\&1
 * @returns {json} Json format of result.
 */  
function update_user_task(orig_user_id, orig_task_id, user_id, task_id){}
router.put('/user_task/:orig_user_id:orig_task_id', async (request, response) => {
    try {
        const orig_user_id = request.params.orig_user_id; 
        const orig_task_id = request.params.orig_task_id; 
        const result = await doQuery('UPDATE user_task SET ? WHERE user_id = ? AND task_id = ?', [request.body,orig_user_id, orig_task_id])
        response.send(result); 
    } catch (error) {
        response.status(401).send(`unable to update: ${err}`);  
    }
});

/**
 * UPDATE an entry for table vote 
 * @function
 * @param {string} orig_proposal_id - The original proposal_id of the voting proposal. 
 * @param {string} orig_user_id - The original user_id of the user.
 * @param {string} proposal_id - The proposal_id of the voting proposal. 
 * @param {Integer} score - The score of the proposal that user voted. 
 * @example
 * curl -X PUT -d "user_id=1" -d "proposal_id=1" http://localhost:8001/vote/2\&1
 * @returns {json} Json format of result.
 */   
function update_vote(orig_user_id, orig_proposal_id, proposal_id, score){}
router.put('/vote/:orig_user_id:orig_proposal_id', async (request, response) => {
    try {
        const orig_user_id = request.params.orig_user_id; 
        const orig_proposal_id = request.params.proposal_id; 

        const result = await doQuery('UPDATE vote SET ?  WHERE user_id = ? AND proposal_id =  ?', [request.body,orig_user_id, orig_proposal_id])
        response.send(result); 
    } catch (error) {
        response.status(401).send(`unable to update: ${err}`);  
    }
});


module.exports = router

