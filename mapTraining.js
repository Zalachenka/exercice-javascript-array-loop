const floatingNumbers = [0.2, 0.4, 0.8, 2.4, 96.9];
const integers = floatingNumbers.map(function(x) {
  return Math.floor(x);
});
console.log(integers);
