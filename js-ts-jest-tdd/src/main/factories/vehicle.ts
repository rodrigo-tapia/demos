import { RegisterVehicle } from '../../controllers/register-vehicle/register-vehicle'
import { DBAddAccount } from '../../data/useCases/db-add-ccount'

export const makeRegisterVehicleController = (): RegisterVehicle => {
  const dBAddAccount = new DBAddAccount()
  const registerVehicle = new RegisterVehicle(dBAddAccount)
  return registerVehicle
}
