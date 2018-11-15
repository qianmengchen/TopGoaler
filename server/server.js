const express = require('express');
const port = 8001;
const bodyParser = require('body-parser');
const app = express(); 
const read = require('./routes/read');
const create = require('./routes/create');
const remove = require('./routes/remove');
const update = require('./routes/update'); 
const request = require('request-promise');
const axios = require('axios');
 
// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

read(app);
create(app);
remove(app);
update(app);

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

async function login(username, password) {
    var URL = 'http://localhost:8001/user_password/' + username + '&' + password;
    var userDB = await request(URL);
    userDB = JSON.parse(userDB);
    return userDB;
}

app.post('/login/', (req, res) => {
    const {username, password} = req.body;
    console.log(req.body);

    const userDB = login(username, password);
    const passwordDB = userDB[0].password;

    const status = (username && password && passwordDB == password) ? 'success' : 'failure';
    res.send({status});
});

function signUp(username, password) {
    axios.post('http://localhost:8001/user_password/', {
    user: username,
    password: password
}).then((res) => {
    return 1;
}).catch((error) => {
    return -1;
});
}

app.post('/signup/', (req, res) => {
    const {username, password} = req.body;
    let status = 'failure';
    if (typeof username == "string" && typeof password == "string" && username.length > 0 && password.length > 0) {
        if (!login(username, password)) {
            if(signUp(username, password)) { status = 'success'; }
        }
    }
    res.send({status});
});


app.get('/loaddata', (req, res) => {
    loadData().then((data) => {
        res.json(data)
    }).catch((err) => {
        console.log(err);
    });
});

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});

