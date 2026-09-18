const dns = require('dns')
const mongoose = require('mongoose');

dns.setServers(['1.1.1.1', '8.8.8.8'])

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Server is connected to db')
    } catch (err) {
        console.error('Error connecting to DB:', err.message)
        throw err
    }
}

module.exports = connectDB