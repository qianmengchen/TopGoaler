// Load the MySQL pool connection
const pool = require('../data/config');

const read = app => {  
    // query for channel_creator 
    app.get('/channel_creator/:channel', (request, response) => {
        const channel = request.params.channel;
        pool.query('SELECT * FROM channel_creator WHERE channel = ?', channel, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    // query for channel_task
    app.get('/channel_task/:channel', (request, response) => {
        const channel = request.params.channel;
        pool.query('SELECT * FROM channel_task WHERE channel = ?', channel, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    // query for channel_user_subscribe
    app.get('/channel_user_subscribe/:channel', (request, response) => {
        const channel = request.params.channel;
        pool.query('SELECT * FROM channel_user_subscribe WHERE channel = ?', channel, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    // query for task_info
    app.get('/task_info/:task/:channel', (request, response) => {
        const task = request.params.task;
        const channel = request.params.channel;
        pool.query('SELECT * FROM task_info WHERE task = ?, channel = ?', task, channel, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });
    // query for user_channel_point
    app.get('/user_channel_point/:user:channel', (request, response) => {
        const user = request.params.user;
        const channel = request.params.channel;
        pool.query('SELECT * FROM user_channel_point WHERE user = ?, channel = ?', user, channel, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });
    // query for user_task_info
    app.get('/user_task_info/:user:channel:task', (request, response) => {
        const user = request.params.user;
        const channel = request.params.channel; 
        const task = request.params.task;
        pool.query('SELECT * FROM user_task_info WHERE user = ?, channel = ?, task = ?', user, channel, task, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

}
module.exports = read;

