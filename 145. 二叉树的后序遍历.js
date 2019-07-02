/**
 * 给定一个二叉树，返回它的 后序 遍历。

   示例:

   输入: [1,null,2,3]
    1
      \
      2
      /
    3

   输出: [3,2,1]
   进阶: 递归算法很简单，你可以通过迭代算法完成吗？

 */

/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
 * 递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal1 = function (root, res = []) {
  if (!root) return []

  postorderTraversal1(root.left, res)
  postorderTraversal1(root.right, res)
  res.push(root.val)
  return res
};

//迭代
var postorderTraversal2 = function (root) {
  var res = []
  var stack = []
  var lastNode

  while (root || stack.length) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      root = stack[stack.length - 1]

      if (root.right && lastNode !== root.right) {
        root = root.right
      } else {
        lastNode = root
        stack.pop()
        res.push(root.val)
        root = null
      }
    }
  }
  return res

};