// Temporary routes I write to pass the tests
// Please integrate these to actual route files later.

const express = require('express')
const router = express.Router()
// Load the MySQL pool connection
const pool = require('../data/config');

// post for subscribe
// curl -d "channel_id=11&user_id=10" http://localhost:8001/subscribe
router.post('/subscribe', (request, response) => {
    // Example of how we should do access control
    const { user_id, channel_id } = request.body
    if (request.user.id != user_id) {
        console.log("Req.user.id = ", request.user.id, " Req.body.user_id = ", user_id)
        return response.status(401).json('no access to this user')
    }
    const checkChannel = () => {
        pool.query(
            'SELECT * FROM channel WHERE id = ?',
            [channel_id],
            (error, results) => {
                if (error) throw error;
                if (results.length == 0) {
                    return response.status(401).json('no such channel')
                }
                doInsert()
        })
    }
    const doInsert = () => {
        pool.query(
            'INSERT INTO user_channel SET ?',
            request.body,
            (error, results) => {
                if (error) throw error;
                console.log('Inserted new user_channel record:', results);
                response.status(201).json(`channel added`)
            })
        }
    checkChannel()
});

module.exports = router