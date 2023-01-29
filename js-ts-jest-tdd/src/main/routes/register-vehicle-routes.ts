/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { AdapterRoute } from '../adapters/express-adapter'
import { makeRegisterVehicleController } from '../factories/vehicle'

export default (router: Router): void => {
  router.post('/register-vehicle', AdapterRoute(makeRegisterVehicleController()))
}
