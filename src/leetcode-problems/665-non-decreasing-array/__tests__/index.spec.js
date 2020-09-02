import { describe, test, expect } from '@jest/globals'
import { checkPossibility } from '../index'

describe('Unit tests for LeetCode [665] Non-decreasing Array', () => {
  test('Case 1', () => {
    const possibility = checkPossibility([4, 2, 3])
    expect(possibility).toBeTruthy()
  })

  test('Case 2', () => {
    const possibility = checkPossibility([3, 4, 2, 3])
    expect(possibility).toBeFalsy()
  })

  test('Case 3', () => {
    const possibility = checkPossibility([2, 3, 3, 2, 2])
    expect(possibility).toBeFalsy()
  })

  test('Case 4', () => {
    const possibility = checkPossibility([1, 2, 3])
    expect(possibility).toBeTruthy()
  })
})
