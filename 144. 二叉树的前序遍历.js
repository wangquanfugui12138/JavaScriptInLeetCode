/**
 * 给定一个二叉树，返回它的 前序 遍历。

   示例:

   输入: [1,null,2,3]
     1
       \
       2
       /
     3

   输出: [1,2,3]
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
var preorderTraversal1 = function (root, res = []) {
  if (!root) return []

  res.push(root.val)
  preorderTraversal1(root.left, res)
  preorderTraversal1(root.right, res)
  return res
};

//迭代
var preorderTraversal2 = function (root) {
  var res = []
  var stack = []

  while (root || stack.length) {
    if (root) {
      stack.push(root)
      res.push(root.val)
      root = root.left
    } else {
      root = stack.pop()
      root = root.right
    }
  }
  return res
};