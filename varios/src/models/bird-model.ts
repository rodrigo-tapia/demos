import { IBird } from '../interfaces/IBird'

export class Bird {
  constructor (public bird: IBird) {
    Object.assign(this, bird)
  }

  fly (): string {
    return this.bird.name
  }
}

export class Eagle extends Bird {
  constructor (public eagle: IBird) {
    super(eagle)
  }

  fly (): string {
    return this.bird.name
  }
}

export class Penguin extends Bird {
  constructor (public penguin: IBird) {
    super(penguin)
  }

  fly (): any {
    return new Error('Can not fly')
  }

  walk (): string {
    return 'Can walk'
  }
}
