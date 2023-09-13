function fearNotLetter(str) {
  let arr = [];
  let result = undefined;

  for (let letters of str) {
    arr.push(letters.charCodeAt());
  }

  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i+1] - arr[i] === 2) {
      result = arr[i] + 1;
    }
  }

  return result !== undefined ? String.fromCharCode(result) : undefined;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // undefined
console.log(fearNotLetter("abcdefghjklmno")) // i