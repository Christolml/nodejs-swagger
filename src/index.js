// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
})
const mongoose = require('mongoose')
const routes = require('./routes')
const swagger = require('./config/swagger')
const cors = require('cors')

fastify.use(cors())

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)


// Connect to DB
mongoose.connect('mongodb://localhost/mycargarage')
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err))

// Loop over each route
routes.forEach((route, index) => {
    fastify.route(route)
})

// Declare a route
fastify.get('/', async (request, reply) => {
    return {hello: 'mundo'}
})



// Run the server
const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.swagger()
        fastify.log.info(`Server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()



