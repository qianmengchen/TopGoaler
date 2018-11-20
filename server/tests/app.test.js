const request = require('supertest');
const app = require('../app')
const pool = require('../data/config');

afterEach(() => {
    pool.end()
});
test('should return channel info for channel_creator GET', (done) => {
    request(app)
        .get('/channel_creator/Leetcode')
        .expect(200)
        .end((_, res) => {
            expect(res.body).toHaveLength(1)
            expect(res.body[0]).toHaveProperty('channel', "Leetcode")
            done()
        });
  });


describe('Signup and Login', () => {
    it('should create new user', (done) => {
        request(app)
            .post('/signup')
            .send({ username: 'admin111', password: 'admin1' })
            .set('Accept', 'application/json')
            .expect(200)
            .then(res => {
                expect(res.body.status).toBe('success')
                done()
            })
    })
    it('should log that user in successfully', (done) => {
        request(app)
            .post('/login')
            .send({ username: 'admin111', password: 'admin1' })
            .set('Accept', 'application/json')
            .expect(200)
            .then(res => {
                expect(res.body.status).toBe('success')
                done()
            })
    });
    it('should reject with bad password', (done) => {
        request(app)
            .post('/login')
            .send({ username: 'admin111', password: 'badpass' })
            .set('Accept', 'application/json')
            .expect(200)
            .then(res => {
                expect(res.body.status).toBe('failure')
                done()
            })
    });
})