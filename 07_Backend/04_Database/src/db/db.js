const mongoose = require('mongoose')

async function connectDB(){
    await mongoose.connect('mongodb+srv://yt:QFZi5hehdsHc94PS@yt-complete-backend.rlrbn6g.mongodb.net/halley')

    console.log('Connect to DB')
}

module.exports = connectDB