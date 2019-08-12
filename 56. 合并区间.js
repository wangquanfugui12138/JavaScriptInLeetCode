/**
 * 给出一个区间的集合，请合并所有重叠的区间。

   示例 1:
 
   输入: [[1,3],[2,6],[8,10],[15,18]]
   输出: [[1,6],[8,10],[15,18]]
   解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
   示例 2:
 
   输入: [[1,4],[4,5]]
   输出: [[1,5]]
   解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。

 */

/**
* @param {number[][]} intervals
* @return {number[][]}
*/
var merge = function (intervals) {
  const res = []
  intervals.sort((a, b) => a[0] - b[0])

  intervals.forEach(item => {
    if (!res.length || res[res.length - 1][res[res.length - 1].length - 1] < item[0]) {
      res.push(item)
    } else {
      res[res.length - 1][res[res.length - 1].length - 1] = Math.max(res[res.length - 1][res[res.length - 1].length - 1], item[item.length - 1])
    }
  })
  return res
};

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i]
    const prev = intervals[i - 1]

    if (curr[0] <= prev[prev.length - 1]) {
      intervals[i] = [Math.min(prev[0], curr[0]), Math.max(prev[1], curr[1])]

      intervals.splice(i - 1, 1)
      i--
    }
  }

  return intervals
};