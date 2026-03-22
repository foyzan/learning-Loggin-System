const expressWinston = require('express-winston');
const logger = require('../utils/logger');

// Standard Request Logger
const expressWinstonInfoLogger = expressWinston.logger({
    winstonInstance: logger,
    level: 'http',
    meta: true,
    msg: "HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms",
    expressFormat: true,
    colorize: false,
    // ... your existing config
    headerBlacklist: ['authorization', 'cookie', 'set-cookie'], // SCRUB THESE
    blacklistedBodyFields: ['password', 'confirmPassword', 'card_number'],

    // Optional: reduce noise by selecting only what you need
    requestWhitelist: ['headers', 'method', 'url', 'body'],
});

// Dedicated Error Logger (Catches exceptions)
const expressWinstonErrorLogger = expressWinston.errorLogger({
    winstonInstance: logger,
    dumpExceptions: true,
    showStack: true,
    // ... your existing config
    headerBlacklist: ['authorization', 'cookie', 'set-cookie'], // SCRUB THESE
    blacklistedBodyFields: ['password', 'confirmPassword', 'card_number'],

    // Optional: reduce noise by selecting only what you need
    requestWhitelist: ['headers', 'method', 'url', 'body'],
});

module.exports = {
    expressWinstonErrorLogger,
    expressWinstonInfoLogger
};