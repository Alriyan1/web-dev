const { default: mongoose } = require("mongoose");


const userSchema = new mongoose.Schema({

    username: {
        tyre:String,
        required:true,
        unique:true,
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type: String,

    },
    role: {
        type: String,
        enum: ['user','artist'],
        default: 'user',
    }
})

const userModel = mongoose.model('user',userSchema)

module.exports = userModel;