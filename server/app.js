const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const read = require('./routes/read');
const create = require('./routes/create');
const remove = require('./routes/remove');
const update = require('./routes/update');
const loadAll = require('./routes/loadAll');
const auth = require('./routes/auth');
const request = require('request-promise');
const passport = require('passport');

require('./routes/passport');

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use('/', auth)

const jwt = passport.authenticate('jwt', {session: false})
app.use('/', read);
app.use('/', loadAll);

// For frontend polyfill, set this to FALSE
const enable_auth = false

if (enable_auth) {
    // Use access control on all POST events
    app.use('/', jwt, create);
    app.use('/', jwt, remove);
    app.use('/', jwt, update);
} else {
    app.use('/', create);
    app.use('/', remove);
    app.use('/', update);
}

module.exports = app