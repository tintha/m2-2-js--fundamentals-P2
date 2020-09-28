// Exercise 13
//
// Write a function that takes accepts a string as its only argument
// and returns a number that indicates how many uppercase "B"s are in the string.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countBs(str) {
  // str is a string
  let result = str.split("").filter(letter => letter === "B");
  return result.length;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Create more test cases.
let myStr = "How many Bs are there? BBBBB";
console.log(countBs(myStr));

let bunchOfBs = "BumBleBee BuBBle tea Blob lowercaseb";
console.log(countBs(bunchOfBs));

// This is needed for automated testing (more on that later)
module.exports = countBs;
