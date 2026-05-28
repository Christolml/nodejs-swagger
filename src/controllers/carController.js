const Car = require('../models/Car')

// Get all cars
exports.getCars = async (req, reply) => {
  try {
    const cars = await Car.find()
    return cars
  } catch (err) {
    reply.code(500).send({ error: err.message })
  }
}

// Get single car by ID
exports.getSingleCar = async (req, reply) => {
  try {
    const id = req.params.id
    const car = await Car.findById(id)
    if (!car) {
      return reply.code(404).send({ error: 'Car not found' })
    }
    return car
  } catch (err) {
    reply.code(500).send({ error: err.message })
  }
}

// Add a new car
exports.addCar = async (req, reply) => {
  try {
    const car = new Car(req.body)
    const saved = await car.save()
    reply.code(201).send(saved)
  } catch (err) {
    reply.code(500).send({ error: err.message })
  }
}

// Update an existing car
exports.updateCar = async (req, reply) => {
  try {
    const id = req.params.id
    const update = await Car.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    if (!update) {
      return reply.code(404).send({ error: 'Car not found' })
    }
    return update
  } catch (err) {
    reply.code(500).send({ error: err.message })
  }
}

// Delete a car
exports.deleteCar = async (req, reply) => {
  try {
    const id = req.params.id
    const car = await Car.findByIdAndDelete(id)
    if (!car) {
      return reply.code(404).send({ error: 'Car not found' })
    }
    return { message: 'Car deleted successfully', car }
  } catch (err) {
    reply.code(500).send({ error: err.message })
  }
}
