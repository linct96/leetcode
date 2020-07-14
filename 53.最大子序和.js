/*
 * @Description: 
 * @Author: linchaoting
 * @Date: 2020-06-12 15:24:16
 * @LastEditTime: 2020-06-14 22:57:45
 */ 
/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (46.36%)
 * Likes:    1282
 * Dislikes: 0
 * Total Accepted:    107.4K
 * Total Submissions: 225.3K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 示例:
 * 
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 
 * 进阶:
 * 
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // 普通解法
  // const length = nums.length
  // let maxSum = nums[0]
  // let childSum = 0
  // for (let i = 0; i < length; i++) {
  //   childSum = 0
  //   for (let j = i; j < length; j++) {
  //     childSum+=nums[j]
  //     if (childSum>maxSum) {
  //       maxSum = childSum
  //     }
  //   }
  // }
  // return maxSum

  
};
let arr = [-1]
const res =  maxSubArray(arr)
console.log(res)
// @lc code=end

