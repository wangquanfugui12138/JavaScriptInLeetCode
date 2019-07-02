/**
 * 给定一个二叉树，返回它的中序 遍历。

   示例:

   输入: [1,null,2,3]
     1
       \
       2
       /
     3

   输出: [1,3,2]
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
var inorderTraversal1 = function (root, res = []) {
  if (!root) return

  inorderTraversal1(root.left, res)
  res.push(root.val)
  inorderTraversal1(root.right, res)

  return res
};

//迭代
var inorderTraversal2 = function (root) {
  if (!root) return []

  var res = []
  var stack = []

  while (root || stack.length) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      res.push(root.val)
      root = root.right
    }
  }

  return res
};