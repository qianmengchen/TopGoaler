const createApp = require('./app')
const app = createApp({ enable_auth: false })
const port = 8001
// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});
