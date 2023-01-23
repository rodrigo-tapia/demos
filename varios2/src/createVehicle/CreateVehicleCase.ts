import { Vehicle } from "../entities/IVehicle";
import { IVehicleRepository } from "../repositories/IVehicle";
import { CreateVehicleDTO } from "./CreateVehicleDTO";

export class CreateVehicle {
  constructor (private vehicleRepository: IVehicleRepository) {}

  async execute (createVehicle: CreateVehicleDTO) {
    const vehicleExist = await this.vehicleRepository.findById(createVehicle.id)
    if(vehicleExist) {
      throw new Error('Vehicle exists!')
    }
    const vehicle = new Vehicle(createVehicle)
    await this.vehicleRepository.save(vehicle)
  }
}