/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let i = nums.length-1; i >0; i--) {
      if(nums[i]===nums[i-1]){
        nums.splice(i,1)
      }
    }
    return nums.length
};

