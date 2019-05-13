/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // 利用栈先进后出的特点判断是否合法
    let o = {
      '{':'}',
      '[':']',
      '(':')',
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
      const l = stack.length
      if(s[i]===o[stack[l-1]]){
        stack.pop()
        continue
      }
      stack.push(s[i])
    }
    return !stack.length
};

