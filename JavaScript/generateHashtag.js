function generateHashtag(str) {
  console.log(str.replace(/\s+/g, ""));
  if (str.trim().length === 0) return false;
  if (str.replace(/\s+/g, "").length > 139) return false;

  str = str.split("");
  //   console.log(str);
  str[0] = str[0].toUpperCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "" && str[i - 1] === " ") {
      str[i] = str[i].toUpperCase();
    }
  }

  return "#" + str.join("").replace(/\s+/g, "");
}

console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
