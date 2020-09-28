// Exercise 11
//
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(grades) {
  // grades is an array of numbers
  let sum = grades.reduce((acc, grade) => acc + grade);
  return Math.round(sum / grades.length);
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Create more test cases.
const classGrades = [33, 87, 76, 90, 100, 45];
console.log(calculateAverage(classGrades));

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
