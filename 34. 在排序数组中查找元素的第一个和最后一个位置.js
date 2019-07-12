/**
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

   你的算法时间复杂度必须是 O(log n) 级别。

   如果数组中不存在目标值，返回 [-1, -1]。

   示例 1:

   输入: nums = [5,7,7,8,8,10], target = 8
   输出: [3,4]
   示例 2:

   输入: nums = [5,7,7,8,8,10], target = 6
   输出: [-1,-1]
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var searchRange = function (nums, target) {
  return [searchLeft(nums, target), searchRight(nums, target)]
};
//二分查找最左侧的索引
function searchLeft (nums, target) {
  if (nums.length == 0) return -1
  var low = 0
  var high = nums.length

  while (low < high) {
    var mid = Math.floor(low + (high - low) / 2)

    if (nums[mid] === target) {
      high = mid
    } else if (nums[mid] > target) {
      high = mid
    } else if (nums[mid] < target) {
      low = mid + 1
    }
  }
  // target 比所有数都大
  if (low === nums.length) return -1
  //target 比所有都小
  if (nums[low] !== target) return -1

  return low
}
//二分查找最右侧的索引
function searchRight (nums, target) {
  if (nums.length == 0) return -1
  var low = 0
  var high = nums.length

  while (low < high) {
    var mid = Math.floor(low + (high - low) / 2)

    if (nums[mid] === target) {
      low = mid + 1
    } else if (nums[mid] > target) {
      high = mid
    } else if (nums[mid] < target) {
      low = mid + 1
    }
  }

  if (nums[high - 1] !== target) return -1

  return high - 1
}