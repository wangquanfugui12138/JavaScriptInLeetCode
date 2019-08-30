/**
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

   注意：答案中不可以包含重复的三元组。

   例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

   满足要求的三元组集合为：
   [
     [-1, 0, 1],
     [-1, -1, 2]
   ]

 */

/**
* @param {number[]} nums
* @return {number[][]}
*/
var threeSum = function (nums) {
  let n = nums.length;

  nums.sort((a, b) => a - b)
  let res = []

  // 和为0的特性是，除了0一定有正负，所以排序后遍历到0即可，
  // 双指针，从当前值的右边一位left，和最右边right，正数的最大值来求和,
  // 如果和小于0，说明负数多了，left右移，如果和大于0，说明正数大了，right左移
  for (let i = 0; nums[i] <= 0; i++) {
    let left = i + 1;
    let right = n - 1;
    if (nums[right] < 0) return []
    if (i == 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      while (left < right) {
        let sum = nums[i] + nums[left] + nums[right]
        if (sum == 0) {
          res.push([nums[i], nums[left], nums[right]])
          // 需要判断你加减后的数据是否相同
          let curleft = nums[left]
          let curright = nums[right]
          while (nums[left + 1] == curleft) left++;
          while (nums[right - 1] == curright) right--;
          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else if (sum > 0) {
          right--;
        }
      }
    }
  }
  return res
}

/**
* @param {number[]} nums
* @return {number[][]}
*/
var threeSum = function (nums) {
  let res = []
  let length = nums.length;
  nums.sort((a, b) => a - b) // 先排个队，最左边是最弱（小）的，最右边是最强(大)的
  if (nums[0] <= 0 && nums[length - 1] >= 0) { // 优化1: 整个数组同符号，则无解
    for (let i = 0; i < length - 2;) {
      if (nums[i] > 0) break; // 优化2: 最左值为正数则一定无解
      let first = i + 1
      let last = length - 1
      do {
        if (first >= last || nums[i] * nums[last] > 0) break // 两人选相遇，或者三人同符号，则退出
        let result = nums[i] + nums[first] + nums[last]
        if (result === 0) { // 如果可以组队
          res.push([nums[i], nums[first], nums[last]])
        }
        if (result <= 0) { // 实力太弱，把菜鸟那边右移一位
          while (first < last && nums[first] === nums[++first]) { } // 如果相等就跳过
        } else { // 实力太强，把大神那边右移一位
          while (first < last && nums[last] === nums[--last]) { }
        }
      } while (first < last)
      while (nums[i] === nums[++i]) { }
    }
  }
  return res
}
