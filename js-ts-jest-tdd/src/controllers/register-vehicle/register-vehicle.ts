import { MissingParameterError } from '../../errors/client-error'
import { serverError, success } from '../../helpers/http-helper'
import { IController } from '../../interfaces/controller'
import { HttpRequest, HttpResponse } from '../../interfaces/http-interface'

export class RegisterVehicle implements IController {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredProperties = ['name', 'model', 'year', 'color']
      for (const props of requiredProperties) {
        if (!httpRequest.body[props]) {
          return {
            statusCode: 400,
            body: new MissingParameterError(props)
          }
        }
      }
      const data = httpRequest.body
      return success(data)
    } catch (error) {
      return serverError(error)
    }
  }
}
