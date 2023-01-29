import { RegisterVehicle } from './register-vehicle'
import { MissingParameterError } from '../../errors/client-error'

describe('RegisterVehicle', () => {
  test('is the name does not exist return 400', async () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        model: 'DXT',
        year: 2020,
        color: 'color'
        // name: 'Nissan',
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect((await httpResponse).statusCode).toBe(400)
    expect((await httpResponse).body).toEqual(new MissingParameterError('name'))
  })

  test('is the model does not exist return 400', async () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Nissan',
        year: 2020,
        color: 'color'
        // model: 'DXT',
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect((await httpResponse).statusCode).toBe(400)
    expect((await httpResponse).body).toEqual(new MissingParameterError('model'))
  })

  test('is the year does not exist return 400', async () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'DXT',
        color: 'color'
        // year: 2020
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect((await httpResponse).statusCode).toBe(400)
    expect((await httpResponse).body).toEqual(new MissingParameterError('year'))
  })

  test('is the color does not exist return 400', async () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'DXT',
        year: 2020
        // color: 'color'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect((await httpResponse).statusCode).toBe(400)
    expect((await httpResponse).body).toEqual(new MissingParameterError('color'))
  })

  test('is all right return 200', async () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'DXT',
        year: 2020,
        color: 'color'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect((await httpResponse).statusCode).toBe(200)
  })
})
