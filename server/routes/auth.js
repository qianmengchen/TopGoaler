// Load the MySQL pool connection
const express = require('express');
const router = express.Router();
const pool = require('../data/config');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../data/jwt');

passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    (username, password, done) => {
        console.log("Local strategy received " + username + " " + password)
        return pool.query(
            'SELECT * FROM user WHERE user = ? AND password = ?',
            [username, password],
            (err, results) => {
                if (err) return done(err);
                if (results.length == 0) {
                    done(null, false, 'Incorrect username or password')
                } else {
                    done(null, results[0].user, 'Logged In Successfully')
                }
            });
    }
));


router.post('/login/', (req, res) => {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(401).json({msg: `cannot login: ${JSON.stringify(info)}`})
        }
        req.login(user, {session: false}, (err) => {
            if (err) return res.status(401).json({msg: `cannot login: ${err}`})
            // generate JWT token with contents of the user object, and return it
            const token = jwt.sign(user, JWT_SECRET)
            return res.json({user, token})
        });
    })(req, res);
})

router.post('/signup/', (req, res) => {
    const { username, password } = req.body;
    const user = username;
    pool.query('SELECT * FROM user WHERE user = ?', [user], (err, results) => {
        if (err || results.length > 0) return res.status(401).json({msg: 'cannot signup: duplicate user'})
        pool.query('INSERT INTO user SET ?', { user, password }, (err) => {
            if (err) return res.status(401).json({msg: err})
            const token = jwt.sign(user, JWT_SECRET)
            res.json({ user, token })
        })
    })
});

module.exports = router