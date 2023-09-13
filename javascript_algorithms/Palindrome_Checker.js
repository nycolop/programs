function palindrome(str) {
    let regEx = /[a-zA-Z0-9]/;  // Filter (RegEx) for only pushing alphanumeric elements.
    let normal = [];  // Will contain the normal string
    let inverted = [];  // Will contain the inverted string
  
    for (let letter of str) {  // Loop for pushing only aplhanumeric elements.
      if (regEx.test(letter)) {
        normal.push(letter.toLowerCase());
      }
    }
  
    for (let i = 0; i < normal.length; i++) {  // Loop for pushing inverted string
      inverted.unshift(normal[i]);
    }
  
    normal = normal.join('');  // Just converting the array in a string.
    inverted = inverted.join('');
  
    return normal === inverted ? true : false;  // Just comparing the normal string without rare symbols with inverted string
    // and if are the same I will return true, otherwise false.
};
  
console.log(palindrome("five|\_/|four"));  // This will be false.
console.log(palindrome("0_0 (: /-\ :) 0-0"));  // But this one will be true.