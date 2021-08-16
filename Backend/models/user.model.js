const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        // Here are some validations to username
        type: String,
        // it must be a string
        required: true,
        // will make the field required
        unique: true,
        // will check if this already exists or not or will push user to enter unique value
        trim: true,
        // will delete or trim the whitespaces that users left after username
        minLength: 3
    }
}, {
    timestamps: true
    // this will attach time of creating,updating that or this will automatically creates fields for when it is created,updated 
})

const User = mongoose.model('user', userSchema)
module.exports = User