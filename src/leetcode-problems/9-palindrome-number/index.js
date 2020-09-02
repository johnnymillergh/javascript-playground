/**
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 * @param {number} x
 * @return {boolean} true - is palindrome; false - vice versa
 * @author Johnny Miller (锺俊), e-mail: johnnysviva@outlook.com
 * @date 9/2/20 12:04 PM
 * @see https://leetcode.com/problems/palindrome-number Palindrome Number
 */
export const isPalindrome = (x) => {
  if (x < 0) {
    return false
  }
  const originalNumberString = `${x}`
  const middle = Math.ceil((originalNumberString.length / 2))
  for (let i = 0; i < middle; i++) {
    if (originalNumberString[i] !== originalNumberString[originalNumberString.length - 1 - i]) {
      return false
    }
  }
  return true
}
