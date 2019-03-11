// External Dependancies
const boom = require('boom')

// Get Data Models
const User = require('../models/User')

// Get all user
exports.getUsers = async(req, reply) => {
    try {
        const users = await User.find()
            .populate('role')
            .lean()
            .exec()
        return users
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get single user by ID
exports.getSingleUser = async(req, reply) => {
    try {
        const user = await User.findOne({ _id: req.params.id })
            .populate('role')
            .lean()
            .exec()
        return user
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Add a new user
exports.addUser = async(req, reply) => {
    try {
        const user = new User(req.body)
        return user.save()
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Authentication, will be moved to authController.js

exports.postAuthenticate = async(req, reply) => {
    console.log("req.body")
    console.log(req.body)

    try {
        const users = await User.find({ username: req.body.username, password: req.body.password })
            .populate('role')
            .lean()
            .exec();
        return users
    } catch (err) {
        throw boom.boomify(err)
    }
}