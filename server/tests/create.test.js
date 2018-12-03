const request = require('supertest');
const createApp = require('../app')
const app = createApp()
const pool = require('../data/config');
const { doQuery, check } = require('../routes/helper.js')
var async = require('async');


const _query = params => {
    var esc = encodeURIComponent;
    var query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
    return query;
};

describe('create entries', () => {
    const body = {
        task_id: 10,
        user_id: 1000,
        event: 1
    }
    it('should create activity log', (done) => {
        async.series([
            (cb) => {
                return request(app)
                .post('/activity_log')
                .send(body)
                .expect(201)
                .end(cb)
            },
            (cb) => {
                return request(app)
                .get('/activity_log/user_id/1000')
                .expect(200)
                .then(res => {
                    expect(res.body).toHaveLength(1)
                    cb()
                })
            },
            (cb) => {
                return doQuery('DELETE FROM activity_log WHERE user_id = ?', body.user_id)
                .then(res => {
                    expect(res.affectedRows).toBe(1)
                    cb()
                })
            }
        ], done)
    })
})

const test_route = (body, route, key = 'id', value = null) => {
    describe(`create ${route}`, () => {
        it(`should create ${route}`, (done) => {
            let id = 0
            async.series([
                (cb) => {
                    return request(app)
                        .post('/' + route)
                        .send(body)
                        .expect(201)
                        .then(res => {
                            if (value == null)
                                expect(res.body.id).toBeGreaterThan(0)
                            id = res.body.id
                            cb()
                        })
                },
                (cb) => {
                    return request(app)
                        .get(`/${route}/${key}/${value || id}`)
                        .expect(200)
                        .then(res => {
                            expect(res.body).toHaveLength(1)
                            cb()
                        })
                },
                (cb) => {
                    return doQuery(`DELETE FROM ${route} WHERE ${key} = ?`, value || id)
                        .then(res => {
                            expect(res.affectedRows).toBe(1)
                            cb()
                        })
                }
            ], done)
        })
    })
}

test_route( {
        title: 'what',
        subtitle: 'why',
        creator: 111,
        image_url: ''
    }, 'channel', 'id' )

test_route({
    title: 'tit',
    subtitle: 'subtit',
    period: 1,
    pattern: 3,
    channel_id:100
} , 'proposal', 'id')


test_route({
    name: 'anon',
    email: 'anon@gmail.com',
    avatar_url: 'xxx',
    password: 'xxx'
} , 'user', 'id')

test_route({
    user_id: 1000,
    channel_id: 1000
}, 'user_channel', 'user_id', 1000)

test_route({
    user_id: 1000,
    task_id: 10000
}, 'user_task', 'user_id', 1000)

afterAll(async () => {
    await _cleanUp()
    pool.end()
});

describe('vote', () => {
    it('should vote', (done) => {
        request(app).post('/vote').send({
            user_id: 1000,
            proposal_id: 1000,
            score: 100
        }).expect(401).end(done)
    })
})
const _cleanUp = async () => {
}
