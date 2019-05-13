var isValid = function(s) {
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
  return stack
};
console.log(isValid('()[]{}'));

