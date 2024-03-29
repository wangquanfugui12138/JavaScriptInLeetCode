/**
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。

   如果不存在最后一个单词，请返回 0 。

   说明：一个单词是指由字母组成，但不包含任何空格的字符串。

   示例:

   输入: "Hello World"
   输出: 5

 */

/**
* @param {string} s
* @return {number}
*/
var lengthOfLastWord = function (s) {
  const words = s.match(/(?<= |\b)[a-zA-Z]+(?=\b)/g)
  return words ? words.slice(-1)[0].length : 0
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let end = s.length - 1;
  while (end >= 0 && s[end] === ' ') {
    end--
  }

  if (end < 0) return 0

  let start = end
  while (start >= 0 && s[start] !== ' ') {
    start--
  }

  return end - start
};