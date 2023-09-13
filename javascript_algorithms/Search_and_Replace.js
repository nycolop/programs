function myReplace(str, before, after) {
    let temp = str.split(' ');
    let index = temp.indexOf(before);
    let reg = /^[A-Z]/;  // Knowing if starts with uppercase
    
    if (reg.test(before)) {
      let temp = after.split('');
      temp = after[0].toUpperCase();
      after = after.split('');
      after.shift();
      after.unshift(temp);
      after = after.join('')
    } else {
      after = after.toLowerCase();
    }
	temp[index] = after;
	
	return temp.join(' ');
}
  
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));  // A quick brown fox leaped over the lazy dog
console.log(myReplace("His name is Tom", "Tom", "john"));  // His name is John
console.log(myReplace("I think we should look up there", "up", "Down"));  // I think we should look down there