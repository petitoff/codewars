function dataReverse(data) {
  let newArray = [];
  let lengthArray = data.length;

  while (true) {
    if (lengthArray === 0) break;
    newArray.push(...data.slice(lengthArray - 8, lengthArray));
    lengthArray -= 8;
  }
  return newArray;
}

console.log(dataReverse([0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]));
