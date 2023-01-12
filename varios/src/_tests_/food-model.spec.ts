import { Food } from '../models/food-model'

describe('Food', () => {
  it('Food Model Constructor', () => {
    const food = new Food('pizza', 'double cheese', 10)
    expect(food.getName()).toEqual('pizza')
    expect(food.getDescription()).toEqual('double cheese')
    expect(food.getPrice()).toBe(10)
  })
})
