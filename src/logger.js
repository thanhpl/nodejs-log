const { createLogger, format, transports } = require('winston')
const { combine, printf } = format;
require('winston-daily-rotate-file');
 
var transport = new (transports.DailyRotateFile)({
    dirname: 'D:/logs',
    filename: 'application-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '30d'
});
 
transport.on('rotate', function(oldFilename, newFilename) {
    // Handle rotate event
});

const customFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}] ${message}`;
});
 
const logger = createLogger({
    level: 'debug', // Level to log message
    format: combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss' // Local time by timezone
        }),
        customFormat
      ),
    transports: [
      transport
    ]
});

module.exports = logger

/*
const levels = { 
    error: 0, 
    warn: 1, 
    info: 2, 
    verbose: 3, 
    debug: 4, 
    silly: 5 
  };
*/