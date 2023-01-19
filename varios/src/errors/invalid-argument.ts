export class InvalidArgument extends Error {
  constructor (public argument: string) {
    super(`Invalid Argument ${argument}`)
  }
}
