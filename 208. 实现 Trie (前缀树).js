/**
 * 实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。

   示例:

   Trie trie = new Trie();

   trie.insert("apple");
   trie.search("apple");   // 返回 true
   trie.search("app");     // 返回 false
   trie.startsWith("app"); // 返回 true
   trie.insert("app");
   trie.search("app");     // 返回 true

   说明:
    你可以假设所有的输入都是由小写字母 a-z 构成的。
    保证所有输入均为非空字符串。

 */

/**
* Initialize your data structure here.
*/
//es5
var Trie = function () {
  return this
};

/**
* Inserts a word into the trie. 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function (word) {
  return [...word].reduce((sum, cur) => {
    return sum[cur] || (sum[cur] = {})
  }, this).isEnd = true
};

/**
* Returns if the word is in the trie. 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function (word) {
  let tmp = this
  for (let i = 0; i < word.length; i++) {
    const key = word[i]
    if (!(tmp = tmp[key])) return false
  }
  return !!tmp.isEnd
};

/**
* Returns if there is any word in the trie that starts with the given prefix. 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function (prefix) {
  let tmp = this
  for (let i = 0; i < prefix.length; i++) {
    const key = prefix[i]
    if (!(tmp = tmp[key])) return false
  }
  return true
};



/**
* Initialize your data structure here.
*/
//es6
class Trie {
  insert (word) { [...word].reduce((sum, w) => sum[w] || (sum[w] = {}), this).isEnd = true }
  search (word, target = this) {
    for (const w of word) if (!(target = target[w])) return false
    return !!target.isEnd
  }
  startsWith (word, target = this) {
    for (const w of word) if (!(target = target[w])) return false
    return true
  }
}