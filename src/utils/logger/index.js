
const {createLogger, format, transports} = require('winston')
require('winston-daily-rotate-file')
const {json, timestamp, combine} = format



const consoleTransport = new transports.Console({
    level : 'info',
    format: combine(timestamp(), json())
})

// FileTransporter
const fileTransporter = (level, filename) => {

    return new transports.DailyRotateFile({
    level: level || 'info',
    filename: `logs/${level}/application-${filename}-%DATE%.log`,
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  })
}


const infoFileTransporter = fileTransporter('info', 'logs/info/info.log')
const errorFileTransporter = fileTransporter('error', 'logs/error/error.log')

const logger = createLogger({
    transports : [consoleTransport, infoFileTransporter, errorFileTransporter]
})

module.exports = logger