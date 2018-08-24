function findUniq(arr) {
  // do magic
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] ? hash[arr[i]]++ : hash[arr[i]] = 1
  }
  for (num in hash) {
    if (hash[num] === 1) {
      return Number(num)
    }
  }
}