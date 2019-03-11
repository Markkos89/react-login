// External Dependancies
const boom = require('boom')

// Get Data Models
const Movie = require('../models/Movie')

// Get all movies
exports.getMovies = async(req, reply) => {
    try {
        const movies = await Movie.find()
        return movies
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get single movie by ID
exports.getSingleMovie = async(req, reply) => {
    try {
        const id = req.params.id
        const movie = await Movie.findById(id)
        return movie
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Add a new movie
exports.addMovie = async(req, reply) => {
    try {
        const movie = new Movie(req.body)
        return movie.save()
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Update an existing movie
exports.updateMovie = async(req, reply) => {
    try {
        const id = req.params.id
        const movie = req.body
        const {...updateData } = movie
        const update = await Movie.findByIdAndUpdate(id, updateData, { new: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Delete a movie
exports.deleteMovie = async(req, reply) => {
    try {
        const id = req.params.id
        const movie = await Movie.findByIdAndRemove(id)
        return movie
    } catch (err) {
        throw boom.boomify(err)
    }
}