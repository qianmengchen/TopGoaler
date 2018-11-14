const express = require('express');
const port = 8001;
const bodyParser = require('body-parser');
const app = express(); 
const read = require('./routes/read');
const create = require('./routes/create');
const remove = require('./routes/remove');
const update = require('./routes/update'); 
const request = require('request');
 
// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

read(app);
create(app);
remove(app);
update(app);

var daa = {};
function loadData() {
request('http://localhost:8001/channel_creator/', function(err, res, body){  
    var objA = JSON.parse(body);
    request('http://localhost:8001/channel_task/', function(err, res, body) {  
        var objB = JSON.parse(body);  
        request('http://localhost:8001/channel_user_subscribe/', function(err, res, body) {  
            var objC = JSON.parse(body);  
            request('http://localhost:8001/task_info/', function(err, res, body) {  
                var objD = JSON.parse(body);   
                request('http://localhost:8001/user_channel_point/', function(err, res, body) {  
                    var objE = JSON.parse(body);   
                    request('http://localhost:8001/user_task_info/', function(err, res, body) {  
                        var objF = JSON.parse(body);   
                        daa = objA.concat(objB).concat(objC).concat(objD).concat(objE).concat(objF);

                        console.log(objA)
                        console.log(objB)
                        console.log(objC)
                        console.log(objC)
                        console.log(objD)
                        console.log(objE)
                        console.log(objF)
                        console.log(daa)
                        return daa;
                    });
                });
            });
        });
    });
});
}
loadData();
console.log(daa)
console.log("daa")
//database mock-ups
//please update this part to load real data from DB
// const allData = {
//     users: [
//         {
//             name: '123'
//         },
//         {
//             name: '234'
//         }
//     ],
//     channels: [
//         {
//             name: 'sad'
//         },
//         {
//             name: 'qwe'
//         }
//     ],
//     tasks: [
//         {
//             name: 'zxc'
//         }
//     ]
// };

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
    allData = loadData(); 
    console.log(`allData`);
    console.log(allData);
   //res.json(allData);
   res.send(allData)
});

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});
