import { describe, test, expect } from '@jest/globals'
import { longestCommonPrefix } from '../index'

describe('Unit tests for LeetCode [14] Longest common prefix', () => {
  test('Case 1', () => {
    const strs = ['flow', 'flower', 'flight']
    const result = longestCommonPrefix(strs)
    console.info(`longestCommonPrefix for ${strs}:`, result)
    expect(result).toEqual('fl')
  })

  test('Case 2', () => {
    const strs = ['disinfectant', 'discuss', 'disaffection']
    const result = longestCommonPrefix(strs)
    console.info(`longestCommonPrefix for ${strs}:`, result)
    expect(result).toEqual('dis')
  })

  test('Case 3', () => {
    const strs = ['prefix', 'preference', 'prefab']
    const result = longestCommonPrefix(strs)
    console.info(`longestCommonPrefix for ${strs}:`, result)
    expect(result).toEqual('pref')
  })

  test('Case 4', () => {
    const strs = ['', 'preference', 'prefab']
    const result = longestCommonPrefix(strs)
    console.info(`longestCommonPrefix for ${strs}:`, result)
    expect(result).toEqual('')
  })
})
