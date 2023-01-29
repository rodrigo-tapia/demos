import { Bird, Eagle, Penguin } from '../demos/domain/models/bird-model'

describe('Bird', () => {
  it('Bird fly', () => {
    const bird = new Bird({
      name: 'Bird',
      age: 5,
      origin: 'america'
    })
    expect(bird.fly()).toEqual('Bird')
  })
  it('Eagle', () => {
    const eagle = new Eagle({
      name: 'eagle',
      age: 5,
      origin: 'america'
    })
    expect(eagle.fly()).toEqual('eagle')
  })
  it('Penguin', () => {
    const penguin = new Penguin({
      name: 'penguin',
      age: 5,
      origin: 'america'
    })
    expect(penguin.fly()).toEqual(new Error('Can not fly'))
    expect(penguin.walk()).toEqual('Can walk')
  })
})
