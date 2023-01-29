/* eslint-disable @typescript-eslint/promise-function-async */
import { IAddAccount, IAddAccountVehicle } from '../../domain/useCase/add-account'
import vehicleService from '../../services/vehicleService'
import { MailNodemailerProvider } from '../../utils-adapters/node-mailer'

export class DBAddAccount implements IAddAccount {
  constructor (private readonly mailNodemailerProvider: MailNodemailerProvider) {
    this.mailNodemailerProvider = mailNodemailerProvider
  }

  async add (vehicle: IAddAccountVehicle): Promise<IAddAccountVehicle> {
    const vehicleDb: any = vehicleService.create(vehicle)
    await this.mailNodemailerProvider.sendEmail({
      to: {
        name: vehicle.name,
        email: vehicle.email
      },
      from: {
        name: vehicle.name,
        email: vehicle.email
      },
      subject: 'Yo have a new registration',
      body: '<p>welcome longi</p>'
    })
    return await new Promise(resolve => {
      resolve(
        vehicleDb
      )
    })
  }
}
