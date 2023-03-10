import { VehicleModel } from '../models/vehicle-model'

export interface IAddAccountVehicle {
  name: string
  model: string
  year: string
  color: string
  email: string
}

export interface IAddAccount {
  add: (vehicle: IAddAccountVehicle) => Promise<VehicleModel>
}
