// Exercise 16
//
// Write a JavaScript program that returns an array of ALL the numbers
// between two provided values, num1 and num2, that meet the following criteria.
//
// The sum of the cube of the digits of a number is equal to the number.
//
// e.g.
// 371 --> 3^3 + 7^3 + 1^3 = 371.

// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function findNumbers(num1, num2) {
  // num1 and num2 are Numbers
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);
  let resultArray = [];

  for (let num = min; num <= max; num++) {
    const toArray = num.toString().split('').map(Number);
    const newNum = toArray.map(a => {return a**3}).reduce((a, b) => a + b);
    if (newNum === num) {
      resultArray.push(num);        
      }
  }
  return resultArray;  
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(findNumbers(0, 1000));

// Create more test cases.
console.log(findNumbers(100, 800));

// This is needed for automated testing (more on that later)
module.exports = findNumbers;
