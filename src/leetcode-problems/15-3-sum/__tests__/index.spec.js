import { describe, test, expect } from '@jest/globals'
import { wrongThreeSum } from '../index'

describe('Unit tests for LeetCode [15] 3 Sum', () => {
  test('Case 1', () => {
    const wrongThreeSumResult = wrongThreeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6])
    console.info('wrongThreeSumResult', wrongThreeSumResult)
    const correctResult = [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]]
    expect(wrongThreeSumResult.length).not.toBe(correctResult.length)
  })
})
