const express = require('express')
const router = express.Router()
const helper = require('./helper');
const { routeFactory, doQuery } = helper;

// query to get all channels
let routes =
    [
        ['channel'],
        ['task'],
        ['user_channel'],
        ['user_task'],
        ['user'], //, 'SELECT id, name, email, avatar_url, description FROM user'],
        ['activity_log'],
        ['vote'],
        ['proposal']
    ]

routes = routes.map( ([route, query]) => [route, query || `SELECT * FROM ${route}`] );

routes.forEach( ([route, query]) => {
    router.get('/' + route, routeFactory(query))
})

router.get('/loaddata', async (req, res) => {
    const data = {}
    await Promise.all(routes.map( async ([route, query]) => {
        data[route] = await doQuery(query)
    }))
    res.json(data)
})

module.exports = router;