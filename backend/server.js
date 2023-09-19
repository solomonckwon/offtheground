require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const climbRoutes = require('./routes/climbs')

//express app
const app = express()

//middleware
//any request that comes in, check if there is a body to req, passes it to the req object
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method, req.body)
    next()
})

//routes
app.get('/', (req, res) => {
    res.json({mssg: "website"})
})

app.use('/api/workouts', workoutRoutes)

app.use('/api/climbs', climbRoutes)

//connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to db and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


