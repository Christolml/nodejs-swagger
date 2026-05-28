exports.addCarSchema = {
  description: 'Create a new car',
  tags: ['cars'],
  summary: 'Creates new car with given values',
  body: {
    type: 'object',
    required: ['title', 'brand'],
    properties: {
      title: { type: 'string', description: 'Car title' },
      brand: { type: 'string', description: 'Car brand' },
      price: { type: 'string', description: 'Car price' },
      age: { type: 'number', description: 'Car age in years' },
      services: { type: 'object', description: 'Services map' }
    }
  },
  response: {
    201: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        title: { type: 'string' },
        brand: { type: 'string' },
        price: { type: 'string' },
        age: { type: 'number' },
        services: { type: 'object' },
        __v: { type: 'number' }
      }
    }
  }
}
