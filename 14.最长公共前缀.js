/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // 从长字符串开始逐渐缩小直到匹配字符串为空字符串
  if (strs.length == 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++){
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix==='') return "";
    }        
  }
  return prefix;
};

