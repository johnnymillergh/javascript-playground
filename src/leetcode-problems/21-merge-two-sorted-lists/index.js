/**
 * Definition for singly-linked list.
 * @param val value
 * @param next next node
 * @constructor
 */
export function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together
 * the nodes of the first two lists.
 * @param {ListNode} l1 sorted linked list 1
 * @param {ListNode} l2 sorted linked list 2
 * @return {ListNode} merged sorted linked list
 * @author Johnny Miller (锺俊), e-mail: johnnysviva@outlook.com
 * @date 9/2/20 2:09 PM
 * @see https://leetcode.com/problems/merge-two-sorted-lists Merge Two Sorted Lists
 */
export const mergeTwoLists = (l1, l2) => {
  if (!l1 || !l2) {
    return l1 || l2
  }
  if (l1.val < l2.val) {
    // noinspection JSValidateTypes
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }
  // noinspection JSValidateTypes
  l2.next = mergeTwoLists(l1, l2.next)
  return l2
}
