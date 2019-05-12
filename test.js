
var reverse = function(x) {
  const MIN = -2147483648
  const MAX = 2147483647
  const reAbsNum = x<0?(Math.abs(x).toString().split('').reverse().join('')*-1):(Math.abs(x).toString().split('').reverse().join('')*1)
  if(reAbsNum>MAX||-reAbsNum<MIN){
    return 0
  }else{
    return reAbsNum
  }
}

console.log(reverse(0));

