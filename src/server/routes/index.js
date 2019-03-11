// Import our Controllers
const personController = require('../controllers/personController')
const movieController = require('../controllers/movieController')
const userController = require('../controllers/userController')
const roleController = require('../controllers/roleController')
    // Import Swagger documentation
    // const documentation = require('./documentation/carApi')

const routes = [{
        method: 'POST',
        url: '/api/roles',
        handler: roleController.addRole
            // schema: documentation.addRoleSchema
    },
    {
        method: 'GET',
        url: '/api/roles',
        handler: roleController.getRoles
    },
    {
        method: 'POST',
        url: '/api/users/authenticate',
        handler: userController.postAuthenticate
    },
    {
        method: 'GET',
        url: '/api/users/:id',
        handler: userController.getSingleUser
    },
    {
        method: 'POST',
        url: '/api/users',
        handler: userController.addUser
            // schema: documentation.addUserSchema
    },
    {
        method: 'GET',
        url: '/api/users',
        handler: userController.getUsers
            // schema: documentation.addUserSchema
    },
    {
        method: 'GET',
        url: '/api/persons',
        handler: personController.getPersons
    },
    {
        method: 'GET',
        url: '/api/persons/:id',
        handler: personController.getSinglePerson
    },
    {
        method: 'POST',
        url: '/api/persons',
        handler: personController.addPerson
            // schema: documentation.addCarSchema
    },
    {
        method: 'PUT',
        url: '/api/persons/:id',
        handler: personController.updatePerson
    },
    {
        method: 'DELETE',
        url: '/api/persons/:id',
        handler: personController.deletePerson
    },
    {
        method: 'GET',
        url: '/api/movies',
        handler: movieController.getMovies
    },
    {
        method: 'GET',
        url: '/api/movies/:id',
        handler: movieController.getSingleMovie
    },
    {
        method: 'POST',
        url: '/api/movies',
        handler: movieController.addMovie
            // schema: documentation.addCarSchema
    },
    {
        method: 'PUT',
        url: '/api/movies/:id',
        handler: movieController.updateMovie
    },
    {
        method: 'DELETE',
        url: '/api/movies/:id',
        handler: movieController.deleteMovie
    }
]

module.exports = routes