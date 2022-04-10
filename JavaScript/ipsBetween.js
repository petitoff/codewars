function ipsBetween(start, end) {
  return calculateIp(end) - calculateIp(start);
}

function calculateIp(ip) {
  return ip.split(".").reduce(function (accumulator, x, i) {
    return accumulator + x * Math.pow(256, 3 - i);
  }, 0);
}

console.log(ipsBetween("150.0.0.0", "150.0.0.1"));
