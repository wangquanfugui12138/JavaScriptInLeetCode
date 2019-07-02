/**
    编写一个函数来查找字符串数组中的最长公共前缀。
    如果不存在公共前缀，返回空字符串 ""。

    示例 1:

    输入: ["flower","flow","flight"]
    输出: "fl"
    示例 2:

    输入: ["dog","racecar","car"]
    输出: ""
    解释: 输入不存在公共前缀。
    说明:

    所有输入只包含小写字母 a-z 。

 */


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix1 = function (strs) {
  if (!Array.isArray(strs) || !strs.length) return ''
  if (strs.length === 1) return strs[0]

  var res = strs[0]

  for (var i = 1; i < strs.length; i++) {
    var j = res.length
    while (j >= 0) {
      if (res === strs[i].substr(0, j)) {
        break
      } else {
        j--
        res = res.substr(0, j)
      }
    }
  }

  return res
}
var longestCommonPrefix2 = function (strs) {
  if (!Array.isArray(strs) || !strs.length) return ''
  if (strs.length === 1) return strs[0]

  var result = strs[0]

  for (let i = 0; i < result.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (result[i] !== strs[j][i]) {
        return result.substring(0, i)
      }
    }
  }
  return result
}