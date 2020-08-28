/**
 * Convert roman number to integer
 * @param {string} s Given a roman numeral, convert it to an integer. Input is guaranteed to be wi thin the range from 1 to 3999
 * @return {number} converted integer
 */
export var romanToInt = function (s) {
  const romanNumberList = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
  const romanNumberValueList = [1, 5, 10, 50, 100, 500, 1000]
  let integerValue = 0
  for (let index = 0; index < s.length; index++) {
    const currentRomanNumberCharacter = s[index]
    let nextRomanNumberCharacter = ''
    if (index + 1 < s.length) {
      nextRomanNumberCharacter = s[index + 1]
    }
    let currentRomanNumberListIndex = 0
    romanNumberList.find((value, index1) => {
      currentRomanNumberListIndex = index1
      return value === currentRomanNumberCharacter
    })
    let nextRomanNumberListIndex = 0
    if (nextRomanNumberCharacter) {
      romanNumberList.find((value, index1) => {
        nextRomanNumberListIndex = index1
        return value === nextRomanNumberCharacter
      })
    }
    if (nextRomanNumberCharacter) {
      if (currentRomanNumberListIndex >= nextRomanNumberListIndex) {
        integerValue += romanNumberValueList[currentRomanNumberListIndex]
      } else if (currentRomanNumberListIndex < nextRomanNumberListIndex) {
        integerValue -= romanNumberValueList[currentRomanNumberListIndex]
      }
    } else {
      integerValue += romanNumberValueList[currentRomanNumberListIndex]
    }
  }
  return integerValue
}
