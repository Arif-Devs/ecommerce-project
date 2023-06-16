const express = require('express')
const connectDb = require('./utils/db')
const morgan = require('morgan')
const app = express()
const createError = require('http-errors')
const xssClean = require('xss-clean')
const rateLimit = require('express-rate-limit')

Router = require('./routes/route')
require("dotenv").config()
const port = process.env.SERVER_PORT || 3000

const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,// 1 minute
    max: 5,
    massage: 'Too many requests, please try again later'
})


app.use(rateLimiter)
app.use(morgan('dev'))
app.use(xssClean())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use('/api/users', Router)



app.get('/health', (req, res) => {
    res.status(200).send({ message: ' api is okay' })
})



//client error handler
app.use((req, res, next) => {
    res.status(404).send({ message: ' route not found' })

    next()
})

//server error handler

app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({ success: false, massage: err.message })
})


connectDb('mongodb://127.0.0.1:27017/ecommerce-db')
    .then(()=>{
        console.log('database connection established')
        app.listen(port, () => {
            console.log(`listening on port  ${port}`)
        })
    })
    .catch((err) => console.log(err))







