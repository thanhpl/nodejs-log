# nodejs-log
Sample logging of nodejs application:
* Format log in local time by timezone
* Rotate file automatically everyday
* Delete old logs with `maxFiles` property

Using modules:
* [winston](https://www.npmjs.com/package/winston)
* [winston-daily-rotate-file](https://www.npmjs.com/package/winston-daily-rotate-file)

To use logger in your module: 
```
const logger = require('./logger')('loggerTest') // loggerTest is module name
...
logger.info('This is info log')
logger.warn('This is warning')
logger.error('An error happened')
logger.debug('Debug message')
```

To run a sample:
```
node .\test\loggerTest.js
```

Output log file D:/logs/
```
2019-03-28 14:06:25 INFO [loggerTest] This is info log
2019-03-28 14:06:25 WARN [loggerTest] This is warning
2019-03-28 14:06:25 ERROR [loggerTest] An error happened
2019-03-28 14:06:25 DEBUG [loggerTest] Debug message
```