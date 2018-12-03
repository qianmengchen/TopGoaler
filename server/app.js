const express = require('express');
const bodyParser = require('body-parser');
const read = require('./routes/read');
const create = require('./routes/create');
const remove = require('./routes/remove');
const update = require('./routes/update');
const temp = require('./routes/temp');
const auth = require('./routes/auth');
const passport = require('passport');
require('./routes/passport');

const defaultConfig = {
    enable_auth: false
}

const createApp = (config = defaultConfig) => {
    const app = express();

    // Use Node.js body parsing middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true,
    }));

    app.use('/', auth)

    const jwt = passport.authenticate('jwt', { session: false })
    app.use('/', read);

    // For frontend polyfill, set this to FALSE
    if (config.enable_auth) {
        // Use access control on all POST events
        app.use('/', jwt, create);
        app.use('/', jwt, remove);
        app.use('/', jwt, update);
    } else {
        app.use('/', create);
        app.use('/', remove);
        app.use('/', update);
    }

    // temp routers
    app.use('/', jwt, temp);

    return app;
}

module.exports = createApp