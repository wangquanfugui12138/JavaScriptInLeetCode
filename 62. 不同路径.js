/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

   机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

   问总共有多少条不同的路径？



   例如，上图是一个7 x 3 的网格。有多少可能的路径？

   说明：m 和 n 的值均不超过 100。

   示例 1:

   输入: m = 3, n = 2
   输出: 3
   解释:
   从左上角开始，总共有 3 条路径可以到达右下角。
   1. 向右 -> 向右 -> 向下
   2. 向右 -> 向下 -> 向右
   3. 向下 -> 向右 -> 向右
   示例 2:

   输入: m = 7, n = 3
   输出: 28

 */

/**
 * DP
* @param {number} m
* @param {number} n
* @return {number}
*/

var uniquePaths1 = function (m, n) {
  var arr = new Array(n).fill(0).map(item => new Array(m).fill(0))

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      var tmp = 0
      if (i === 0 && j === 0) tmp = 1
      if (i >= 1) tmp += arr[i - 1][j]
      if (j >= 1) tmp += arr[i][j - 1]
      arr[i][j] = tmp
    }
  }
  return arr[n - 1][m - 1]
};

//递归
var arr = new Array(101).fill(0).map(item => new Array(101).fill(0))
var uniquePaths = function (m, n) {
  if (m <= 0 || n <= 0) return 0
  else if (m === 1 || n === 1) return 1
  else if (m === 2 && n === 2) return 2
  else if ((m === 3 && n === 2) || (m === 2 && n === 3)) return 3

  if (arr[m][n] > 0) return arr[m][n]

  arr[m - 1][n] = uniquePaths(m - 1, n)
  arr[m][n - 1] = uniquePaths(m, n - 1)

  arr[m][n] = arr[m - 1][n] + arr[m][n - 1]

  return arr[m][n]
};