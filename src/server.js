
const app = require(".");
const logger = require('./utils/logger')

app.listen(4000, function(){
    logger.info('server is running 4000')
})