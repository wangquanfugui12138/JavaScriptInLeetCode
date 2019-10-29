/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

    示例 1:

    输入: [1,2,3,4,5,6,7] 和 k = 3
    输出: [5,6,7,1,2,3,4]
    解释:
    向右旋转 1 步: [7,1,2,3,4,5,6]
    向右旋转 2 步: [6,7,1,2,3,4,5]
    向右旋转 3 步: [5,6,7,1,2,3,4]
    示例 2:

    输入: [-1,-100,3,99] 和 k = 2
    输出: [3,99,-1,-100]
    解释: 
    向右旋转 1 步: [99,-1,-100,3]
    向右旋转 2 步: [3,99,-1,-100]
    说明:

    尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
    要求使用空间复杂度为 O(1) 的 原地 算法。
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    nums.splice(0,0,...nums.splice(nums.length-k,k))
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let prev,temp
    for(let i = 0; i < k; i++){
        prev = nums[nums.length-1]
        for(let j = 0; j < nums.length; j++){
            temp = nums[j]
            nums[j] = prev
            prev = temp
        }
    }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length //实际偏移k位（k值大于nums长度）

    reverse(nums,0,nums.length-1)
    reverse(nums,0,k-1)
    reverse(nums,k,nums.length-1)
};
var reverse = function(arr,start,end){
    let temp
    while(start<=end){
       temp = arr[start]
       arr[start] = arr[end]
       arr[end] = temp
       start++
       end-- 
    }
}