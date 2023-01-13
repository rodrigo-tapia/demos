import { foodHelper } from '../helpers/food-model-helper'

export class Food {
  constructor (private readonly food: foodHelper) {
  }

  getName (): string {
    return this.food.name
  }

  getDescription (): string {
    return this.food.description
  }

  getPrice (): number {
    return this.food.price
  }
}
