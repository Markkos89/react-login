// Require the fastify framework and instantiate it
const fastify = require('fastify')({
    logger: true
})

// Require external modules
const mongoose = require('mongoose')

// Import Routes
const routes = require('./routes')

// Import Swagger Options
const swagger = require('./config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)
fastify.register(require('fastify-cors'), {
    origin: '*',
    allowedHeaders: ["Access-Control-Allow-Headers", "Origin", "X-Requested-With", "Content-Type", "Accept", "tokenid"]
});

// Require Compression
const compression = require('compression');

// Connect to DB
mongoose.connect('mongodb://localhost:27017/mycargarage', { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))


fastify.use(compression());
// fastify.use(function(req, reply, next) {
//     reply.header("Access-Control-Allow-Origin", "*");
//     reply.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, tokenid");
//     next();
// });

// Loop over each route
routes.forEach((route, index) => {
    fastify.route(route)
})

// Run the server!
const start = async() => {
    try {
        await fastify.listen(3000)
        fastify.swagger()
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()