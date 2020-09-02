import { describe, test, expect } from '@jest/globals'
import { wrongThreeSum, threeSum } from '../index'

const nums = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]
const correctResult = [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]]

describe('Unit tests for LeetCode [15] 3 Sum', () => {
  test('Case 1', () => {
    const wrongThreeSumResult = wrongThreeSum(nums)
    expect(wrongThreeSumResult).not.toEqual(correctResult)
  })

  test('Case 2', () => {
    const threeSumResult = threeSum(nums)
    expect(threeSumResult).toEqual(correctResult)
  })
})
