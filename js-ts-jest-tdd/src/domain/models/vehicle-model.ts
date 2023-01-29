import mongoose from 'mongoose'

const vehicleSchema = new mongoose.Schema({
  name: { type: String },
  model: { type: String },
  year: { type: String },
  color: { type: String }
})

export default vehicleSchema

export class VehicleModel {
  name: string
  model: string
  year: string
  color: string
}
