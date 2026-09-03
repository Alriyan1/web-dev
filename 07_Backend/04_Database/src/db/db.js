const mongoose = require('mongoose')

async function connectDB(){
    await mongoose.connect('********************')

    console.log('Connect to DB')
}

module.exports = connectDB