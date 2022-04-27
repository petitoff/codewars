/*
Link: https://www.codewars.com/kata/525f4206b73515bffb000b21/javascript

Description:
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example:
add("123", "321"); -> "444"
add("11", "99");   -> "110"

Notes

    The input numbers are big.
    The input is a string of only digits
    The numbers are positives
*/

function add(a, b) {
  let sum = [];
  let rest = '';

  let firstNumber = a.toString().split('');
  let secondNumber = b.toString().split('');

  if (firstNumber.length < secondNumber.length)
    [firstNumber, secondNumber] = [secondNumber, firstNumber];

  let secondNumberLength = secondNumber.length - 1;

  for (let i = firstNumber.length - 1; i >= 0; i--) {
    let result;

    if (secondNumberLength >= 0) {
      result =
        Number(firstNumber[i]) + Number(secondNumber[secondNumberLength]);
      secondNumberLength--;
    } else result = Number(firstNumber[i]);

    result += +rest;
    rest = '';

    if (result.toString().length > 1) {
      rest = result.toString()[0];
      sum.unshift(Number(result.toString().slice(1)));
    } else {
      sum.unshift(result);
    }
  }
  if (rest !== 0) sum.unshift(rest);

  return sum.join('');
}

console.log(add('1372', '69'));
