// https://www.codewars.com/kata/520b9d2ad5c005041100000f
function pigIt(str) {
  const stringArray = str.split(" ");

  for (let i = 0; i < stringArray.length; i++) {
    if (!RegExp(/^\p{L}/, "u").test(stringArray[i])) continue;
    stringArray[i] += stringArray[i][0] + "ay";
    stringArray[i] = stringArray[i].substring(1);
  }

  return stringArray.join(" ");
}

console.log(pigIt("Pig latin is cool"));
