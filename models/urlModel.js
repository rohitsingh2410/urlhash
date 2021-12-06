const mongoose = require('mongoose')

// instantiate a mongoose schema
const URLSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: {
        type: Date,
        default: new Date().toISOString()
    }
})

module.exports = mongoose.model('Url', URLSchema)