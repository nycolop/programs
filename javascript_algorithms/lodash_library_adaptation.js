const _ = {
  clamp(number, lower, upper) {
    return number > upper ? upper 
    : number < lower ? lower
    : number;

    return clampedValue;
  },
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    } 
    if (start > end) {
      let temp = start;
      start = end;
      end = temp;
    }
    
    return number < start ? false 
    : number >= end ? false 
    : true
  },
  words(string) {
    return string.split(' ');
  },
  pad(string, length) {
    let howMuch = length - string.length;
    let right = Math.round(howMuch / 2);
    let left = Math.floor(howMuch / 2);
  
    string = string.split(' ');
  
    while (left >= 1) {
      string.unshift('');
      left--;
    }
  
    while (right >= 1) {
      string.push('')
      right--;
    }
  
    return string.join(' ');
  },
  has(object, key) {
    return object[key] !== undefined ? true : false;
  },
  invert(object) {
    for (let key in object) {
      let temp = key;
      let tmp = object[key];
      delete object[key];
      key = tmp;
      object[key] = temp;
    }
  
    return object;
  },
  findKey(object, predicate) {
    for (let key in object) {
      if (predicate(object[key])) {
        return key;
      } else {
        return undefined;
      }
    }
  },
  drop(array, number=1) {
    while(number >= 1) {
      array.shift();
      number--;
    }
  
    return array;
  },
  dropWhile(array, predicate) {
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i])) {
        break;
      } else {
        array.shift();
      }
    }
  
    return array;
  },
  chunk(arr, size=1) {
    arrayChunks = [];

    for (let i = 0; i < arr.length; i += size) {
      let temp = arr.slice(i, i+size);
      arrayChunks.push(temp);
    }
    return arrayChunks;
  }
};




// Do not write or modify code below this line.
module.exports = _;