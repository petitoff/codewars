// https://www.codewars.com/kata/550498447451fbbd7600041c
function assembleString(array) {
  if (typeof array === "undefined" || !array.length > 0) return "";
  let stringArray = array[0];

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < stringArray.length; j++) {
      const letter = array[i][j];
      if (letter !== "*") {
        stringArray = stringArray.split("");
        stringArray[j] = letter;
        stringArray = stringArray.join("");
      }
    }
  }
  stringArray = stringArray.split("");
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === "*") {
      stringArray[i] = "#";
    }
  }

  return stringArray.join("");
}

input = [];
console.log(assembleString(input));
