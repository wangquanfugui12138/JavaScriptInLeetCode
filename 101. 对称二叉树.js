/**
 * 给定一个二叉树，检查它是否是镜像对称的。

   例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

       1
     / \
     2   2
   / \ / \
   3  4 4  3
   但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

       1
     / \
     2   2
     \   \
     3    3

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true

  function main (left, right) {
    if (!left && !right) {
      return true
    } else if (left && right && left.val === right.val) {
      return main(left.left, right.right) && main(right.left, left.right)
    } else return false

  }
  return main(root.left, root.right)
};