// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
function sumOfNumbers(arrayOfNumbers) {
    let sum = 0;
for(let i = 0; i<= arrayOfNumbers.length-1; i++){
      sum += arrayOfNumbers[i];
   }
   return sum;
}

assignment.sumOfNumbers=sumOfNumbers;



function celsiusToFahrenheit(arrayOfNumbers) {
  let divisor = 9/5;
   for(let i = 0; i < arrayOfNumbers.length; i++){
     let multiplication = arrayOfNumbers[i] * divisor;
     let fahrenheit = multiplication + 32;
   let roundedValue = Math.trunc(fahrenheit);
      arrayOfNumbers[i] = roundedValue;
   }
   return arrayOfNumbers;
  }

assignment.celsiusToFahrenheit = celsiusToFahrenheit;
  
 


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

