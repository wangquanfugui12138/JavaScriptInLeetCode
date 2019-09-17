/**
 * 给定一个二叉树，找出其最小深度。

   最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 
   说明: 叶子节点是指没有子节点的节点。
 
   示例:
 
   给定二叉树 [3,9,20,null,null,15,7],
 
       3
     / \
     9  20
       /  \
     15   7
   返回它的最小深度  2.

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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0

  const left = minDepth(root.left)
  const right = minDepth(root.right)

  //1.如果左孩子和右孩子有为空的情况，直接返回left+right+1 因为为空的情况下left和right必定有一个为0
  //2.如果都不为空，返回较小深度+1
  return left && right ? Math.min(left, right) + 1 : left + right + 1
};