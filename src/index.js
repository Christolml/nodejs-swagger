const fastify = require('fastify')({ logger: true })
const mongoose = require('mongoose')
const routes = require('./routes')
const swagger = require('./config/swagger')
const cors = require('@fastify/cors')

// Register CORS
fastify.register(cors, {})

// Register Swagger
fastify.register(require('@fastify/swagger'), swagger.options)

// Register Swagger UI
fastify.register(require('@fastify/swagger-ui'), swagger.swaggerUiOptions)

// Connect to DB
mongoose.connect('mongodb://localhost/mycargarage')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

// Register all routes
routes.forEach(route => {
  fastify.route(route)
})

// Declare a root route
fastify.get('/', async (request, reply) => {
  return { hello: 'mundo' }
})

// Run the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' })
    fastify.log.info(`Server listening on port 3000`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
