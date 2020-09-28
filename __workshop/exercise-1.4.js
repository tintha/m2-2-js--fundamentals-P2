// Exercise 1.4
//
// Write a function that accepts a name and returns the name as first name and last name.
// Remove the middle name, if there is one.
// - This function should still work if there is no middle name.
// - If the string has only one name, e.g. "Adele", it should return that name
// -  If there are multiple middle names this function should still work.
//
// Example:
// shortenName(Morty Antoine Smith") should return "Morty Smith"
// shortenName(Morty Smith") should return "Morty Smith"
// shortenName(Morty") should return "Morty"
// shortenName(Morty Antoine Fred Bacon Smith") should return "Morty Smith"

//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function removeMiddleName(string) {
  // complete the function
  const inputArray = string.split(" ");
  const newName = [];
  if (inputArray.length > 2) {
    newName.push(inputArray[0]);
    newName.push(inputArray[inputArray.length -1]);    
    return newName.join(" ");   
  } else {
    return inputArray.join(" ");
  }
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.
console.log(removeMiddleName("Morty Antoine Smith"));

// Create more test examples.
console.log(removeMiddleName("Morty Smith"));
console.log(removeMiddleName("Antoine"));

// This is needed for automated testing (more on that later)
module.exports = removeMiddleName;
