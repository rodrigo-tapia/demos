export class Pen {
  constructor (public message: string) {
  }

  write (): string {
    return this.message
  }
}
