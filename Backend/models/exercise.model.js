const mongoose = require('mongoose')

const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    // exerciseSchema will have 4 fields defined below
    username: {type: String, required:true},
    // Here are some validations to username
    description: { type: String, required: true},
    // Here are some validations to description
    duration: { type: Number, required: true},
    // Here are some validations to  duration
    date: { type: Date, required: true}
    // Here are some validations to  date
}, {
    timestamps: true
    // this will attach time of creating,updating that or this will automatically creates fields for when it is created,updated 
})

const Exercise = mongoose.model('Exercise', exerciseSchema)
module.exports = Exercise