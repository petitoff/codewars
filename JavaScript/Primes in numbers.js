/*
Description:
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

"(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

Link: https://www.codewars.com/kata/54d512e62a5e54c96200019e/
*/

function primeFactors(n) {
  if (n < 2) return `(${n})`; // If n is less than 2, print n

  let result = ""; // Variable to hold the result
  for (let i = 2; i <= n; i++) {
    let count = 0;

    while (n % i === 0) {
      // We check how many times we could reduce n by the given i. Later we use this to exponentiation.
      count++;
      n /= i;
    }

    if (count) {
      result += `(${i}`;
      if (count > 1) result += `**${count}`;
      result += `)`;
    }
  }
  return result;
}

console.log(primeFactors(86240));
