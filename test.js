const list = [3,1,5,4,9,6,2,8]
function babelsort(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = list.length-1; j > i; j--) {
      if(list[j]<list[j-1]){
        let temp = list[j-1]
        list[j-1] = list[j]
        list[j] = temp
      }
    }
  }
  return list
}

console.log(babelsort(list));


