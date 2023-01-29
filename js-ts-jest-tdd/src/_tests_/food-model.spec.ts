import { FoodHelper } from '../demos/helpers/food-model-helper'
import { Food } from '../demos/domain/models/food-model'

describe('Food', () => {
  it('Food Model Constructor', () => {
    const food = new Food({
      name: 'pizza',
      description: 'double cheese',
      price: 10,
      inventory: 50
    })
    expect(food.getFood()).toEqual(food)
    expect(food.getName()).toEqual('pizza')
    expect(food.getDescription()).toEqual('double cheese')
    expect(food.getPrice()).toBe(10)
    expect(food.getInventory()).toBe(50)
  })
  it('FoodHelper', () => {
    const helper = new FoodHelper()
    expect(helper).toEqual(new FoodHelper())
  })
})
