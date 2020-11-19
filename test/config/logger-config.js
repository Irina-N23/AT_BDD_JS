"use strict";

const winston = require('winston');

module.exports.logger = winston.createLogger({
    level: 'debug',
    format: winston.format.combine(
        winston.format.simple()
    ),
    transports: [
        new winston.transports.File({filename: 'combined.log'})
    ],
});