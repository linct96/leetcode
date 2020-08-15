/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 更优解为对位相加
  let cur1 = l1
  let result1 = ''
  let cur2 = l2
  let result2 = ''
  while (cur1 != null) {
    result1 += cur1.val
    cur1 = cur1.next
  }
  while (cur2 != null) {
    result2 += cur2.val
    cur2 = cur2.next
  }
  let resultStr = BigInt(result1.split('').reverse().join('')) + BigInt(result2.split('').reverse().join('')) + ''
  console.log(BigInt(result1.split('').reverse().join('') * 1));
  let result = new ListNode(resultStr[resultStr.length - 1])
  let last = result
  for (let index = resultStr.length - 2; index >= 0; index--) {
    const node = new ListNode(resultStr[index])
    last.next = node
    last = node
  }
  return result

  let cur1 = l1
  let cur2 = l2
  let next1 = null
  let next2 = null
  while (cur1 !== null & cur2!+= null) {
    next1 = cur1.next
  }
};

