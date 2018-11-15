// Load the MySQL pool connection
const pool = require('../data/config');

const create = app => {  
    // post for channel_creator   
    // curl -d "channel=bxzhu_channel&user=bxzhu" http://localhost:8001/channel_creator
    app.post('/channel_creator', (request, response) => {
        pool.query('INSERT INTO channel_creator SET ?', request.body, (error, result) => {
            if (error) throw error; 
            response.status(201).send(`channel added with channel: ${result.insertId}`);
        });
    });

    // post for channel_task
    // curl -d "channel=bxzhu_channel&task=bxzhu_task" http://localhost:8001/channel_task
    app.post('/channel_task', (request, response) => {
        pool.query('INSERT INTO channel_task SET ?', request.body, (error, result) => {
            if (error) throw error; 
            response.status(201).send(`channel added with channel: ${result.insertId}`);
        });
    });

    // post for channel_user_subscribe
    // curl -d "channel=bxzhu_channel&user=bxzhu_task" http://localhost:8001/channel_user_subscribe
    app.post('/channel_user_subscribe', (request, response) => {
        pool.query('INSERT INTO channel_user_subscribe SET ?', request.body, (error, result) => {
            if (error) throw error; 
            response.status(201).send(`channel added with channel: ${result.insertId}`);
        });
    });

    // post for task_info
    // curl -d "task=bxzhu_task&channel=bxzhu_channel&creator=bxzhu&point=1" http://localhost:8001/task_info
    app.post('/task_info', (request, response) => {
        pool.query('INSERT INTO task_info SET ?', request.body, (error, result) => {
            if (error) throw error; 
            response.status(201).send(`channel added with channel: ${result.insertId}`);
        });
    });
    // post for user_channel_point
    // curl -d "user=bxzhu&channel=bxzhu_channel&point=2" http://localhost:8001/user_channel_point
    app.post('/user_channel_point', (request, response) => {
        pool.query('INSERT INTO user_channel_point SET ?', request.body, (error, result) => {
            if (error) throw error; 
            response.status(201).send(`channel added with channel: ${result.insertId}`);
        });
    });
    // post for user_task_info
    // curl -d "user=bxzhu&channel=bxzhu_channel&task=bxzhu_task&state=in_progress" http://localhost:8001/user_task_info
    app.post('/user_task_info', (request, response) => {
        pool.query('INSERT INTO user_task_info SET ?', request.body, (error, result) => {
            if (error) throw error; 
            response.status(201).send(`channel added with channel: ${result.insertId}`);
        });
    });

    // post for user_password
    app.post('/user_password', (request, response) => {
        pool.query('INSERT INTO user_password SET ?', request.body, (error, result) => {
            if (error) throw error; 
            response.status(201).send(`user added with password: ${result.insertId}`);
        });
    });

}
module.exports = create;

