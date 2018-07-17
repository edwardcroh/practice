// 1.6 stringCompression

const stringCompression = str => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    let num = i;
    while (i + 1 < str.length && letter === str[i + 1]) {
      i++;
    }
    result += letter;
    result += i - num + 1;
  }
  return result.length < str.length ? result : str;
};

console.log(stringCompression('aabcccccaaa')); // a2b1c5a3
