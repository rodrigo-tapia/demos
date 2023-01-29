/* eslint-disable @typescript-eslint/promise-function-async */
import { IAddAccount, IAddAccountVehicle } from '../../domain/useCase/add-account'
import vehicleService from '../../services/vehicleService'

export class DBAddAccount implements IAddAccount {
  async add (vehicle: IAddAccountVehicle): Promise<IAddAccountVehicle> {
    const vehicleDb: any = vehicleService.create(vehicle)
    return await new Promise(resolve => {
      resolve(
        vehicleDb
      )
    })
  }
}
