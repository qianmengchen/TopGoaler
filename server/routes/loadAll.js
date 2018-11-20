const express = require('express');
const router = express.Router();

async function loadData() {
    var channel_creator = await request('http://localhost:8001/channel_creator/');
    channel_creator = JSON.parse(channel_creator);
    var channel_task = await request('http://localhost:8001/channel_task/');
    channel_task = JSON.parse(channel_task);
    var channel_user_subscribe = await request('http://localhost:8001/channel_user_subscribe/');
    channel_user_subscribe = JSON.parse(channel_user_subscribe);
    var task_info = await request('http://localhost:8001/task_info/');
    task_info = JSON.parse(task_info);
    var user_channel_point = await request('http://localhost:8001/user_channel_point/');
    user_channel_point = JSON.parse(user_channel_point);
    var user_task_info = await request('http://localhost:8001/user_task_info/');
    user_task_info = JSON.parse(user_task_info);
    data = {
        channel_creator,
        channel_task,
        channel_user_subscribe,
        task_info,
        user_channel_point,
        user_task_info
    };
    return data;
}

router.get('/loaddata', (req, res) => {
        loadData().then((data) => {
            res.json(data)
        }).catch((err) => {
            console.log(err);
        });
    });

module.exports = router