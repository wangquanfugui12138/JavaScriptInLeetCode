/**
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。

   本题中，一棵高度平衡二叉树定义为：

   一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

   示例 1:

   给定二叉树 [3,9,20,null,null,15,7]

       3
     / \
     9  20
       /  \
     15   7
   返回 true 。

   示例 2:

   给定二叉树 [1,2,2,3,3,null,null,4,4]

         1
         / \
       2   2
       / \
     3   3
     / \
   4   4
   返回 false 。

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
/**
 * 
 * @param {TreeNode} root 
 * 
 * 从顶至底（暴力法）
 * 构造一个获取当前节点最大深度的方法 depth() ，通过比较左右子树最大高度差abs(self.depth(root.left) - self.depth(root.right))，来判断以此节点为根节点下是否是二叉平衡树；
 * 从顶至底DFS，以每个节点为根节点，递归判断是否是平衡二叉树：
 * 若所有根节点都满足平衡二叉树性质，则返回 True ；
 * 若其中任何一个节点作为根节点时，不满足平衡二叉树性质，则返回False。
 * 本方法产生大量重复的节点访问和计算，最差情况下时间复杂度 O(N^2)。
 */
var isBalanced = function (root) {
  if (!root) return true
  const left = main(root.left)
  const right = main(root.right)

  function main (root) {
    if (!root) return 0
    return 1 + Math.max(main(root.left), main(root.right))
  }

  return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};

/**
 * 从底至顶（提前阻断法）
 * 对二叉树做深度优先遍历DFS，递归过程中：
 * 终止条件：当DFS越过叶子节点时，返回高度0；
 * 返回值：
 * 从底至顶，返回以每个节点root为根节点的子树最大高度(左右子树中最大的高度值加1max(left,right) + 1)；
 * 当我们发现有一例 左/右子树高度差 ＞ 1 的情况时，代表此树不是平衡树，返回-1；
 * 当发现不是平衡树时，后面的高度计算都没有意义了，因此一路返回-1，避免后续多余计算。
 * 最差情况是对树做一遍完整DFS，时间复杂度为 O(N)。
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
var isBalanced = function (root) {
  if (!root) return true

  function main (root) {
    if (!root) return 0

    let left = main(root.left)
    if (left === -1) return -1

    let right = main(root.right)
    if (right === -1) return -1

    return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1
  }

  return main(root) != -1
};