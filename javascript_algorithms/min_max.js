function minMax(arr, action) {
  'use strict';
  // Obtaining an arr of integers of first argument.
  // First this algorithm will do:
  // Putting in the min variable the minimun of all the numbers.
  // Putting in the max variable the maximun of all the numbers.
  let min = Infinity;
  let max = Infinity;
  let sumAllNumbers = 0;
  
  let args = Object.values(arguments);
  if (args == '') {
    return 'You need to provide an array of number(s) of first argument and a type of action of second argument'
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return 'First argument need to be number(s) in a array';
    }
  }
  
  for (let i = 0; i < arr.length; i++) {
    sumAllNumbers = sumAllNumbers + arr[i];
    if (arr[i] > min) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    };
  };
  // Solving a problem if all numbers are the same.
  if (max === Infinity) {
    max = arr[0];
  } else if (min === Infinity) {
    min = arr[0];
  }
  
  // And here will do three things:
  // In the average variable will put the average of all the numbers inside of the list
  // In the double variable will put the double of the maximun number in the list.
  // And In the treble variable will put the treble of the minimun number in the list.
  
  let average;
  let double;
  let treble;
  
  average = sumAllNumbers / arr.length;
  double = max * 2;
  treble = min * 3;
  
  // This algorithm will be capable of obtaining an exact word of second argument
  // The word can be all in upper case, or in lower case.
  // And will obtain a different return by this.
  // If I wouldn't put an if for undefined values, then I would get an undefined value, but I wanted to obtain a intuitive phrase.
  if (action !== undefined) {
    action = action.toLowerCase();
  } 
  else {
    return 'You must provide a second argument';
  }
  
  let result;
  
  switch (action) {
    case 'double':
      result = double;
      break;
    case 'treble':
      result = treble;
      break;
    case 'average':
      result = average;
      break;
    case 'maxnumber':
      result = max;
      break;
    case 'minnumber':
      result = min;
      break;
    case 'sum':
      result = sumAllNumbers;
      break;
    default:
      result = 'Actions can be: Double, Treble, Average, MaxNumber, MinNumber, Sum';
  }
  return result;
  
};

console.log(minMax([3], 'double'));