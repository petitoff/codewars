function spinWords(string) {
  //TODO Have fun :)
  const stringArray = string.split(/\b(\s)/); // string to array
  const reverseStringArray = [];

  // remove whitespice from array
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] !== " ") {
      if (stringArray[i].length >= 5) {
        stringArray[i] = stringArray[i].split("").reverse().join("");
      }
      reverseStringArray.push(stringArray[i]);
    }
  }
  console.log(stringArray);
  console.log(reverseStringArray);

  return reverseStringArray.join(" ");
}

spinWords("Hey fellow warriors");
