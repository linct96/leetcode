/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 *
 * https://leetcode-cn.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (36.43%)
 * Likes:    239
 * Dislikes: 0
 * Total Accepted:    64.3K
 * Total Submissions: 173.6K
 * Testcase Example:  '4'
 *
 * 实现 int sqrt(int x) 函数。
 * 
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 
 * 示例 1:
 * 
 * 输入: 4
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842..., 
 * 由于返回类型是整数，小数部分将被舍去。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // 暴力求解法
  // let n = 1
  // while (true) {
  //   if (n*n>x) {
  //     return n-1
  //   }else{
  //     n++
  //   }
  // }
  // 牛顿迭代法 (a+x/a)/2 a为猜想值求出值为新的a，无限迭代a值会无限接近于开根值
  if (x===0) return 0
  let last = x
  let cur = (last+x/last)/2
  while(Math.floor(cur)!==Math.floor(last)){
    last = cur
    cur = (cur+x/cur)/2
  }
  return Math.floor(cur)
};
// @lc code=end

