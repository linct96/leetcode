var longestCommonPrefix = function(strs) {
  if(strs.length>0){

    let firstStr = strs[0]
    let index = 1
    let commonStr = ''
    while (strs.every(item=>{
      return item.indexOf(firstStr.substring(0,index))>-1
    })) {
      commonStr=firstStr.substring(0,index)
      index++
    }
    return commonStr
  }else{
    return ''
  }
};
let x = ['']
console.log(longestCommonPrefix(x));

