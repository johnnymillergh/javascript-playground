/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is
 * valid.
 *
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * @param {string} s s consists of parentheses only '()[]{}'. 1 <= s.length <= 104
 * @return {boolean} true - is valid parentheses; false - vice versa
 * @author Johnny Miller (锺俊), e-mail: johnnysviva@outlook.com
 * @date 9/2/20 1:43 PM
 * @see https://leetcode.com/problems/valid-parentheses/ Valid Parentheses
 */
export const isValid = (s) => {
  const parenthesesStack = []
  const parenthesesMap = new Map()
  parenthesesMap.set(')', '(')
  parenthesesMap.set('}', '{')
  parenthesesMap.set(']', '[')
  for (let i = 0; i < s.length; i++) {
    if (!parenthesesMap.has(s[i])) {
      parenthesesStack.push(s[i])
      continue
    }
    if (parenthesesMap.get(s[i]) === parenthesesStack[parenthesesStack.length - 1]) {
      parenthesesStack.pop()
    } else {
      return false
    }
  }
  return parenthesesStack.length === 0
}
