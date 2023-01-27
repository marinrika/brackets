module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let brackets = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    let pair = bracketsConfig[i];
    brackets[pair[0]] = pair[1];
  }
  if (Object.keys(brackets).includes(str[0])) stack.push(str[0]);
  else return false;
  for (let i = 1; i < str.length; i++) {
    if (Object.values(brackets).includes(str[i])) {
      if (str[i] === brackets[stack[stack.length - 1]]) stack.pop();
      else if (Object.keys(brackets).includes(str[i])) stack.push(str[i]);
      else return false;
    } else stack.push(str[i]);
  }
  return stack.length === 0;
};
