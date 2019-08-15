/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

   示例 1：

   输入: "babad"
   输出: "bab"
   注意: "aba" 也是一个有效答案。
   示例 2：

   输入: "cbbd"
   输出: "bb"

 */

/**
* @param {string} s
* @return {string}
*/
var longestPalindrome = function (s) {
  if (s === '')
    return s
  let maxStr = s[0]
  let len = s.length
  for (let i = 0; i < len - 1; i++) {
    let tempX = s[i]
    let k = 1
    let cutBol = true
    for (let j = i + 1; j < len; j++) {
      if (s[i] === s[j] && cutBol) {
        tempX += s[j]
        continue
      }
      if (i - k < 0) {
        break;
      }
      if (s[j] === s[i - k]) {
        cutBol = false
        tempX = s[i - k] + tempX + s[j]
        k++
      } else {
        break;
      }
    }
    maxStr = tempX.length > maxStr.length ? tempX : maxStr
  }
  return maxStr
};