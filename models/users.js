const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type: String,
        required: true
    },
    userName : {
        type : String,
        required: true
    },
    password : {
        type : String,
        required : true
    }
    
})


module.exports = mongoose.model('users', userSchema)