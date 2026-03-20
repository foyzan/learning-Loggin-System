const {createLogger, format, transports} = require('winston')
const { stack } = require('../../routes')
const {json, timestamp, combine, errors } = format



const consoleTransport = new transports.Console({
    level : 'info',
    format: combine(timestamp(), json(), errors({stack: true}))
})

const logger = createLogger({
    transports : [consoleTransport]
})

module.exports = logger