/**
 * 实现 strStr() 函数。

   给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

   示例 1:

   输入: haystack = "hello", needle = "ll"
   输出: 2
   示例 2:

   输入: haystack = "aaaaa", needle = "bba"
   输出: -1
   说明:

   当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

   对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。

 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0

  let nLength = needle.length
  let hLength = haystack.length - nLength + 1

  for (let i = 0; i < hLength; i++) {
    for (let j = 0; j < nLength; j++) {
      if (haystack[i + j] !== needle[j]) {
        break
      } else if (j === nLength - 1) {
        return i
      }
    }
  }
  return -1
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0

  let nLength = needle.length
  let hLength = haystack.length - nLength + 1

  for (let i = 0; i < hLength; i++) {
    for (let j = 0; j < nLength; j++) {
      if (haystack[i + j] !== needle[j]) {
        break
      } else if (j === nLength - 1) {
        return i
      }
    }
  }
  return -1
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0

  var j = 0, prev = 0
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[j]) {
      if (j === 0) prev = i

      if (j === needle.length - 1) {
        return i - needle.length + 1
      } else {
        j++
      }
    } else {
      if (j !== 0) {
        i = prev
        j = 0
      }
    }
  }
  return -1
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};