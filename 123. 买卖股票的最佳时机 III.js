/**
 * @param {number[]} prices
 * @return {number}
 * 每天我们其实是有四个状态，买入当前价格的股票，以当前价格的股票卖出。第二次买入股票，第二次卖出股票。
 * 初始时钱是 0。firstBuy代表第一次买入后当前的钱，firstSell代表第一次卖出后当前的前，secondBuy代表第二次买入后当前的钱，secondSell代表第二次卖出后当前的钱。
 * 然后我们只需要更新每天的这四个状态即可。
 */
var maxProfit = function (prices) {
  if (!prices || prices.length < 2) return 0

  let firstBuy = -prices[0], firstSell = -Infinity, secondBuy = -Infinity, secondSell = -Infinity

  for (let i = 1; i < prices.length; i++) {
    firstBuy = Math.max(firstBuy, -prices[i])
    firstSell = Math.max(firstSell, firstBuy + prices[i])
    secondBuy = Math.max(secondBuy, firstSell - prices[i])
    secondSell = Math.max(secondSell, secondBuy + prices[i])
  }
  return Math.max(0, secondSell)
};