'use strict';

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var password = _crypto2.default.randomBytes(32),
    secret = _crypto2.default.randomBytes(32);

module.exports = {
    server: {
        host: 'polli-gilts.c9users.io',
        port: 8081
    },
    database: {
        host: 'polli-gilts.c9users.io',
        port: 27017,
        db: 'login',
        url: 'mongodb://gili:s2u7m0s9umon@ds259325.mlab.com:59325/polli-app'
    },
    key: {
        privateKey: '37LvDSm4XvjYASDFW34N,ASL?23498112$@%Oh9Y',
        tokenExpiry: 1 * 30 * 1000 * 60 //1 hour
    },
    email: {
        username: "polliApp",
        password: password
    },
    jwtSecret: secret,
    SESSION_SECRET: secret
};