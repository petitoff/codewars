// https://www.codewars.com/kata/554b4ac871d6813a03000035
function highAndLow(numbers) {
  const numbersArray = numbers.split(" ").map(Number);
  let min = numbersArray[0];
  let max = numbersArray[0];
  for (let i = 0; i < numbersArray.length; i++) {
    const numberNow = numbersArray[i];
    if (max < numberNow) max = numberNow;
    if (min > numberNow) min = numberNow;
  }

  return `${max} ${min}`;
}

console.log(highAndLow("1 2 3 4 5"));
