const {createLogger, format, transports} = require('winston')
const { stack } = require('../../routes')
const {json, timestamp, combine, errors } = format



const consoleTransport = new transports.Console({
    level : 'info',
    format: combine(timestamp(), json(), errors({stack: true}))
})

// FileTransporter
const fileTransporter = (level, filename) => {

    return new transports.File({
        level: level || "info",
        format: combine(timestamp(), json()),
        filename: filename || 'logs/info/info.log'
    })
}


const infoFileTransporter = fileTransporter('info', 'logs/info/info.log')
const errorFileTransporter = fileTransporter('error', 'logs/error/error.log')

const logger = createLogger({
    transports : [consoleTransport, infoFileTransporter, errorFileTransporter]
})

module.exports = logger