const express = require('express')
const router = express.Router()
// Load the MySQL pool connection
const { doQuery } = require('./helper');


/**
 * Create an entry for table activity_log
 * @function
 * @param {string} task_id - The id of the task.
 * @param {string} user_id - The id of the user.
 * @example
 * // returns 1
 * curl -d "task_id=1&user_id=2" http://localhost:8001/activity_log
 * @returns {Integer} Returns the insert id of the entry.
 */
router.post('/activity_log', async (request, response) => {
    try {
        const result = await doQuery('INSERT INTO activity_log SET ?', request.body)
        response.status(201).send(`activity_log added with activity_log: ${result.insertId}`);
    } catch (error) {
        response.status(401).send(`error create: ${error}`);
    }
});

/**
 * Create an entry for table channel
 * @function
 * @param {string} title - The title of the channel.
 * @param {string} creator - The creator of the channel.
 * @example
 * // returns 1
 * curl -d "title=2&creator=1" http://localhost:8001/channel
 * @returns {Integer} Returns the insert id of the entry.
 */ 
router.post('/channel', async (request, response) => {
    console.log(request.body);
    try {
        const result = await doQuery('INSERT INTO channel SET ?', request.body);
        response.status(201).json({id: result.insertId});
    } catch (error) {
        response.status(401).json({error});   
    }
});

/**
 * Create an entry for table proposal 
 * @function
 * @param {string} title - The title of the proposal.
 * @param {string} channel_id - The channel where proposal at.
 * @example
 * // returns 1
 * curl -d "title=2&channel_id=1" http://localhost:8001/proposal
 * @returns {Integer} Returns the insert id of the entry.
 */ 
router.post('/proposal', async (request, response) => {
    try {
        const result = await doQuery('INSERT INTO proposal SET ?', request.body);
        response.status(201).send(`proposal added with proposal: ${result.insertId}`);
    } catch (error) {
        response.status(401).send(`error create: ${error}`);  
    }
    
});

/**
 * Create an entry for table task 
 * @function
 * @param {string} title - The title of the task.
 * @param {string} channel_id - The channel where task at. 
 * @example
 * // returns 1
 * curl -d "channel_id=1&title=bxzhu_task" http://localhost:8001/task
 * @returns {Integer} Returns the insert id of the entry.
 */   
router.post('/task', async (request, response) => {
    try {
        const result = await doQuery('INSERT INTO task SET ?', request.body);
        response.status(201).send(`task added with task: ${result.insertId}`);
    } catch (error) {
        response.status(401).send(`error create: ${error}`); 
    }

});


/**
 * Create an entry for table user 
 * @function
 * @param {string} name - The name of the user.
 * @param {string} password - The password of the account. 
 * @example
 * // returns 1
 * curl -d "name=bzhu&password=bzhu" http://localhost:8001/user
 * @returns {Integer} Returns the insert id of the entry.
 */   
router.post('/user', async (request, response) => {
    try {
        const result = await doQuery('INSERT INTO user SET ?', request.body);
        response.status(201).send(`user added with user: ${result.insertId}`);
    } catch (error) {
        response.status(401).send(`error create: ${error}`);   
    }
    
});



/**
 * Create an entry for table user_channel 
 * @function
 * @param {string} user_id - The user_id of the user.
 * @param {string} channel_id - The channel_id of the channel. 
 * @example
 * // returns 1
 * curl -d "user_id=1&channel_id=1" http://localhost:8001/user_channel
 * @returns {Integer} Returns the insert id of the entry.
 */    
router.post('/user_channel', async (request, response) => {
    try {
        const result = await doQuery('INSERT INTO user_channel SET ?', request.body);
        response.status(201).send(`user_channel added with user_channel: ${result}`);
    } catch (error) {
        response.status(401).send(`error create: ${error}`); 
    }
    
});
 

/**
 * Create an entry for table user_channel 
 * @function
 * @param {string} user_id - The user_id of the user.
 * @param {string} task_id - The task_id of the task. 
 * @example
 * // returns 1
 * curl -d "user_id=1&task_id=1" http://localhost:8001/user_task
 * @returns {Integer} Returns the insert id of the entry.
 */     
router.post('/user_task', async (request, response) => {
    try {
        const result = await doQuery('INSERT INTO user_task SET ?', request.body);
        response.status(201).send(`user_task added with user_task: ${result} `);
    } catch (error) {
        response.status(401).send(`error create: ${error}`);
    }
});

/**
 * Create an entry for table vote 
 * @function
 * @param {string} user_id - The user_id of the user.
 * @param {string} proposal_id - The proposal_id of the voting proposal. 
 * @param {Integer} score - The score of the proposal that user voted. 
 * @example
 * // returns 1
 * curl -d "user_id=1&task_id=1" http://localhost:8001/user_task
 * @returns {Integer} Returns the result that if the proposal if able to transform to a task. 1 means able to. 0 means not yet.
 */      
router.post('/vote', async (request, response) => {
    try {
        console.log('/vote', request.body)
        const proposal_id = request.body.proposal_id;
        await doQuery('INSERT INTO vote SET ?',  request.body);
        const result = await doQuery(
            ` SELECT
                (SELECT
                (SELECT COUNT(*) FROM user_channel WHERE channel_id = (SELECT channel_id FROM proposal WHERE id = ? )) /
                (SELECT COUNT(*) FROM vote WHERE proposal_id = ? )
            ) <= 2`,
            [proposal_id, proposal_id])
        response.json(result[0]);
    } catch (error) {
        response.status(401).send(`error create: ${error}`);
    }
});

module.exports = router;

