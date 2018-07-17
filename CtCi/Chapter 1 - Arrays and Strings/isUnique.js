// 1.1 isUnique

const isUnique = str => {
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
};

console.log(isUnique('bob')); // false
console.log(isUnique('asdf')); // true
