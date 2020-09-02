import { describe, test, expect } from '@jest/globals'
import { isPalindrome } from '../index'

describe('Unit tests for LeetCode [9] Palindrome Number', () => {
  test('Case 1', () => {
    const palindrome = isPalindrome(1221)
    expect(palindrome).toBeTruthy()
  })

  test('Case 2', () => {
    const palindrome = isPalindrome(-1221)
    expect(palindrome).toBeFalsy()
  })

  test('Case 3', () => {
    const palindrome = isPalindrome(1223421)
    expect(palindrome).toBeFalsy()
  })
})
