function sumAll(arr) {
  
  let greater = 0;  // Starting all values = 0
  let minor = 0;  // This would be used like temp var's and not like the final result.

  if (arr.length === 2 && arr[0] > arr[1]) {
    greater = arr[0];  // If the first number is greater than the second number in range, then I set
    minor = arr[1];    // the greater value equal to the first number, and the minor equal to the second number.
  } else if (arr.length === 2 && arr[1] > arr[0]) {
    greater = arr[1];  // Here is the same than the explained above, but the other way around.
    minor = arr[0];
  } else {
    return "Error: a possible issue can be that you entered more than two number ranges.";  
    // Algorithm explained error: 
    // returning an error in some cases like the range array length is greater than 2 (Ej: 3)
  }

  let result = 0;  // Starting the result var, this will be returned from the function.

  for (let i = minor; i <= greater; i++) {
    result += i; // This is simple, I start "i" and I will set this i equal to the minor value generated above
    // Do you remember the result variable started earlier? I will sum the numbers in difference between i and "greater var"
  }
  
  return result; // Finally displaying the result var.
}

console.log(sumAll([1, 4]));  // An example of usage...
console.log(1 + 2 + 3 + 4 + " Real Result"); // This is what the computer will do with the algorithm.
// Both results will be: 10.