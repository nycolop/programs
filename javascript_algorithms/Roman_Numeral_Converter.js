function convertToRoman(num) {
    let romanNumbers = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 50, 100, 500, 1000];
  
    function sumArray(array, n) {
    let result = 0;
    let arr = [];
  
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (!array.indexOf(n) || array[i] + array[j] === n && array[i] !== array[j]) {
          arr.push(array[i], array[j]);
          result = array[i] + array[j];
          console.log(arr)
        }
      }
    }
    return result !== 0 ? arr : false;
  
    }; // sumArray function.
  
    sumArray(romanNumbers, num);
  
}
  
convertToRoman(10);
convertToRoman(12);