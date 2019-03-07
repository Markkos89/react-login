// Import our Controllers
const carController = require('../controllers/carController')
const userController = require('../controllers/userController')
const roleController = require('../controllers/roleController')
    // Import Swagger documentation
    // const documentation = require('./documentation/carApi')

const routes = [{
        method: 'GET',
        url: '/api/cars',
        handler: carController.getCars
    },
    {
        method: 'GET',
        url: '/api/cars/:id',
        handler: carController.getSingleCar
    },
    {
        method: 'POST',
        url: '/api/cars',
        handler: carController.addCar
            // schema: documentation.addCarSchema
    },
    {
        method: 'PUT',
        url: '/api/cars/:id',
        handler: carController.updateCar
    },
    {
        method: 'DELETE',
        url: '/api/cars/:id',
        handler: carController.deleteCar
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
        handler: userController.getUser
            // schema: documentation.addUserSchema
    },
    {
        method: 'POST',
        url: '/api/roles',
        handler: roleController.addRole
            // schema: documentation.addRoleSchema
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
    }
]

module.exports = routes