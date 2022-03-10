// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
  oddArray = [];
  finalArray = [];

  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    if (number % 2 !== 0) {
      oddArray.push(number);
    }
  }
  const sortedNumbers = [...new Float64Array(oddArray).sort()];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      finalArray.push(sortedNumbers.shift());
    } else {
      finalArray.push(array[i]);
    }
  }
  return finalArray;
}

const array = [11, 1, 2, 8, 3, 4, 5];

console.log(sortArray(array));
