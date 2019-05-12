/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const MIN = -2147483648
  const MAX = 2147483647
  const reAbsNum = x<0?(Math.abs(x).toString().split('').reverse().join('')*-1):(Math.abs(x).toString().split('').reverse().join('')*1)
  if(reAbsNum>MAX||reAbsNum<MIN){
    return 0
  }else{
    return reAbsNum
  }
}

