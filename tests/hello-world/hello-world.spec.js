import { describe, test, expect } from '@jest/globals'

describe('Hello Jest!', () => {
  test('Case 1', () => {
    expect('Hello'.length === 5).toBeTruthy()
  })

  test.concurrent('Case 2: addition of 2 numbers', async () => {
    expect(5 + 3).toBe(8)
  })

  test.concurrent('Case 3: subtraction 2 numbers', async () => {
    const obj = {
      id: 1,
      name: 'Johnny'
    }
    expect(obj?.id).toEqual(1)
    expect(5 - 3).toBe(2)
  })
})
