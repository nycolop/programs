function whaleLanguage(input) {

  let vowels = ['a', 'e', 'i', 'o', 'u'];

  let resultArray = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (input[i] === vowels[j]) {
        resultArray.push(input[i]);
        if (input[i] === 'e') {
          resultArray.push(input[i]);
        } else if (input[i] === 'u') {
          resultArray.push(input[i]);
        }
      }
    }
  }

  return resultArray.join('').toUpperCase();
}

whaleLanguage('a whale of a deal!'); // 'AAEEOAEEA'