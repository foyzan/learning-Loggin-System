const express = require('express')
const app = express()
const userRouter = require("./routes")
const logger = require('./utils/logger')


// default 

app.use(express.json())
app.use(express.urlencoded({extended: true}))


// Routers

app.use(userRouter)



logger.info("")


app.use((error, req, res, next)=>{

    const errorObj = {
        message : error?.message || 'Something went wrong',
        
        status: error?.status || 500
    }

    logger.error(JSON.stringify(errorObj))

    res.status(errorObj.status).json(errorObj)
})


module.exports = app