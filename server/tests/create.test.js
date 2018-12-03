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
    pool.end()
});

describe('bad_url', async () => {
    it('handle bad user_channel', (done) => {
        request(app)
        .post('/user_channel')
        .send({user_id: 'abc', channel_id: 'def'})
        .expect(401)
        .end(done)
    })
    it('handle bad user_task', (done) => {
        request(app)
        .post('/user_task')
        .send({user_id: 'abc', task_id: 'def'})
        .expect(401)
        .end(done)
    })
    it('handle bad user', (done) => {
        request(app)
        .post('/user')
        .send({name: 'a'})
        .expect(401)
        .end(done)
    })
    it('handle bad proposal', (done) => {
        request(app)
        .post('/proposal')
        .send({name: 'a'})
        .expect(401)
        .end(done)
    })
    it('handle bad channel', (done) => {
        request(app)
        .post('/channel')
        .send({name: 'a', title: null})
        .expect(401)
        .end(done)
    })
    it('handle bad activity log', (done) => {
        request(app)
        .post('/activity_log')
        .send({name: 'a', title: null})
        .expect(401)
        .end(done)
    })
})

describe('vote', async () => {
    // let's create 3 users
    const users = Array(3).fill(0).map((_, i) =>
        ({
            name: "__test__" + i,
            email: "test" + i + "@gmail.com",
            avatar_url: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/boy-128.png",
            password: "__password__" + i
        })
    )
    const channel = {
        title: "__TestLovers",
        subtitle: "A test channel",
        creator: null,
        image_url: ""
    }
    const proposal = {
        title: '__test__',
        subtitle: 'dothat',
        pattern: 2,
        period: 1,
        channel_id: null
    }
    let channel_id = -1, proposal_id = -1

    beforeAll(async () => {
        await Promise.all(
            users.map(async (user) => {
                result = await doQuery('INSERT INTO user SET ?', user)
                user.id = result.insertId
                expect(user.id).toBeGreaterThan(0)
                return user
            })
        )
        console.log('created users', users)
        channel.creator = users[0].id
        let res = await doQuery('INSERT INTO channel SET ?', channel)
        channel_id = res.insertId
        console.log('created channel ', channel_id)

        await Promise.all(
            users.map(async (user) => {
                const body = {
                    user_id : user.id,
                    channel_id : channel_id
                }
                res = await doQuery('INSERT INTO user_channel SET ?', body)
                expect(res.affectedRows).toBe(1)
            })
        )

        // create a proposal and have two people vote on it
        proposal.channel_id = channel_id
        res = await doQuery('INSERT INTO proposal SET ?', proposal)
        proposal_id = res.insertId
        expect(proposal_id).toBeGreaterThan(0)
    });

    it('should handle bad vote', (done) => {
        request(app)
        .post('/vote')
        .send({ user_id: 10000, proposal_id: 10000, score: 100})
        .expect(401)
        .end(done)
    })
    it('should vote majority then remove proposal into task', (done) => {
        async.series([
        (cb) =>
            request(app)
            .post('/vote')
            .send({ user_id: users[0].id, proposal_id, score: 100})
            .expect(200)
            .then(res => (expect(res.body).toBe(0), cb())),
        (cb) =>
            request(app)
            .post('/vote')
            .send({ user_id: users[0].id, proposal_id, score: 100})
            .expect(200)
            .then(res => (expect(res.body).toBe(0), cb())),
        (cb) =>
            request(app)
            .post('/vote')
            .send({ user_id: users[1].id, proposal_id, score: 200})
            .expect(200)
            .then(res => (expect(res.body).toBe(1), cb())),
        (cb) =>
            check('SELECT * FROM proposal WHERE id = ?', proposal_id)
            .then(x => (expect(x).toBe(false), cb())),
        ], done)
    })

    afterAll(async () => {
        let res = await doQuery('DELETE FROM proposal WHERE title = ?', proposal.title)
        res = await doQuery('DELETE FROM task WHERE title = ?', proposal.title)
        expect(res.affectedRows).toBeGreaterThan(0)

        await Promise.all(
            users.map(async (user) => {
                const res = await doQuery('DELETE FROM user_channel WHERE user_id = ?', user.id)
                expect(res.affectedRows).toBe(1)
            })
        )
        res = await doQuery('DELETE FROM channel WHERE title = ?', channel.title)
        expect(res.affectedRows).toBeGreaterThan(0)
        await Promise.all(
            users.map(async (user) => {
                result = await doQuery('DELETE FROM user WHERE name = ?', user.name)
                expect(result.affectedRows).toBeGreaterThan(0)
            })
        )
    })
})

