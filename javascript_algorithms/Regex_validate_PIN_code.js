function validatePIN(pin) {
  let regEx = /\d/;
  let arr = pin.split('');
  let temp = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (regEx.test(arr[i])) {
      temp++;
    } else {
      temp = -100;
    }
  }
  
  return temp === 6 || temp === 4 ? true : false;
}

validatePIN('4444'); // true
validatePIN('7478'); // true
validatePIN('4ba4'); // false
validatePIN('44445'); // false