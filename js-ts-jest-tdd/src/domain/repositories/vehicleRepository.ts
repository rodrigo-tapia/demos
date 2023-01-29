import mongoose from 'mongoose'
import vehicleSchema from '../models/vehicle-model'

export default mongoose.model('vehicle', vehicleSchema)
