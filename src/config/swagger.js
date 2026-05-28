exports.options = {
  routePrefix: '/documentation',
  openapi: {
    info: {
      title: 'Fastify API',
      description: 'Building a blazing fast REST API with Node.js, MongoDB, Fastify and Swagger',
      version: '2.0.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    servers: [
      { url: 'http://localhost:3000', description: 'Development server' }
    ],
    tags: [
      { name: 'cars', description: 'Car related end-points' }
    ]
  }
}

exports.swaggerUiOptions = {
  routePrefix: '/documentation'
}
