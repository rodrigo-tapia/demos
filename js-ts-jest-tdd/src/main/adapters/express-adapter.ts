import { Request, Response } from 'express'
import { IController } from '../../interfaces/controller'
import { HttpRequest } from '../../interfaces/http-interface'

export const AdapterRoute = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
