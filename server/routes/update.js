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

}
module.exports = update;

