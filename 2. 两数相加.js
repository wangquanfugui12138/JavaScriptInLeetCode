/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

   如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

   您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

   示例：

   输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
   输出：7 -> 0 -> 8
   原因：342 + 465 = 807
  */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 大数相加求和 数组转为链表
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  function bigAdd (a, b) {
    var res = '', tmp = 0

    while (a.length || b.length || tmp) {
      tmp += ~~a.pop() + ~~b.pop()
      res = (tmp % 10) + res
      tmp = tmp > 9
    }

    return res
  }
  var left = '', right = ''
  while (l1) {
    left = l1.val + left
    l1 = l1.next
  }
  while (l2) {
    right = l2.val + right
    l2 = l2.next
  }

  var arr = bigAdd(left.split(''), right.split('')).split('')

  return arr.reduce((sum, cur) => {
    var tmp = new ListNode(cur)
    tmp.next = sum
    return tmp
  }, null)
};