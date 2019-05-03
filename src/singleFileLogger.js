'use strict'

/*
* Logger into single file only
*/

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;
const path = require('path')

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} ${level.toUpperCase()} [${label}] ${message}`;
});

const logger = function(moduleName) {
    if (moduleName === null || moduleName.trim() === '') {
        moduleName = 'unknown_module'
    }
    return createLogger({
        level: 'debug',
        format: combine(
            label({ label: moduleName }),
            timestamp({
                format: 'YYYY-MM-DD HH:mm:ss' // Local time by timezone
            }),
            myFormat
        ),
        transports: [
                //new transports.Console(),
                //new transports.File({ filename: 'D:/logs/error.log', level: 'error' }),
                new transports.File({ filename: path.join('D:/logs', 'debug.log') }),
            ]
    });
}

module.exports = logger
