import { describe, test, expect } from '@jest/globals'
import { getDecimalValue, ListNode } from '../index'

describe('Unit tests for LeetCode [1290] Convert Binary Number in a Linked List to Integer', () => {
  test('Case 1', () => {
    const linkedList = new ListNode(1, new ListNode(1, new ListNode(0, new ListNode(1))))
    const decimalValue = getDecimalValue(linkedList)
    expect(decimalValue).toBe(13)
  })

  test('Case 2', () => {
    const linkedList = new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(1))))
    const decimalValue = getDecimalValue(linkedList)
    expect(decimalValue).toBe(9)
  })
})
