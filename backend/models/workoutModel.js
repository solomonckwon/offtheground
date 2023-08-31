const mongoose = require('mongoose')
//mongoose allows us to create models and schemas
//mongodb does not have those inherently
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })
//timestamps show when created, adds property that shows last edit

module.exports = mongoose.model('Workout', workoutSchema)