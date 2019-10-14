/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//  可以改进为二分查找
var searchInsert = function(nums, target) {
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (target===element || target<element) {
      return index
    }
  }
  return nums.length
};

