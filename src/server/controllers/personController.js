// External Dependancies
const boom = require('boom')

// Get Data Models
const Person = require('../models/Person')

// Get all persons
exports.getPersons = async(req, reply) => {
    try {
        const persons = await Person.find()
        return persons
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get single person by ID
exports.getSinglePerson = async(req, reply) => {
    try {
        const id = req.params.id
        const person = await Person.findById(id)
        return person
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Add a new person
exports.addPerson = async(req, reply) => {
    try {
        const person = new Person(req.body)
        return person.save()
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Update an existing person
exports.updatePerson = async(req, reply) => {
    try {
        const id = req.params.id
        const person = req.body
        const {...updateData } = person
        const update = await Person.findByIdAndUpdate(id, updateData, { new: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Delete a person
exports.deletePerson = async(req, reply) => {
    try {
        const id = req.params.id
        const person = await Person.findByIdAndRemove(id)
        return person
    } catch (err) {
        throw boom.boomify(err)
    }
}