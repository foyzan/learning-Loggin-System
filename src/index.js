const express = require('express')
const app = express()
const userRouter = require("./routes")
const logger = require('./utils/logger')
const { expressWinstonInfoLogger, expressWinstonErrorLogger } = require('./middlewares/express-winston')


// default 

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(expressWinstonInfoLogger)
// Routers
app.use(userRouter)

app.use(expressWinstonErrorLogger)





app.use((error, req, res, next)=>{

    const errorObj = {
        message : error?.message || 'Something went wrong',
        
        status: error?.status || 500
    }


    res.status(errorObj.status).json(errorObj)
})


module.exports = app