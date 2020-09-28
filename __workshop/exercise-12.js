// Exercise 12
//
// Write a function that accepts an array of grades (numerical values), calculates the average
// and returns the appropriate letter grade. (see below)
//
// Here is how I calculate the grades
// less than 60 is an F
// less than 70 is an D
// less than 80 is an C
// less than 90 is an B
// less than or equal to 100 is an A
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function getLetterGrade(grades) {
  // grades is an array of numbers
  let sum = grades.reduce((acc, grade) => acc + grade);
  let avgGrade =  Math.round(sum / grades.length);
  if (avgGrade >= 90) {
    return "A";
  } else if (avgGrade >= 80) {
    return "B";
  } else if (avgGrade >= 70) {
    return "C";
  } else if (avgGrade >= 60) {
    return "D";
  } else {
    return "F";
  }
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]
const testGrades = [48, 95, 65, 48, 59, 78, 72, 65];
console.log(getLetterGrade(testGrades));

// Create more test cases.
const classGrades = [34, 57, 98, 67, 23, 78, 99, 87];
const topStudents = [100, 95, 91, 94, 99];
const lazyStudents = [43, 56, 23, 65];
console.log(getLetterGrade(classGrades));
console.log(getLetterGrade(topStudents));
console.log(getLetterGrade(lazyStudents));

// This is needed for automated testing (more on that later)
module.exports = getLetterGrade;
