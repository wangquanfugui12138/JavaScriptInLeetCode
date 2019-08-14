/**
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

   示例 1:
 
   输入: num1 = "2", num2 = "3"
   输出: "6"
   示例 2:
 
   输入: num1 = "123", num2 = "456"
   输出: "56088"
   说明：
 
   num1 和 num2 的长度小于110。
   num1 和 num2 只包含数字 0-9。
   num1 和 num2 均不以零开头，除非是数字 0 本身。
   不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。

 */

/**
* @param {string} num1
* @param {string} num2
* @return {string}
*/
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return "0"
  var res = []

  var arr1 = num1.split('').reverse()
  var arr2 = num2.split('').reverse()

  arr2.forEach((item1, index) => {
    let tmp = 0
    let temp = new Array(index).fill(0).join('')

    arr1.forEach(item2 => {
      temp = ((item1 * item2 + tmp) % 10) + temp
      tmp = ~~((item1 * item2 + tmp) / 10)
    })
    if (tmp) temp = tmp + temp
    res.push(temp)
  })

  function add (num1, num2) {
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
  }

  return res.reduce(add)

};