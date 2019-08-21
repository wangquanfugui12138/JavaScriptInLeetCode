/**
 * 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

   示例 1:

   输入: coins = [1, 2, 5], amount = 11
   输出: 3
   解释: 11 = 5 + 5 + 1
   示例 2:

   输入: coins = [2], amount = 3
   输出: -1

 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 动态规划
 */
var coinChange = function (coins, amount) {
  let res = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
  res[0] = 0

  for (let i = 1; i < res.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        res[i] = Math.min(res[i], res[i - coins[j]] + 1)
      }
    }
  }

  return res[amount] === Number.MAX_SAFE_INTEGER ? -1 : res[amount]
};

