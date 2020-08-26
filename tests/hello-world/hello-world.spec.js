import { describe, test, expect } from '@jest/globals'

describe('Hello', () => {
  test('Hello', () => {
    console.info('Hello Jest!')
    expect('Hello'.length === 5).toBeTruthy()
  })

  test.concurrent('addition of 2 numbers', async () => {
    expect(5 + 3).toBe(8)
  })

  test.concurrent('subtraction 2 numbers', async () => {
    const obj = {
      id: 1,
      name: 'Johnny'
    }
    console.info(obj?.id)
    expect(5 - 3).toBe(2)
  })
})
