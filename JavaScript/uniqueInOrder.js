const uniqueInOrder = function (iterable) {
  const result = [];

  for (let i = 0; i < iterable.length; i++) {
    if (result[result.length - 1] !== iterable[i]) {
      result.push(iterable[i]);
    }
  }
  return result;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
