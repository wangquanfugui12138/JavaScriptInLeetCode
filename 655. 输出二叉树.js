/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function (root) {
  function getHeight (root) {
    if (!root) return 0

    const left = getHeight(root.left) + 1
    const right = getHeight(root.right) + 1

    return Math.max(left, right)

  }
  function main (root, res, deep = 0, start = 0, end) {
    if (!root) return

    if (start > end) {
      return
    } else if (end === start) {
      res[deep][start] = `${root.val}`
    } else {
      // 渲染当前节点，在树的中间位置
      var middle = Math.floor((end - start) / 2 + start)
      res[deep][middle] = `${root.val}`
      // 左子树渲染
      main(root.left, res, deep + 1, start, middle)
      // 右子树渲染
      main(root.right, res, deep + 1, middle + 1, end)
    }
  }


  var m = getHeight(root)
  var n = Math.pow(2, m) - 1

  var tmp = new Array(m).fill("").map(row => new Array(n).fill(""))

  main(root, tmp, 0, 0, n - 1)

  return tmp
};