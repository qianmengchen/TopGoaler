// Load the MySQL pool connection
const pool = require('../data/config');

const remove = app => {  
    // delete for channel_creator 
    // curl -X DELETE http://localhost:8001/channel_creator/bxzhu_channel
    app.delete('/channel_creator/:channel', (request, response) => {
        const channel = request.params.channel;
        pool.query('DELETE FROM channel_creator WHERE channel = ?', channel, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    // delete for channel_task
    // curl -X DELETE http://localhost:8001/channel_task/bxzhu_channel
    app.delete('/channel_task/:channel', (request, response) => {
        const channel = request.params.channel;
        pool.query('DELETE FROM channel_task WHERE channel = ?', channel, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    // delete for channel_user_subscribe
    // curl -X DELETE http://localhost:8001/channel_user_subscribe/bxzhu_channel
    app.delete('/channel_user_subscribe/:channel', (request, response) => {
        const channel = request.params.channel;
        pool.query('DELETE FROM channel_user_subscribe WHERE channel = ?', channel, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    // delete for task_info
    // curl -X DELETE http://localhost:8001/task_info/bxzhu_task/bxzhu_channel/bxzhu
    app.delete('/task_info/:task', (request, response) => {
        const task = request.params.task; 
        pool.query('DELETE FROM task_info WHERE task = ?', task, (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });
// need attention here, try to pass more arguments here.
    // app.delete('/task_info/:task/:channel/:creator/', (request, response) => {
    //     const task = request.params.task;
    //     const channel = request.params.channel;
    //     const creator = request.params.creator; 
    //     pool.query('DELETE FROM task_info WHERE task = ?, channel = ?, creator = ?', task, channel, creator, (error, result) => {
    //         if (error) throw error;
    //         response.send(result);
    //     });
    // });
    // delete for user_channel_point
    // curl -X DELETE http://localhost:8001/user_channel_point/bxzhu/bxzhu_channel
    // app.delete('/user_channel_point/:user:channel', (request, response) => {
    //     const user = request.params.user;
    //     const channel = request.params.channel;
    //     pool.query('DELETE FROM user_channel_point WHERE user = ?, channel = ?', user, channel, (error, result) => {
    //         if (error) throw error;
    //         response.send(result);
    //     });
    // });
    // // delete for user_task_info 
    // // curl -X DELETE http://localhost:8001/user_task_info/bxzhu/bxzhu_channel/bxzhu_task
    // app.delete('/user_task_info/:user:channel:task', (request, response) => {
    //     const user = request.params.user;
    //     const channel = request.params.channel; 
    //     const task = request.params.task;
    //     pool.query('DELETE FROM user_task_info WHERE user = ?, channel = ?, task = ?', user, channel, task, (error, result) => {
    //         if (error) throw error;
    //         response.send(result);
    //     });
    // });

}
module.exports = remove;

