function translatePigLatin(str) {
  let vowels = /^(a|e|i|o|u)/;  // Setting the vowels, and here with "^", I check if it's at the beginning.
  let result = str;  // I had to create a variable here to return different things in the two cases.

  if (vowels.test(result)) {
    result = result + "way";  // if the word starts with a letter vowel, just add "way" at the end.
  } else {
    let temp = str.split('');  // Separating the word in letters, in a single array, for better management.
    let tmp = [];  // This will contain the temp's consonants
    
    for (let i = -1; i < temp.length; i++, tmp.push(temp[i])) { // Starting in -1 because I don't know why this was not pushing me the first thing of the array.
      // Here is important, because the tmp.push inside of the for loop pushes until the for condition, so our return can be more than one consonant word.

      if (vowels.test(temp[i]) === false && vowels.test(temp[i+1]) === true) { // This stops when the next word is a vowel, starting from the beginning.
        tmp.push(temp[i]);
        tmp.pop() // Deleting an unknow undefined
        i = temp.length;  // Knowing the condition of the for loop ->
        // if the next word of the loop is a vowel, then I end the for loop (where i < temp.length) with this i = temp.length, so ends.
      }
    }
    
    temp.splice(0, tmp.length - 1);  // Just deleting to the temp's array of letters, the temp's consonants.
    temp = temp.concat(tmp);
    temp.pop();  // I don't know why the concat adds a undefined at the end of the array, but I fix this with this pop method...
    temp.push("ay");
    temp = temp.join('');
    result = temp;  // Here is why I set the result initial variable.
  }

  return result;
}

console.log(translatePigLatin("algorithm")); // algorithmway: Simple case (first letter it's a vowel) were adds "way" at the end...
console.log(translatePigLatin("paragraphs")); // aragraphspay: Just one beginning consonant, first case.
console.log(translatePigLatin("schwartz")); // artzschway: Here a case were are more than one beginning consonants.
console.log(translatePigLatin("rhythm")); // rhythmay: Special case test, were all are consonants, just return the same pharagraph with ay at the end.