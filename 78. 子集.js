/**
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

   说明：解集不能包含重复的子集。

   示例:

   输入: nums = [1,2,3]
   输出:
   [
     [3],
     [1],
     [2],
     [1,2,3],
     [1,3],
     [2,3],
     [1,2],
     []
   ]

 */

/**
 * 回溯
* @param {number[]} nums
* @return {number[][]}
*/
var subsets = function (nums, index = 0, res = [[]], tmp = []) {
  for (var i = index; i < nums.length; i++) {
    var temp = [...tmp, nums[i]]
    res.push([...temp])
    subsets(nums, i + 1, res, temp)
  }
  return res
};

