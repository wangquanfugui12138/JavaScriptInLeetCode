/**
 * 给定整数 n 和 k，找到 1 到 n 中字典序第 k 小的数字。

   注意：1 ≤ k ≤ n ≤ 109。

   示例 :

   输入:
   n: 13   k: 2

   输出:
   10

   解释:
   字典序的排列是 [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]，所以第二小的数字是 10。

 */

/**
* @param {number} n
* @param {number} k
* @return {number}
*/
var findKthNumber = function (n, k) {
  let index = 1, prefix = 1

  while (index < k) {
    const count = getCount(prefix, n)
    const tmp = index + count
    if (tmp > k) {
      prefix *= 10
      index++
    } else {
      prefix++
      index += count
    }

  }

  return prefix
};

const getCount = function (prefix = 1, n) {
  let cur = prefix, next = prefix + 1, count = 0

  while (cur <= n) {
    count += Math.min(next, n + 1) - cur

    cur *= 10
    next *= 10
  }
  return count
}