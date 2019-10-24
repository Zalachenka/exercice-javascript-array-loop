const floatingNumbers = [-7.2, 0.4, 0.8, -2.4, -96.9];
function isNegative(n) {
  return n < 0 && n > -5 ? Math.floor(n) : false;
}
const newNumbers = floatingNumbers.filter(isNegative);
console.log(newNumbers);
