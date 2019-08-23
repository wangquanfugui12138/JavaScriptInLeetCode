/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

   机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 
   现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

 */

/**
* @param {number[][]} obstacleGrid
* @return {number}
*/
var uniquePathsWithObstacles = function (obstacleGrid) {
  const len = obstacleGrid[0].length
  // 默认为0, 第一行情况可以写成，dp[j] = dp[j] + dp[j - 1]
  const dp = Array(len).fill(0)
  // 特殊情况[0, 0], 记为1
  dp[0] = 1

  obstacleGrid.forEach((row) => {
    row.forEach((item, j) => {
      if (j !== 0) {
        // 同 62. 不同路径 状态转移方程
        dp[j] += dp[j - 1];
      }
      // 如果当前有障碍物，则到此处的路线为0
      dp[j] *= (1 - item);
    });
  });
  return dp[len - 1];
};