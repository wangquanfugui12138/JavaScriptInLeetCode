/**
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。

   示例:
 
   输入: [1,2,3]
   输出:
   [
     [1,2,3],
     [1,3,2],
     [2,1,3],
     [2,3,1],
     [3,1,2],
     [3,2,1]
   ]
 
 */

/**
 * 滑动窗口解法
 * @param {number[]} nums
 * @param {number[]} res
 * @param {number[]} tmp
 * @return {number[][]}
 */
var permute = function (nums, res = [], tmp = []) {
  if (!nums.length) res.push([...tmp])

  for (var i = 0; i < nums.length; i++) {
    permute([...nums.slice(0, i), ...nums.slice(i + 1)], res, [...tmp, nums[i]])
  }

  return res
};