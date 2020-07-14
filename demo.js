/*
 * @Description: 
 * @Author: linchaoting
 * @Date: 2019-10-24 14:32:19
 * @LastEditTime: 2020-03-12 19:58:27
 */
console.log(1);
const throttle = (fn,time) => {
  let lock = false
  return function(){
    if (!lock) {
      lock=true
      fn()
      setTimeout(() => {
        lock = true
      }, time);
    }
  }
}
const a = function(){
  console.log(111);
}
const fn = throttle(a,200)
for (let index = 0; index < 10; index++) {
  a()
}