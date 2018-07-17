// 1.3 URLify

const URLify = (str, length) => {
  return str.trim().replace(/ /g, '%20');
};

console.log(URLify('Mr John Smith     ', 13));
