function sumTwoSmallestNumbers(numbers) {
  console.log(numbers);
  numbers = numbers.sort(function (a, b) {
    return a - b;
  });

  return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));
