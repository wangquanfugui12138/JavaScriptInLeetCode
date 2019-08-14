/**
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

   注意：
 
   num1 和num2 的长度都小于 5100.
   num1 和num2 都只包含数字 0-9.
   num1 和num2 都不包含任何前导零。
   你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。

 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  var res = ''
  var tmp = 0

  var arr1 = `${num1}`.split('')
  var arr2 = `${num2}`.split('')

  while (tmp || arr1.length || arr2.length) {
    tmp += ~~arr1.pop() + ~~arr2.pop()
    res = tmp % 10 + res
    tmp = tmp > 9
  }
  return res
};