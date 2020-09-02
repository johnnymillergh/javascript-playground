/**
 * Find longest common prefix
 *
 * Note:
 * All given inputs are in lowercase letters a-z.
 * Related Topics String
 * @param {string[]} strs lowercase letters a-z
 * @return {string} longest common prefix
 * @author Johnny Miller (锺俊), e-mail: johnnysviva@outlook.com
 * @date 8/28/20 3:01 PM
 * @see https://leetcode.com/problems/longest-common-prefix Longest Common Prefix
 */
export const longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return ''
  }
  let longestLength = 0
  strs.forEach(value => {
    if (value.length >= longestLength) {
      longestLength = value.length
    }
  })
  let longestCommonPrefix = ''
  let hasNextCharacter = true
  const common = new Set()
  for (let col = 0; hasNextCharacter; col++) {
    if (col && !longestCommonPrefix) {
      return longestCommonPrefix
    }
    common.clear()
    for (let row = 0; row < strs.length; row++) {
      if (col === strs[row].length) {
        hasNextCharacter = false
        break
      }
      common.add(strs[row][col])
    }
    if (!hasNextCharacter) {
      break
    }
    if (common.size === 1) {
      common.forEach(value => {
        longestCommonPrefix += value
      })
    }
  }
  return longestCommonPrefix
}
