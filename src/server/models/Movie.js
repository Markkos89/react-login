// External Dependancies
const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: String,
    release_year: String,
    aliases: String,
    Casting: Array,
    Directors: Array,
    Producers: Array,
})

module.exports = mongoose.model('Movie', movieSchema)