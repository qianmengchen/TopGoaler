const express = require('express');
const port = 8001;
const bodyParser = require('body-parser');
const app = express(); 
const read = require('./routes/read');
const create = require('./routes/create');
const remove = require('./routes/remove');
const update = require('./routes/update'); 
 
// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

read(app);
create(app);
remove(app);
update(app);

//database mock-ups
//please update this part to load real data from DB
const allData = {
    users: [
        {
            name: '123'
        },
        {
            name: '234'
        }
    ],
    channels: [
        {
            name: 'sad'
        },
        {
            name: 'qwe'
        }
    ],
    tasks: [
        {
            name: 'zxc'
        }
    ]
};

// login mock-ups
const userDB = {
    'admin': 'admin'
};

app.post('/login/', (req, res) => {
    const {username, password} = req.body;
    console.log(req.body)
    const status = (username && password && userDB[username] == password) ? 'success' : 'failure';
    res.send({status});
});

app.post('/signup/', (req, res) => {
    const {username, password} = req.body;
    let status = 'failure';
    if (typeof username == "string" && typeof password == "string" && username.length > 0 && password.length > 0) {
        if (!userDB[username]) {
            userDB[username] = password;
            status = 'success';
        }
    }
    res.send({status});
});

app.get('/loaddata', (req, res) => {
    res.json(allData);
});

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});
