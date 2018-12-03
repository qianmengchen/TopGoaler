const express = require('express')
const router = express.Router()
const helper = require('./helper');
const { routeFactory, doQuery, check } = helper;

// query to get all channels
let routes =
    [
        ['channel'],
        ['task'],
        ['user_channel'],
        ['user_task'],
        ['user', 'SELECT id, name, email, avatar_url FROM user'],
        ['activity_log'],
        ['vote'],
        ['proposal']
    ]

routes = routes.map( ([route, query]) => [route, query || `SELECT * FROM ${route}`] );

// instead of creating a placeholder function we can also add these
// * @name loaddata
// * @memberof read

/**
 * load data to frontend
 * @function
 * @returns {json} Returns json format of all data stored in backend
 */
function loaddata(task_id, user_id){}
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
/*
let include = (list) => (entry) => {
    const e = {}
    list.forEach(key => e[key] = entry[key])
    return e
}
*/
let extract = (field) => (entry) => {
    return entry[field]
}
/*
let compose = (flist) => (entry) => {
    return flist.reduce( (e, f) => f(e) , entry)
}
*/
// query for specific fields
let fieldRoutes =
    [
        ['user', 'id', exclude(['password'])],
        ['channel', 'id'],
        ['user_channel', 'user_id', extract('channel_id')],
        ['user_channel', 'channel_id', extract('user_id')],
        ['user_task', 'user_id', extract('task_id')],
        ['task', 'id'],
        ['task', 'channel_id'],
        ['activity_log', 'user_id'],
        ['proposal', 'id'],
        ['vote', 'id']
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
        const exists = await check(
            'SELECT * from user_channel WHERE user_id = ? AND channel_id = ?', [user_id, channel_id])
        if (!exists) {
            throw "User or Channel not found"
        }
        const result = await doQuery(
        ` SELECT IF(SUM(point) IS NULL, 0, SUM(point)) as score
          FROM activity_log INNER JOIN task ON task.id=activity_log.task_id
          WHERE user_id = ? AND channel_id = ? AND activity_log.event = 2
        `,
        [user_id, channel_id]
        )
        console.log(result);
        res.status(200).json(result[0])
    } catch (e) {
        console.log(e);
        res.status(401).json({error: e});
    }
})

/**
 * Get scoreboard of a specific channel
 * @function
 * @param {string} channel_id - The id of the channel. 
 * @example
 * // returns a table order by score DESC
 * curl -d "channel_id=1" http://localhost:8001/scoreboard
 * @returns {table} Returns a table which contains user_id and score order by score DESC
 */
function get_score_board(channel_id){}
router.get('/scoreboard/:channel_id', async (req, res) => {
    let { channel_id } = req.params
    try {
        const exist_channel = await check('SELECT * from channel WHERE id = ?', [channel_id])
        if (!exist_channel) {
            throw "Channel not found"
        }
        const result = await doQuery(
        ` SELECT
          user_id, score, @curRank := @curRank + 1 AS rank
          FROM (
            SELECT IF(SUM(point) IS NULL, 0, SUM(point)) as score, user_id
            FROM activity_log JOIN task ON task.id=activity_log.task_id
            WHERE task.channel_id = ? AND activity_log.event = 2
            GROUP BY user_id
            ORDER BY score DESC
          ) AS scoreboard, (SELECT @curRank := 0) r
          ORDER BY score DESC
          `
          , [channel_id]
        )
        res.status(200).json(result)
    } catch (e) {
        res.status(401).json({error: e});
    }
})

/**
 * Get ranking of a specific user in a specific channel
 * @function
 * @param {string} channel_id - The id of the channel. 
 * @param {string} user_id - The id of the user. 
 * @example
 * // return 1 
 * curl -d "channel_id=1&user_id=1" http://localhost:8001/ranking
 * @returns {Integer} returns ranking of the user in the channel
 */
function get_user_rank(channel_id){}
router.get('/ranking/:user_id&:channel_id', async (req, res) => {
    let { user_id, channel_id } = req.params
    try {
        const exists = await check(
            'SELECT * from user_channel WHERE user_id = ? AND channel_id = ?', [user_id, channel_id])
        if (!exists) {
            throw "User or Channel not found"
        }
        const result = await doQuery(
        `
          SELECT rank FROM
          (
          SELECT
          user_id, score, @curRank := @curRank + 1 AS rank
          FROM (
            SELECT IF(SUM(point) IS NULL, 0, SUM(point)) as score, user_id
            FROM activity_log JOIN task ON task.id=activity_log.task_id
            WHERE task.channel_id = ? AND activity_log.event = 2
            GROUP BY user_id
            ORDER BY score DESC
          ) AS scoreboard, (SELECT @curRank := 0) r
          ORDER BY score DESC
          ) as ranking
          WHERE ranking.user_id = ?
        `
          , [channel_id, user_id]
        )
        if (result.length == 0) {
            throw 'user has no activity yet'
        }
        res.status(200).json(result[0])
    } catch (e) {
        res.status(401).json({error: e});
    }
})

module.exports = router;