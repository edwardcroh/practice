// 1.4 palindromePermutation

const palindromePermutation = str => {
  let hash = {};
  let current;
  let hold = false;
  let isPerm = true;
  str.split('').forEach(char => {
    if (char !== ' ') {
      current = char.toLowerCase();
      if (hash[current] === undefined) {
        hash[current] = 0;
      }
      hash[current]++;
    }
  });
  for (let num in hash) {
    if (hash[num] % 2 !== 0) {
      if (hold) {
        isPerm = false;
      } else {
        hold = true;
      }
    }
  }
  return isPerm;
};

console.log(palindromePermutation('Tact Coa'));
