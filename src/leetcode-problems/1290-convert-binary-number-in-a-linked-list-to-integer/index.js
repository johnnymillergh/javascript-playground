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
 * Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0
 * or 1. The linked list holds the binary representation of a number. Return the decimal value of the number in the
 * linked list.
 *
 * Constraints:
 * The Linked List is not empty.
 * Number of nodes will not exceed 30.
 * Each node's value is either 0 or 1.
 * Related Topics Linked List Bit Manipulation
 * @param {ListNode} head
 * @return {number}
 * @author Johnny Miller (锺俊), e-mail: johnnysviva@outlook.com
 * @date 9/3/20 10:07 AM
 * @see https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/ LeetCode question
 */
export const getDecimalValue = (head) => {
  const binaryString = getBinaryString(head)
  let decimalValue = 0
  for (let i = binaryString.length - 1; i >= 0; i--) {
    decimalValue += Math.pow(2, binaryString.length - 1 - i) * (+binaryString[i])
  }
  return decimalValue
}

/**
 * Get binary string
 * @param {ListNode} head
 * @return {string}
 */
const getBinaryString = (head) => {
  let binaryString = ''
  let pointer = head
  while (pointer) {
    binaryString += `${pointer.val}`
    pointer = pointer.next
  }
  return binaryString
}
