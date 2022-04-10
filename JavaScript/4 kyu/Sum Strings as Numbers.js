/* 
Link: https://www.codewars.com/kata/5324945e2ece5e1f32000370

Description:
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:
sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/

function sumStrings(a, b) {
  return `${BigInt(a) + BigInt(b)}`;
}

console.log(
  sumStrings("712569312664357328695151392", "8100824045303269669937")
);
