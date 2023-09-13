const subLength = (string, character) => {
  let counter = 0;
  
  for (let letter of string) {
    if (letter === character) {
      counter++;
    }
  }
  
  let counter_2 = 0;
  
  if (counter !== 2) {
    return 0;
  } else {
    let temp = string.split('')
    
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] !== character) {
        delete temp[i];
      }
      if (temp[i+1] === character) {
        break;
      }
    }
    
    for (let j = temp.length - 1; j > -1; j--) {
      if (temp[j] !== character) {
        delete temp[j];
      }
      if (temp[j-1] === character) {
        break;
      }
    }
    
    temp = temp.filter(el => /\w/.test(el));
    counter_2 = temp.length;
  }
  
  return counter_2;
}


subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0