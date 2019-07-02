/**
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

   说明：每次只能向下或者向右移动一步。

   示例:

   输入:
   [
     [1,3,1],
     [1,5,1],
     [4,2,1]
   ]
   输出: 7
   解释: 因为路径 1→3→1→1→1 的总和最小。

 */

/**
 * DP
* @param {number[][]} grid
* @return {number}
*/
var minPathSum = function (grid) {
  if (!grid.length || !grid[0].length) return 0

  var rows = grid.length
  var cols = grid[0].length

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      if (i === 0 && j !== 0) {
        grid[i][j] += grid[i][j - 1]
      } else if (i !== 0 && j === 0) {
        grid[i][j] += grid[i - 1][j]
      } else if (i !== 0 && j !== 0) {
        grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j])
      }
    }
  }
  return grid[rows - 1][cols - 1]
};