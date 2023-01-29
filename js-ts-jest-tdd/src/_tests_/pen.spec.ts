import { Pen } from '../demos/domain/models/pen'

describe('Pen', () => {
  test('write', () => {
    const pen = new Pen('Hi')
    expect(pen.write()).toBe('Hi')
  })
})
