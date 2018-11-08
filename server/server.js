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

//read(app);
//create(app);
//remove(app);
update(app);

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});
