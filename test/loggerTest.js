const logger = require('../src/logger')('loggerTest')

logger.info('This is info log')
logger.warn('This is warning')
logger.error('An error happened')
logger.debug('Debug message')