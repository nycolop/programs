// First method: With indexOf, and using just a one for loop.
function destroyer(arr) {
    let valuesToDestroy = Object.values(arguments).slice(1);  // Because we want for our function to support an infinity amount of arguments, we need to use an special method and we will obtain those arguments without caring the amounts of them
    let result = [];
    // arr(argument) = [1, 2, 3, 1, 2, 3] , the first argument will not change and would be the array with the data.
    // valuesToDestroy(variable of arguments) = [ 2, 3 ]  // This only will change if you increase the amount of values to destroy.
    for (let i = 0; i < arr.length; i++) {
        if (valuesToDestroy.indexOf(arr[i]) === -1) { // We will iterate in our array, and will compare with
            result.push(arr[i]); // the values to destroy array, and we say with "indexOf" if the values to destroy aren't in the array, we will push that values of the array
            // to a new array. (Remember that indexOf returns "-1" if not find the given element.
        }  
    }

    return result;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));  // should return [1, 1]


// Forma 2: With a double for loop, and a filter method.
function destroyer(arr) {
    let valuesToDestroy = Object.values(arguments).slice(1);  // We do the same than above, but here I will put more arguments, and you can see that this method returns all those arguments in an new array.

    for (let i = 0; i < arr.length; i++) {  // There is not much to say about this double for loop.
      for (let j = 0; j < valuesToDestroy.length; j++) { // Basically we have the first loop that iterate for the array items, and the second for loop inside that iterates in the array values for destroying.
        if (arr[i] === valuesToDestroy[j]) {  // and a condition, if the item in the moment is equal to the value to destroy array in the moment too, then we delete them from the original array.
          delete arr[i];    // This will return something like (in the example of the above function) [1, , , , 1] (I don't know why)
        }
      }
    }  // This a bit more difficult, and I recommend personally the first function...

  return arr.filter(numbers => numbers !== null)  // And because of that you use this, and this will return correctly [1, 1]
}

destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") // should return [12,92,65].