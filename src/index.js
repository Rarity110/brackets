module.exports = function check(str, bracketsConfig) {
  let x = true;
  let tmp = str;
    
  while (x === true) {
    x = false;
    for (let i = 0; i < tmp.length - 1; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
        if (tmp[i] === bracketsConfig[j][0] && tmp[i + 1] === bracketsConfig[j][1]) {
          tmp = tmp.substr(0, i) + tmp.substr(i + 2);
          x = true; 
        }
      }
    }
  }

  if (tmp.length === 0) {
    return true;
  } else return false;
}