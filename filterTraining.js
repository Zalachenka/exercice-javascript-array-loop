const floatingNumbers = [-7.2, 0.4, 0.8, -2.4, -96.9];
function isNegative(n) {
  return Math.floor(n) < 0 && Math.floor(n) > -5;
}
const newNumbers = floatingNumbers.filter(isNegative);
console.log(newNumbers);
