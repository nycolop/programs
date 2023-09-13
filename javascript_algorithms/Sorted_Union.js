function uniteUnique(arr) {
    let finalArr = [];
    arr = Object.values(arguments);
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (finalArr.indexOf(arr[i][j]) === -1) {
          finalArr.push(arr[i][j]);
        }
      }
    }
  
    return finalArr;
}
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));