export class MissingParameterError extends Error {
  constructor (public missingParameterName: string) {
    super(`Required parameter ${missingParameterName} is missing`)
  }
}
