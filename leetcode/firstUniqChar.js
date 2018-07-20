var firstUniqChar = function(s) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = 0;
    }
    hash[s[i]]++;
  }
  for (let j = 0; j < s.length; j++) {
    if (hash[s[j]] === 1) {
      return j;
    }
  }
  return -1;
};

console.log(firstUniqChar('hello')); // 0
console.log(firstUniqChar('loveleetcode')); // 2
