import { describe, test, expect } from '@jest/globals'
import { romanToInt } from '../index'

describe('Unit tests for LeetCode [13] Roman to Integer', () => {
  test('Case 1', () => {
    const number = romanToInt('VIII')
    expect(number).toEqual(8)
  })

  test('Case 2', () => {
    const number = romanToInt('XII')
    expect(number).toEqual(12)
  })

  test('Case 3', () => {
    const number = romanToInt('MMMCMLXXIV')
    expect(number).toEqual(3974)
  })
})
