/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

   示例:

   输入: [-2,1,-3,4,-1,2,1,-5,4],
   输出: 6
   解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

 *
 */

/**
* @param {number[]} nums
* @return {number}
*/
//动态规划
var maxSubArray = function (nums) {
  var res = nums[0] || 0
  var tmp = 0
  for (var i = 0; i < nums.length; i++) {
    tmp > 0 ? tmp += nums[i] : tmp = nums[i]
    res = Math.max(res, tmp)
  }
  return res
}