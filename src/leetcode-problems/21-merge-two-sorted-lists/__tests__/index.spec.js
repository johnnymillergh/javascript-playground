import { describe, test, expect } from '@jest/globals'
import { ListNode, mergeTwoLists } from '../index'

describe('Unit tests for LeetCode [21]Merge Two Sorted Lists', () => {
  test('Case 1', () => {
    // l1: [1,2,4]
    // l2: [1,3,4]
    const l1 = new ListNode(1, new ListNode(2, new ListNode(4)))
    const l2 = new ListNode(1, new ListNode(3, new ListNode(4)))
    const solution = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))))
    const mergedSortedList = mergeTwoLists(l1, l2)
    expect(mergedSortedList).toEqual(solution)
  })

  test('Case 2', () => {
    // l1: []
    // l2: []
    const l1 = new ListNode()
    const l2 = new ListNode()
    const solution = new ListNode(0, new ListNode())
    const mergedSortedList = mergeTwoLists(l1, l2)
    expect(mergedSortedList).toEqual(solution)
  })
})
