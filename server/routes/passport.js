const passport = require('passport');
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const JWT_SECRET = require('../data/jwt');

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
    },
    (payload, done) => {
        const user = payload
        console.log("middleware got payload " + user)
        // todo: verify user exists
        return done(null, user)
    }
));
