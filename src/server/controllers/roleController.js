// External Dependancies
const boom = require('boom')

// Get Data Models
const Role = require('../models/Role')

// Add a new role
exports.addRole = async(req, reply) => {
    try {
        const role = new Role(req.body)
        return role.save()
    } catch (err) {
        throw boom.boomify(err)
    }
}

exports.getRoles = async(req, reply) => {
    try {
        const roles = await Role.find()
            .lean()
            .exec()
        return roles
    } catch (err) {
        throw boom.boomify(err)
    }
}