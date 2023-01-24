import { VehicleHelper } from '../helpers/vehicle-model-helper'
import { VehicleModel } from '../models/vehicle-model'

describe('Classes', () => {
  it('Class VehicleModel', () => {
    const vehicleModel = new VehicleModel({
      name: 'Nissan',
      model: 'DXT',
      year: 2020,
      price: 1000,
      inventory: true
    })
    expect(vehicleModel.getName()).toEqual('Nissan')
    expect(vehicleModel.getModel()).toEqual('DXT')
    expect(vehicleModel.getYear()).toBe(2020)
    expect(vehicleModel.getPrice()).toBe(1000)
    expect(vehicleModel.getInventory()).toBe(true)
  })
  it('VehicleModelHelper', () => {
    const helper = new VehicleHelper()
    expect(helper).toEqual(new VehicleHelper())
  })
})
