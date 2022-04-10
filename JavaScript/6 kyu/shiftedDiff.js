// https://www.codewars.com/kata/5596f6e9529e9ab6fb000014
function shiftedDiff(first, second) {
  console.log(first, second);
  if (first === second) {
    return 0;
  }

  const firstArray = first.split("");

  for (let i = 0; i < firstArray.length; i++) {
    const lastElement = firstArray.pop();
    firstArray.unshift(lastElement);
    if (firstArray.join("") === second) {
      console.log(firstArray);
      return i + 1;
    }
  }
  return -1;
}

console.log(shiftedDiff("eecoff", "coffee"));
