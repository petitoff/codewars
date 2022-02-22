function spinWords(string) {
  //TODO Have fun :)
  const stringArray = string.split(/\b(\s)/); // string to array
  const reverseStringArray = [];

  // remove whitespice from array
  for (let i = 0; i < stringArray.length; i++) {
    // If stringArray[i] is equal to whitespace then skip
    if (stringArray[i] !== " ") {
      if (stringArray[i].length >= 5) {
        // reverse a string
        stringArray[i] = stringArray[i].split("").reverse().join("");
      }
      reverseStringArray.push(stringArray[i]);
    }
  }
  // Only for testing...
  //   console.log(stringArray);
  //   console.log(reverseStringArray);

  return reverseStringArray.join(" ");
}

// Testing string
spinWords("Hey fellow warriors");
