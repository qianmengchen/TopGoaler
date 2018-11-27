// Temporary routes I write to pass the tests
// Please integrate these to actual route files later.

const express = require('express')
const router = express.Router()
// Load the MySQL pool connection
const { doQuery, check } = require('./helper');

// post for subscribe
// curl -d "channel_id=11&user_id=10" http://localhost:8001/subscribe
router.post('/subscribe', async (request, response) => {
    const { user_id, channel_id } = request.body
    // Example of how we should do access control
    // using .json to set the content type to application/json
    // because frontend might only take json
    if (request.user.id != user_id) {
        console.log("Req.user.id = ", request.user.id, " Req.body.user_id = ", user_id)
        return response.status(401).json('no access to this user')
    }
    const exists = await check('SELECT * FROM channel WHERE id = ?', [channel_id]);
    if (!exists)
        return response.status(401).json('no such channel');
    const results = await doQuery('INSERT INTO user_channel SET ?', request.body);
    console.log('Inserted new user_channel record:', results);
    response.status(201).json(`channel added`);
});

module.exports = router