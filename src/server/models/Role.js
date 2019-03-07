// External Dependancies
const mongoose = require('mongoose')

const roleSchema = new mongoose.Schema({
    admin: String,
    user: String
});

module.exports = mongoose.model('Role', roleSchema)