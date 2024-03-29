/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

   有效字符串需满足：

   左括号必须用相同类型的右括号闭合。
   左括号必须以正确的顺序闭合。
   注意空字符串可被认为是有效字符串。

   示例 1:

    输入: "()"
    输出: true
   示例 2:

    输入: "()[]{}"
    输出: true
   示例 3:

    输入: "(]"
    输出: false
   示例 4:

    输入: "([)]"
    输出: false
   示例 5:

    输入: "{[]}"
    输出: true

 */

/**
* @param {string} s
* @return {boolean}
*/
var isValid = function (s) {
  if (!s || !s.length) return true
  if (s % 2 || ['}', ']', ')'].indexOf(s[0]) >= 0) return false

  var map = {
    '{': '}',
    '[': ']',
    '(': ')',
  }
  var stack = [s[0]]

  for (let i = 1; i < s.length; i++) {
    if (map[stack[stack.length - 1]] !== s[i]) {
      stack.push(s[i])
    } else {
      stack.pop()
    }
  }
  return !stack.length
};