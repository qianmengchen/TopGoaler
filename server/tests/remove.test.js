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

afterAll(async () => {
    pool.end()
});

describe('Delete operations', () => {
    it('should remove user from subscribing channel', (done) => {
        doQuery(`INSERT INTO user_channel SET ?`, {user_id: 1e6, channel_id: 1e6})
        .then(res => {
            expect(res.affectedRows).toBe(1)
            request(app).delete(`/user_channel/${1e6}&${1e6}`)
            .expect(200).end(done)
        })
    })
    it('should handle failure', (done) => {
        request(app).delete('/user_channel/a&b').expect(401).end(done)
    })

    it('should remove user from doing task', (done) => {
        doQuery(`INSERT INTO user_task SET ?`, {user_id: 1e6, task_id: 1e6})
        .then(res => {
            expect(res.affectedRows).toBe(1)
            request(app).delete(`/user_task/${1e6}&${1e6}`)
            .expect(200).end(done)
        })
    })
    it('should handle failure', (done) => {
        request(app).delete('/user_task/a&b').expect(401).end(done)
    })
})