import { RegisterVehicle } from '../../controllers/register-vehicle/register-vehicle'
import { DBAddAccount } from '../../data/useCases/db-add-ccount'
import { MailNodemailerProvider } from '../../utils-adapters/node-mailer'

export const makeRegisterVehicleController = (): RegisterVehicle => {
  const mailNodemailerProvider = new MailNodemailerProvider()
  const dBAddAccount = new DBAddAccount(mailNodemailerProvider)
  const registerVehicle = new RegisterVehicle(dBAddAccount)
  return registerVehicle
}
