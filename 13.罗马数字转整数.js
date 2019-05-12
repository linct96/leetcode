/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanMap = new Map([
    ['I',1],
    ['V',5],
    ['X',10],
    ['L',50],
    ['C',100],
    ['D',500],
    ['M',1000],
  ])
  let sum = 0
  for (let i = s.length-1; i >= 0; i--) {
    if(i<s.length-1){
      // 前一位除以当前的商
      let quotient  = romanMap.get(s[i+1])/romanMap.get(s[i])
      // 判断商为5或者10的倍数即减
      if(quotient===10||quotient===5){
        sum-=romanMap.get(s[i])
      }else{
        sum += romanMap.get(s[i])
      }
    }else{
      sum += romanMap.get(s[i])
    }
  }
  return sum
};

