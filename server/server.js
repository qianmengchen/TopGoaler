const express = require('express');
const port = 8001;
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');
const query = require('./routes/routes');
 
// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
//routes(app); 
query(app);

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});
