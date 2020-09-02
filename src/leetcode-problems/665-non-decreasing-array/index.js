/**
 * <p>Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most
 * 1 element.</p>
 * <p>We define an array is non-decreasing if nums[i] &lt;= nums[i + 1] holds for every i (0-based) such that (0 &lt;=
 * i &lt;= n - 2).</p>
 * <p>Constraints:</p>
 * <ul>
 *   <li>1 &lt;= n &lt;= 10 ^ 4</li>
 *   <li>-10 ^ 5 &lt;= nums[i] &lt;= 10 ^ 5</li>
 * </ul>
 * @param {number[]} nums
 * @return {boolean} true - could modify at most 1 element to get a non-decreasing array; false - vice versa
 */
export const checkPossibility = (nums) => {
  let count = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      if (i - 2 >= 0 && nums[i] < nums[i - 2]) {
        nums[i] = nums[i - 1]
      }
      count++
    }
    if (count > 1) {
      return false
    }
  }
  return true
}
