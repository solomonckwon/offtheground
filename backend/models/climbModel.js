const mongoose = require('mongoose')

const Schema = mongoose.Schema

const climbSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true,
        max: 5,
        min: 0
    }
}, {timestamps: true})

module.exports = mongoose.model('Climb', climbSchema)