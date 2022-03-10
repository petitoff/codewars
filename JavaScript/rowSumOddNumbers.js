function rowSumOddNumbers(n) {
  let numberodd = 1;
  const arrowOdd = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i > 1) numberodd += 2;
      if (i === n) arrowOdd.push(numberodd);
    }
  }
  return arrowOdd.reduce(function (a, b) {
    return a + b;
  }, 0);
}

console.log(makeLine(3));
