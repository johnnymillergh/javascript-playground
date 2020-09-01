/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const wrongThreeSum = (nums) => {
  const threeSums = []
  nums.forEach((value, index, array) => {
    const twoSumTarget = 0 - value
    const twoSumResult = twoSum(array, index, twoSumTarget)
    // The commented below could also all 'value' in the beginning of 'twoSumResult' array
    // twoSumResult.unshift([value])
    const threeSumTarget = [value, ...twoSumResult]
    const duplicated = checkDuplicate(threeSums, threeSumTarget)
    if (!duplicated && threeSumTarget.length === 3) {
      threeSums.push(threeSumTarget)
    }
  })
  return threeSums
}

/**
 * @param {number[]} nums
 * @param {number} ignoreIndex
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, ignoreIndex, target) => {
  const resultIndices = []
  for (let i = 0; i < nums.length; i++) {
    if (i === ignoreIndex) {
      continue
    }
    const firstCandidate = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      if (j === ignoreIndex) {
        continue
      }
      const secondCandidate = nums[j]
      if (firstCandidate + secondCandidate === target) {
        resultIndices[0] = i
        resultIndices[1] = j
      }
    }
  }
  if (nums[resultIndices[0]] === undefined || nums[resultIndices[1]] === undefined) {
    return []
  }
  return [nums[resultIndices[0]], nums[resultIndices[1]]]
}

/**
 * @param {number[][]} threeSums
 * @param {number[]} target
 * @return {boolean}
 */
const checkDuplicate = (threeSums, target) => {
  for (let index = 0; index < threeSums.length; index++) {
    const threeSumSet = new Set(threeSums[index])
    const targetSet = new Set(target)
    const compareSet = new Set([...threeSums[index], ...target])
    if (compareSet.size === threeSumSet.size && compareSet.size === targetSet.size) {
      return true
    }
  }
  return false
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const threeSum = (nums) => {
  nums.sort((a, b) => a - b)
  const solution = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let low = i + 1
      let high = nums.length - 1
      const sum = 0 - nums[i]
      while (low < high) {
        if (nums[low] + nums[high] === sum) {
          solution.push([nums[i], nums[low], nums[high]])
          while (low < high && nums[low] === nums[low + 1]) {
            low++
          }
          while (low < high && nums[high] === nums[high - 1]) {
            high--
          }
          low++
          high--
        } else if (nums[low] + nums[high] > sum) {
          high--
        } else {
          low++
        }
      }
    }
  }
  return solution
}
