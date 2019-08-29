/**
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

   示例 1:

   输入: 121
   输出: true
   示例 2:

   输入: -121
   输出: false
   解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
   示例 3:

   输入: 10
   输出: false
   解释: 从右向左读, 为 01 。因此它不是一个回文数。
   进阶:

   你能不将整数转为字符串来解决这个问题吗？
 */


/**
* @param {number} x
* @return {boolean}
*/
var isPalindrome = function (x) {
  return `${x}`.split('').reverse().join('') === `${x}`
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const tmp = `${x}`
  let start = 0, end = tmp.length - 1

  while (start <= end) {
    if (tmp[start] !== tmp[end]) return false
    start++
    end--
  }
  return true
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false

  let res = 0, tmp = x

  while (tmp) {
    res = res * 10 + tmp % 10
    tmp = Math.floor(tmp / 10)
  }

  return res === x
};