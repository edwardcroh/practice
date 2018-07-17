// 1.5 oneAway

const oneAway = (str1, str2) => {
  let count = 0;
  let longer;
  if (str1.length > str2.length) {
    longer = str1;
  } else {
    longer = str2;
  }
  str1.split('').forEach(letter => {
    if (str2.split('').includes(letter)) {
      count++;
    }
  });
  return count + 1 === longer.length || count === longer.length ? true : false;
};

console.log(oneAway('pale', 'ple')); // true
console.log(oneAway('pales', 'pale')); // true
console.log(oneAway('pale', 'bale')); // true
console.log(oneAway('pale', 'bake')); // false
