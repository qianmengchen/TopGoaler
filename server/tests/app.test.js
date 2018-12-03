const request = require('supertest');
const createApp = require('../app')
const app = createApp()
const pool = require('../data/config');
const jwt = require('jsonwebtoken');
const SECRET_KEY = require('../data/jwt')
const { doQuery } = require('../routes/helper.js')


const _query = params => {
    var esc = encodeURIComponent;
    var query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
    return query;
};

const username = 'admin_' + new Date().toISOString()
const password = 'admin1'
const channelID = 1

describe('User Login / Signup', () => {
    it('should create new user', (done) => {
        request(app)
            .post('/signup')
            .send({ username , password })
            .set('Accept', 'application/json')
            .expect(200)
            .then(res => {
                expect(res.body).toHaveProperty("token")
                const decoded = jwt.verify(res.body.token, SECRET_KEY)
                expect(decoded).toHaveProperty("id")
                expect(decoded).toHaveProperty("name")
                expect(decoded.name).toBe(username)
                done()
            })
    })
    it('should log that user in successfully with token', (done) => {
        request(app)
            .post('/login')
            .send({ username, password })
            .set('Accept', 'application/json')
            .expect(200)
            .then(res => {
                expect(res.body).toHaveProperty("token")
                const decoded = jwt.verify(res.body.token, SECRET_KEY)
                expect(decoded).toHaveProperty("id")
                expect(decoded).toHaveProperty("name")
                expect(decoded.name).toBe(username)
                done()
            })
    });
    it('should reject with bad password', (done) => {
        request(app)
            .post('/login')
            .send(_query({ username: username, password: 'badpass' }))
            .set('Accept', 'application/json')
            .expect(401)
            .then(res => {
                expect(res.body).toHaveProperty('msg')
                expect(res.body.msg).toMatch(/cannot login/)
                done()
            })
    });
})


describe('Access Control', async () => {
    let token = ''
    let user_id = Infinity
    let _wrap = (f) => (err) => {
        if (err) throw err;
        f();
    }
    it('should reject setting other users\' subscription and only allow self', (done) => {
        const badRequest = () => {
            request(app)
            .post('/subscribe')
            .set('Authorization', `Bearer ${token}`)
            .send(_query({ user_id: user_id + 100, channel_id: channelID }))
            .expect(401)
            .expect(/access/)
            .end(done)
        }
        const goodRequest = () => {
            request(app)
            .post('/subscribe')
            .set('Authorization', `Bearer ${token}`)
            .send(_query({ user_id, channel_id: channelID }))
            .expect(201)
            .end(_wrap(badRequest))
        }
        request(app)
            .post('/login')
            .send(_query({ username, password }))
            .set('Accept', 'application/json')
            .expect(200)
            .expect(res => {
                token = res.body.token
                user_id = res.body.id
            })
            .end(_wrap(goodRequest))
    })
})

afterAll(async () => {
    await _cleanUp()
    pool.end()
});

const _cleanUp = async () => {
    // delete user
    await doQuery('DELETE FROM user WHERE name = ? AND password = ?', [username, password])
}