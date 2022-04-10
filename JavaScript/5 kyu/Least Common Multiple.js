/*
Link: https://www.codewars.com/kata/5259acb16021e9d8a60010af/

Description:
Write a function that calculates the least common multiple of its arguments; 
each argument is assumed to be a non-negative integer. In the case that there 
are no arguments (or the provided array in compiled languages is empty), return 1.
*/
const lcm = function (...arr) {
  return arr.reduce((acc, x) => (acc * x) / gcd(acc, x));
};

const gcd = function (...arr) {
  return arr.reduce((acc, x) => (x === 0 ? acc : gcd(x, acc % x)));
};

console.log(lcm(2, 5));
