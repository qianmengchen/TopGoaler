const passport = require('passport');
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const JWT_SECRET = require('../data/jwt');
const pool = require('../data/config');

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
    },
    (payload, done) => {
        const { name, id } = payload
        console.log("middleware got payload ", payload)
        // todo: verify user exists
        pool.query(
            'SELECT * FROM user WHERE name = ? AND id = ?',
            [name, id],
            (err, results) => {
                if (err) return done(err);
                if (results.length == 0) return done('No such user');
                done(null, payload);
            })
    }
));
