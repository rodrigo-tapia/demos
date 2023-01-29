import { VehicleModel } from '../domain/models/vehicle-model'
import vehicleRepository from '../domain/repositories/vehicleRepository'

export class VehicleService {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async create (vehicle: VehicleModel) {
    // eslint-disable-next-line @typescript-eslint/return-await
    return vehicleRepository.create(vehicle)
  }
}

export default new VehicleService()
