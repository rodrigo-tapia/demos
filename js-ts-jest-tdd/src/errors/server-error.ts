export class ServerError extends Error {
  constructor (stack: string) {
    super('error internal the server')
    this.name = 'error internal the server'
    this.stack = stack
  }
}
