function decodeMorse(morseCode) {
  let ref = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
    "...---...": "SOS",
    "-.-.--": "!",
    ".-.-.-": ".",
  };

  const codeArray = morseCode.split("   ");
  let decode = "";
  for (let i = 0; i < codeArray.length; i++) {
    let wordArray = codeArray[i].split(" ");
    wordArray = wordArray.filter((word) => word.trim().length > 0);
    console.log(wordArray);

    if (Array.isArray(wordArray) && wordArray.length) {
      for (let j = 0; j < wordArray.length; j++) {
        decode += ref[wordArray[j]];
      }
      if (i !== codeArray.length - 1) decode += " ";
    }
  }

  return decode == undefined ? "" : decode.toUpperCase();
}

console.log(decodeMorse("   .   . ")); // Test morse code
