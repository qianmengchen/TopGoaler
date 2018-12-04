const request = require('supertest');
const createApp = require('../app')
const app = createApp()
const app2 = createApp({enable_auth:true})
const pool = require('../data/config');
const { doQuery } = require('../routes/helper.js')
var async = require('async');

const _query = params => {
    var esc = encodeURIComponent;
    var query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
    return query;
};

describe('Load All', () => {
    it('should load all databases into a JSON', (done) => {
        request(app)
            .get('/loaddata')
            .expect(200)
            .then(res => {
                const f = prop => expect(res.body).toHaveProperty(prop)
                const fields = ["channel", "task", "user", "user_channel",
                    "user_task", "activity_log", "vote", "proposal"]
                fields.forEach(f)
                done()
            })
    })
})

describe('Detail Getter shoudl work', () => {
    it('should filter out password', (done) => {
        request(app).get('/user/id/1').expect(200)
        .then(res => {
            expect(res.body.password).toBeUndefined();
            done()
        })
    })
    it('should work for simple routes', (done) => {
        request(app).get('/channel/id/1').expect(200)
        .then(res => {
            expect(res.body).toHaveLength(1)
            expect(res.body[0]).toHaveProperty('title')
            expect(res.body[0]).toHaveProperty('creator')
            done()
        })
    })
    it('should handle failure', (done) => {
        request(app).get('/err_demo/id/word').expect(401).end(done)
    })
})
describe('Basic Score and Ranking', async () => {
    const channel = 1
    let user_id = -1
    let num = 0

    it('should give rankings for all users in a channel', (done) => {
        async.series([
            (cb) =>
                request(app)
                .get(`/user_channel/channel_id/${channel}`)
                .expect(200)
                .then(res => {
                    num = res.body.length
                    cb()
                }),
            (cb) =>
                request(app)
                .get(`/scoreboard/${channel}`)
                .expect(200)
                .then(res => {
                    res = res.body
                    expect(res.length).toBeLessThanOrEqual(num)
                    if (res.length >= 1) {
                        //expect(res.length).toBeGreaterThanOrEqual(2)
                        expect(res[0]).toHaveProperty('score')
                        expect(res[0]).toHaveProperty('rank')
                        const scoreList = res.sort( (x, y) => x.score > y.score )
                        const highScore = scoreList[0].score
                        const numberOfDraw = scoreList.filter( x => x.score == highScore ).length
                        expect(scoreList[0].rank).toBeLessThanOrEqual(numberOfDraw);
                        user_id = scoreList[0].user_id
                    } else if (res.length >= 2) {
                        expect(res[0].score).toBeGreaterThanOrEqual(res[1].score)
                    }
                    cb()
                }),
            (cb) => (done(), /*expect(user_id).toBeGreaterThan(0)*/ cb())
        ])
    })

    it('should handle score', (done) => {
        request(app)
            .get(`/score/1&1`)
            .expect(200)
            .then(res => {
                expect(res.body).toHaveProperty("score")
                done()
            })
    })

    /*
    it('should handle bad ranking', (done) => {
        request(app)
            .get(`/ranking/1&1`)
            .expect(401)
            .end(done)
    })
    */

    it('should handle failure', (done) => {
        async.series([
        (done) => request(app)
            .get(`/score/1&-1`)
            .expect(401)
            .end(done),
        (done) => request(app)
            .get('/ranking/1&1000000')
            .expect(401)
            .end(done),
        (done) => request(app)
            .get('/scoreboard/10000000')
            .expect(401)
            .end(done),
        ], done);
    })

})

describe('produce meaningful ranking', async () => {
    let channel_id = 1, user_id = -1
    beforeAll( async () => {
        const res = await doQuery(`SELECT user_channel.user_id FROM user_channel JOIN activity_log ON 
        activity_log.user_id = user_channel.user_id
        WHERE channel_id = ? AND event = 2`, channel_id)
        user_id = res[0].user_id
        console.log('best candidate for channel', channel_id, 'is', user_id)
    })
    it('should get valid ranking', (done) => {
        expect(user_id).toBeGreaterThan(0)
        request(app).get(`/ranking/${user_id}&${channel_id}`)
        .expect(200).then(res => {
            expect(res.body).toHaveProperty('rank')
            //expect(res.body.rank).toBe(1)
            done()
        })
    })
})

afterAll(async () => {
    await _cleanUp()
    pool.end()
});

const _cleanUp = async () => {
}
