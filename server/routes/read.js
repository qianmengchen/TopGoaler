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


router.get('/loaddata', async (req, res) => {
    const data = {}
    await Promise.all(routes.map( async ([route, query]) => {
        data[route] = await doQuery(query)
    }))
    res.json(data)
})

let exclude = (list) => (entry) => {
    list.forEach(key => delete entry[key])
    return entry
}
let include = (list) => (entry) => {
    const e = {}
    list.forEach(key => e[key] = entry[key])
    return e
}
let extract = (field) => (entry) => {
    return entry[field]
}
let compose = (flist) => (entry) => {
    return flist.reduce( (e, f) => f(e) , entry)
}
// query for specific fields
let fieldRoutes =
    [
        ['user', 'id', exclude(['password'])],
        ['channel', 'id'],
        ['user_channel', 'user_id', extract('channel_id')],
        ['user_task', 'user_id', extract('task_id')],
        ['task', 'id'],
        ['task', 'channel_id']
    ]

fieldRoutes.forEach( ([route, field, func]) => {
    router.get(`/${route}/${field}/:${field}`, async (req, res) => {
        const data = [req.params[field]]
        const query = `SELECT * FROM ${route} WHERE ${field} = ?`
        routeFactory(query, data)(req, res, (body) => {
            if (func)
                body = body.map(func)
            return body
        })
    })
})

// Simple routes take precedence
routes.forEach( ([route, query]) => {
    router.get('/' + route, async (req, res) => routeFactory(query)(req, res))
})

router.get('/score/:user_id&:channel_id', async (req, res) => {
    let { user_id, channel_id } = req.params
    console.log(user_id, channel_id);
    try {
        const result = await doQuery(
        ` SELECT SUM(point) as score
          FROM user_task INNER JOIN task ON task.id=user_task.task_id
          WHERE user_id = ? AND channel_id = ?`,
        [user_id, channel_id]
        )
        console.log(result);
        res.json(result[0])
    } catch (e) {
        console.log(e);
        res.status(401).json({error: e});
    }
})

router.get('/scoreboard/:channel_id', async (req, res) => {
    let { channel_id } = req.params
    try {
        const result = await doQuery(
        ` SELECT
          user_id, @curRank := @curRank + 1 AS rank
          FROM (
            SELECT SUM(point) as score, user_id
            FROM user_task JOIN task ON task.id=user_task.task_id
            WHERE task.channel_id = ?
            GROUP BY user_id
            ORDER BY score DESC
          ) AS scoreboard, (SELECT @curRank := 0) r
          ORDER BY score DESC
          `
          , [channel_id]
        )
        res.json(result)
    } catch (e) {
        res.status(401).json({error: e});
    }
})

router.get('/ranking/:user_id&:channel_id', async (req, res) => {
    let { user_id, channel_id } = req.params
    try {
        const result = await doQuery(
        `
          SELECT rank FROM
          (
          SELECT
          user_id, @curRank := @curRank + 1 AS rank
          FROM (
            SELECT SUM(point) as score, user_id
            FROM user_task JOIN task ON task.id=user_task.task_id
            WHERE task.channel_id = ?
            GROUP BY user_id
            ORDER BY score DESC
          ) AS scoreboard, (SELECT @curRank := 0) r
          ORDER BY score DESC
          ) as ranking
          WHERE ranking.user_id = ?
        `
          , [channel_id, user_id]
        )
        res.json(result[0])
    } catch (e) {
        res.status(401).json({error: e});
    }
})

module.exports = router;