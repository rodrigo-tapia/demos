import { IAddAccount } from '../../domain/useCase/add-account'
import { MissingParameterError } from '../../errors/client-error'
import { badRequestError, serverError, success } from '../../helpers/http-helper'
import { IController } from '../../interfaces/controller'
import { HttpRequest, HttpResponse } from '../../interfaces/http-interface'

export class RegisterVehicle implements IController {
  constructor (private readonly addAccount: IAddAccount) {
    this.addAccount = addAccount
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredProperties = ['name', 'model', 'year', 'color', 'email']
      for (const props of requiredProperties) {
        if (!httpRequest.body[props]) {
          return badRequestError(new MissingParameterError(props))
        }
      }
      const { name, model, year, color, email } = httpRequest.body
      const vehicle = await this.addAccount.add({ name, model, year, color, email })
      return success(vehicle)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
