import { MissingParameterError } from '../errors/client-error'
import { HttpRequest, HttpResponse } from '../interfaces/http-interface'

export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredProperties = ['name', 'model', 'year', 'color']
    for (const props of requiredProperties) {
      if (!httpRequest.body[props]) {
        return {
          statusCode: 400,
          body: new MissingParameterError(props)
        }
      }
    }
    return {
      statusCode: 200,
      body: {}
    }
  }
}
