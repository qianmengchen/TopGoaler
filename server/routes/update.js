// Load the MySQL pool connection
const pool = require('../data/config');

const update = app => {  
    // Update for channel_creator 
    // curl -X PUT -d "channel=bxzhu_channel" -d "user=bz" http://localhost:8001/channel_creator/bxazhu
    app.put('/channel_creator/:channel', (request, response) => {
        const channel = request.params.channel;
        pool.query('UPDATE channel_creator SET ? WHERE channel = ?', [request.body, channel], (error, result) => {
            if (error) throw error;
     
            response.send('User updated successfully.');
        });
    });

    // Update for channel_task
    // curl -X PUT -d "channel=bxzhu_channel" -d "task=bz" http://localhost:8001/channel_task/bxazhu  
    app.put('/channel_task/:channel', (request, response) => {
        const channel = request.params.channel;
        pool.query('UPDATE channel_task SET ? WHERE channel = ?', [request.body, channel], (error, result) => {
            if (error) throw error; 
            response.send('User updated successfully.');
        });
    });


    // UPDATE for channel_user_subscribe
    // curl -X PUT -d "channel=bxzhu_channel" -d "user=bz" http://localhost:8001/channel_user_subscribe/bxzhu_channel
    app.put('/channel_user_subscribe/:channel', (request, response) => {
        const channel = request.params.channel;  
        pool.query('UPDATE channel_user_subscribe SET ? WHERE channel = ?', [request.body, channel], (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    // UPDATE for task_info
    // curl -X PUT -d "channel=bxzhu_channel" -d "task=bz"  http:/localhost:8001/task_info/bxtask\&bxchannel
    app.put('/task_info/:task&:channel', (request, response) => {
        console.log("On server side"); 
        const task = request.params.task;
        const channel = request.params.channel;
        console.log(request.params);    
        pool.query('UPDATE task_info SET ? WHERE task = ? AND channel = ?', [request.body, task, channel], (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });
 

    // UPDATE for user_channel_point
    // curl -X PUT -d "channel=bxzhu_channel" -d "user=bxzhu"  http:/localhost:8001/user_channel_point/bxzhu\&bxchannel
    app.put('/user_channel_point/:user&:channel', (request, response) => {
        const user = request.params.user;
        const channel = request.params.channel; 
        console.log(request.params);    
        pool.query('UPDATE user_channel_point SET ? WHERE user = ? AND channel = ?', [request.body, user, channel], (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    // UPDATE for user_task_info
    // curl -X PUT -d "channel=bxzhu_channel" -d "task=bxzhu_task"  -d "user=bxzhu" http:/localhost:8001/user_task_info/bxzhu\&bxchannel\&bxzhutask
    app.put('/user_task_info/:user&:channel&:task', (request, response) => {
        const user = request.params.user;
        const channel = request.params.channel; 
        const task = request.params.task;
        pool.query('UPDATE user_task_info SET ? WHERE user = ? AND channel = ? AND task = ?', [request.body, user, channel, task], (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

}
module.exports = update;

