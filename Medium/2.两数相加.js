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
var addTwoNumbers = function(l1, l2) {
  let s1,s2,s3
  for (let index = l1.length-1; index > 0; index--) {
    s1+=l1[index]
  }
  for (let index = l2.length-1; index > 0; index--) {
    s2+=l2[index]
  }
  s3 = s1*1+s2*1
  console.log(s3);
  
  let list =[1,2,3]
  for (let index = s3.length-1; index > 0; index--) {

    // list.push(s3[index])
  }
  return list
};

