// External Dependancies
const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    lastname: String,
    firstname: String,
    aliases: String,
    Movies_as_actor: Array,
    Movies_as_director: Array,
    Movies_as_producer: Array,
})

module.exports = mongoose.model('Person', personSchema)