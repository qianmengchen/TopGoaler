const express = require('express');
const request = require('request-promise');
const router = express.Router();

async function loadData() {
    var channel = await request('http://localhost:8001/channel/');
    channel = JSON.parse(channel); 
    var task = await request('http://localhost:8001/task/');
    task = JSON.parse(task);
    var user_channel = await request('http://localhost:8001/user_channel/');
    user_channel = JSON.parse(user_channel);
    var user_task = await request('http://localhost:8001/user_task/');
    user_task = JSON.parse(user_task);
    var user = await request('http://localhost:8001/user/');
    user = JSON.parse(user); 
    var activity_log = await request('http://localhost:8001/activity_log/');
    activity_log = JSON.parse(activity_log);
    var vote = await request('http://localhost:8001/vote/');
    vote = JSON.parse(vote); 
    var proposal = await request('http://localhost:8001/proposal/');
    proposal = JSON.parse(proposal);
    data = {
        channel, 
        task,
        user,
        user_channel,
        user_task,
        activity_log,
        vote,
        proposal
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