# nodejs-log
Sample logging of nodejs application:
* Format log in local time by timezone.
* Rotate file daily automatically.

Using modules
* [winston](https://www.npmjs.com/package/winston)
* [winston-daily-rotate-file](https://www.npmjs.com/package/winston-daily-rotate-file)

Test: 

`node .\test\loggerTest.js`

Output log file D:/logs/
```
2019-03-21 16:00:33 [info] This is info log
2019-03-21 16:00:33 [warn] This is warning
2019-03-21 16:00:33 [error] An error happened
```