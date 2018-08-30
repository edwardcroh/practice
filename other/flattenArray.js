let ugly = [[1, 2, [3, [5]]], 4];

const flatten = arr => {
  const result = [];
  arr.forEach(item => {
    Array.isArray(item) ? result.push(...flatten(item)) : result.push(item);
  });
  return result;
};

flatten(ugly);
