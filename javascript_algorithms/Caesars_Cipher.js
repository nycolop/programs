//  ----- Caesars cipher/decipher Root13 -----  //
function cipher(str) {
  let arr = str.split('');
  let regEx = /[A-Z]/;  // regEx maked to only convert the capital letters.

  // Loop for converting the letters in respective charCode.
  for (let i = 0; i < arr.length; i++) {
    if (regEx.test(arr[i])) {
      arr[i] = arr[i].charCodeAt();
    }
  };

  // Loop for aplying "ROT13" to the letters
  for (let j = 0; j < arr.length; j++) {
    if (typeof arr[j] === 'number') {  // Only iterating to the numbers from the array
      if (90 - arr[j] < 13) {  // If the difference between 90 and the element is less than 13. ex: 90 - 83 = 7
        let tmp;
        let temp = 12;  // Track of Root13 implement. (It's 12 because with 13 gives me a letter more than the real).
        tmp = 90 - arr[j];  // tmp = difference between 90 and the element. ex: 90 - 83 = 7
        arr[j] = arr[j] + tmp;  // I will sum the element the difference between 90 and the element.
        temp = temp - tmp;  // This will be like a remainder: Resting to (temp => 12) the sum of above to the element. This will be the track.
        arr[j] = 65;  // Starting again because the element exceeds 90 from char code.
        arr[j] = arr[j] + temp;  // And just sum the track of temp.
      } else {
        arr[j] = arr[j] + 13;  // Otherwise just sum that element to 13. ex: 66 + 13 = 79 (Don't exceeds 90)
      }
      // Here we set 90 like maximum because 90 it's the last letter of the alphabet, of course, "Z".
      // And the minimum it's 65, and that's => "A"
      // This in "Charcode", obviously.
    }
  };
  
  // O:[ 'F', 'R', 'E', 'E', ' ', 'C', 'O', 'D', 'E', ' ', 'C', 'A', 'M', 'P' ]
  // O:[ 70, 82, 69, 69, ' ', 67, 79, 68, 69, ' ', 67, 65, 77, 80 ]
  // C:[ 83, 70, 82, 82, ' ', 80, 67, 81, 82, ' ', 80, 78, 90, 68 ]
  // C:[ 'S', 'F', 'R', 'R', ' ', 'P', 'C', 'Q', 'R', ' ', 'P', 'N', 'Z', 'D' ]

  // Loop for converting the charCode's numbers in result letters.
  for (let x = 0; x < arr.length; x++) {
    if (typeof arr[x] === 'number') {
      arr[x] = String.fromCharCode(arr[x]);
    }
  };


  return arr.join('');
}

console.log(cipher("¡FIESTA!"));  // ¡SVRFGN!
console.log(cipher("FREE CODE CAMP"));  // SERR PBQR PNZC
console.log(cipher("SERR CVMMN!"));  // FREE PIZZA!