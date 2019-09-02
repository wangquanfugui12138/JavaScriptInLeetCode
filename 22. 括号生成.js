/**
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

   例如，给出 n = 3，生成结果为：

   [
     "((()))",
     "(()())",
     "(())()",
     "()(())",
     "()()()"
   ]

 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  function main (res = [], tmp = '', left = 0, right = 0) {
    if (tmp.length === n * 2) {
      res.push(tmp)
      return
    }
    if (left < n) {
      main(res, tmp + '(', left + 1, right)
    }
    if (left > right) {
      main(res, tmp + ')', left, right + 1)
    }
    return res
  }
  return main()
};