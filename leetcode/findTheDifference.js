const findTheDifference = function(s, t) {
  const hash = {};
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = 1;
    } else {
      hash[s[i]]++;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (!hash[t[i]]) {
      return t[i];
    }
  }
};

console.log(findTheDifference('abcd', 'abcde'));
