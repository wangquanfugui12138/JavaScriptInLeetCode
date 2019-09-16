/**
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。

   输入为非空字符串且只包含数字 1 和 0。

   示例 1:

   输入: a = "11", b = "1"
   输出: "100"
   示例 2:

   输入: a = "1010", b = "1011"
   输出: "10101"

 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let res = '', tmp = 0

  a = a.split('')
  b = b.split('')

  while (a.length || b.length || tmp) {
    tmp += ~~a.pop() + ~~b.pop()
    res = (tmp % 2) + res
    tmp = tmp >= 2
  }
  return res
};