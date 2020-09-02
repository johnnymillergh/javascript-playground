import { describe, test, expect } from '@jest/globals'
import { isValid } from '../index'

describe('Unit tests for LeetCode [20] Valid Parentheses', () => {
  test('Case 1', () => {
    const valid = isValid('()')
    expect(valid).toBeTruthy()
  })

  test('Case 2', () => {
    const valid = isValid('(({})){}[]')
    expect(valid).toBeTruthy()
  })

  test('Case 3', () => {
    const valid = isValid('(]')
    expect(valid).toBeFalsy()
  })
})
