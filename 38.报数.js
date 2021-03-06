/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 *
 * https://leetcode-cn.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (51.40%)
 * Likes:    321
 * Dislikes: 0
 * Total Accepted:    52.4K
 * Total Submissions: 99K
 * Testcase Example:  '1'
 *
 * 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 
 * 1 被读作  "one 1"  ("一个一") , 即 11。
 * 11 被读作 "two 1s" ("两个一"）, 即 21。
 * 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
 * 
 * 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
 * 
 * 注意：整数顺序将表示为一个字符串。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: "1"
 * 
 * 
 * 示例 2:
 * 
 * 输入: 4
 * 输出: "1211"
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
  const sayLine = (str) => {
    let count = 1
    let result = ''
    for (let index = 0; index < str.length; index++) {
      if (str[index]===str[index+1]) {
        count++
      }else{
        result+=(count+str[index])
        count = 1
      }
    }
    return result
  }
  if (n===1) {
    return '1'
  }else{
    const line = countAndSay(n-1)
    return sayLine(line)
  }
};
// @lc code=end

