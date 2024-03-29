/**
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

   示例 1:

   输入: nums = [1,1,1,2,2,3], k = 2
   输出: [1,2]
   示例 2:

   输入: nums = [1], k = 1
   输出: [1]
   说明：

   你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
   你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。

 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  var hm = {}

  nums.forEach(num => hm[num] = hm[num] ? hm[num] + 1 : 1)

  return Object.keys(hm).sort((a, b) => hm[b] - hm[a]).slice(0, k)
};