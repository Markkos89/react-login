// External Dependancies
const boom = require('boom')

// Get Data Models
const User = require('../models/User')

// Get all user
exports.getUser = async(req, reply) => {
    try {
        const users = await User.find()
        return users
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get single user by ID
exports.getSingleUser = async(req, reply) => {
    try {
        const user = await User.findOne({_id: req.params.id})
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

exports.postAuthenticate = async(req, reply) => {
        console.log("req.body")
        console.log(req.body)

        try {
            const users = await User.find({ username: req.body.username, password: req.body.password })
            return users
        } catch (err) {
            throw boom.boomify(err)
        }
    }
    // Update an existing car
    // exports.updateCar = async(req, reply) => {
    //     try {
    //         const id = req.params.id
    //         const car = req.body
    //         const {...updateData } = car
    //         const update = await Car.findByIdAndUpdate(id, updateData, { new: true })
    //         return update
    //     } catch (err) {
    //         throw boom.boomify(err)
    //     }
    // }

// Delete a car
// exports.deleteCar = async(req, reply) => {
//     try {
//         const id = req.params.id
//         const car = await Car.findByIdAndRemove(id)
//         return car
//     } catch (err) {
//         throw boom.boomify(err)
//     }
// }