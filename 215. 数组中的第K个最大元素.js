/**
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

   示例 1:
 
   输入: [3,2,1,5,6,4] 和 k = 2
   输出: 5
   示例 2:
 
   输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
   输出: 4
   说明:
 
   你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  var max = Math.max(...nums)
  var min = Math.min(...nums)

  var buckets = new Array(max - min + 1).fill(0)

  nums.forEach(num => buckets[num - min]++)

  var count = 0
  for (var i = buckets.length - 1; i >= 0; i--) {
    count += buckets[i]
    if (count >= k) return min + i
  }
  return -1
};