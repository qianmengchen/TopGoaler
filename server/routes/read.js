// Load the MySQL pool connection
const pool = require('../data/config');

const read = app => {  
    // query for channel_creator 
    // curl http:/localhost:8001/channel_creator/bxzhu_channel
    app.get('/channel_creator/:channel', (request, response) => {
        const channel = request.params.channel;
        pool.query('SELECT * FROM channel_creator WHERE channel = ?', channel, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    // query for channel_creator table
    app.get('/channel_creator/', (request, response) => {
        pool.query('SELECT * FROM channel_creator', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    // query for channel_task
    // curl http:/localhost:8001/channel_task/bxzhu_channel
    app.get('/channel_task/:channel', (request, response) => {
        const channel = request.params.channel;
        pool.query('SELECT * FROM channel_task WHERE channel = ?', channel, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    // query for channel_task table
    app.get('/channel_task/', (request, response) => {
        pool.query('SELECT * FROM channel_task', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });   

    // query for channel_user_subscribe
    // curl http:/localhost:8001/channel_user_subscribe/bxzhu_channel
    app.get('/channel_user_subscribe/:channel', (request, response) => {
        const channel = request.params.channel;
        pool.query('SELECT * FROM channel_user_subscribe WHERE channel = ?', channel, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    // query for channel_user_subscribe table
    app.get('/channel_user_subscribe/', (request, response) => {
        const channel = request.params.channel;
        pool.query('SELECT * FROM channel_user_subscribe', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    // query for task_info
    // curl http:/localhost:8001/task_info/bxtask\&bxchannel
    app.get('/task_info/:task&:channel', (request, response) => {
        console.log("On server side"); 
        const task = request.params.task;
        const channel = request.params.channel;
        console.log(request.params);    
        pool.query('SELECT * FROM task_info WHERE task = ? AND channel = ?', [task, channel], (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    // query for task_info table
    app.get('/task_info/', (request, response) => { 
        pool.query('SELECT * FROM task_info', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    }); 
 

    // query for user_channel_point
    // curl http:/localhost:8001/user_channel_point/bxzhu\&bxchannel
    app.get('/user_channel_point/:user&:channel', (request, response) => {
        const user = request.params.user;
        const channel = request.params.channel; 
        console.log(request.params);    
        pool.query('SELECT * FROM user_channel_point WHERE user = ? AND channel = ?', [user, channel], (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    // query for user_channel_point
    app.get('/user_channel_point/', (request, response) => {  
        pool.query('SELECT * FROM user_channel_point', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });  

    // query for user_task_info
    // curl http:/localhost:8001/user_task_info/bxzhu\&bxchannel\&bxzhutask
    app.get('/user_task_info/:user&:channel&:task', (request, response) => {
        const user = request.params.user;
        const channel = request.params.channel; 
        const task = request.params.task;
        pool.query('SELECT * FROM user_task_info WHERE user = ? AND channel = ? AND task = ?', [user, channel, task], (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    // query for user_task_info
    app.get('/user_task_info/', (request, response) => {
        pool.query('SELECT * FROM user_task_info', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });
}
module.exports = read;

