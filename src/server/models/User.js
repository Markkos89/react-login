// External Dependancies
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    }
});

module.exports = mongoose.model('User', userSchema)