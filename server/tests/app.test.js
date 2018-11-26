const request = require('supertest');
const app = require('../app')
const pool = require('../data/config');
const jwt = require('jsonwebtoken');
const SECRET_KEY = require('../data/jwt')

afterAll(() => {
    pool.end()
});


const _query = params => {
    var esc = encodeURIComponent;
    var query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
    return query;
};

const username = 'admin_' + new Date().toISOString()
const password = 'admin1'

// describe('User Login / Signup', () => {
//     it('should create new user', (done) => {
//         request(app)
//             .post('/signup')
//             .send(_query({ username , password }))
//             .set('Accept', 'application/json')
//             .expect(200)
//             .then(res => {
//                 expect(res.body.user).toBe(username)
//                 expect(res.body).toHaveProperty("token")
//                 done()
//             })
//     })
//     it('should log that user in successfully with token', (done) => {
//         request(app)
//             .post('/login')
//             .send(_query({ username, password }))
//             .set('Accept', 'application/json')
//             .expect(200)
//             .then(res => {
//                 expect(res.body.user).toBe(username)
//                 expect(res.body).toHaveProperty("token")
//                 const decoded = jwt.verify(res.body.token, SECRET_KEY)
//                 expect(decoded).toBe(username)
//                 done()
//             })
//     });
//     it('should reject with bad password', (done) => {
//         request(app)
//             .post('/login')
//             .send(_query({ username: username, password: 'badpass' }))
//             .set('Accept', 'application/json')
//             .expect(401)
//             .then(res => {
//                 expect(res.body).toHaveProperty('msg')
//                 expect(res.body.msg).toMatch(/cannot login/)
//                 done()
//             })
//     });
// })

// describe('Access Control', async () => {
//     let token = ''
//     let _wrap = (f) => (err) => {
//         if (err) throw err;
//         f();
//     }
//     it('should reject setting other users\' subscription and only allow self', (done) => {
//         const badRequest = () => {
//             request(app)
//             .post('/channel_user_subscribe')
//             .set('Authorization', `Bearer ${token}`)
//             .send(_query({ user: "not_me", channel: 'Leetcode' }))
//             .expect(401)
//             .end(done)
//         }
//         const goodRequest = () => {
//             request(app)
//             .post('/channel_user_subscribe')
//             .set('Authorization', `Bearer ${token}`)
//             .send(_query({ user: username, channel: 'Leetcode' }))
//             .expect(201)
//             .end(_wrap(badRequest))
//         }
//         request(app)
//             .post('/login')
//             .send(_query({ username, password }))
//             .set('Accept', 'application/json')
//             .expect(200)
//             .expect(res => {
//                 token = res.body.token
//             })
//             .end(_wrap(goodRequest))
//     })
// })