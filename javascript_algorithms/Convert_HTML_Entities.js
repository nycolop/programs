//
// Ternary option
//
function convertHTML(str) {
  
    for (let letter of str) {
      letter === ">" ? str=str.replace(letter, "&gt;") 
      : letter === "<" ? str=str.replace(letter, "&lt;")
      : letter === "&" ? str=str.replace(letter, "&amp;") 
      : letter === "'" ? str=str.replace(letter, "&apos;")
      : letter === "\"" ? str=str.replace(letter, "&quot;") 
      : str
    }
    
    return str;
}
  
console.log(convertHTML("abc"));

//
// Switch option
//
function convertHTML(str) {
  
    for (let letter of str) {
        switch (letter) {
            case ">":
                str=str.replace(letter, "&gt;") 
                break;
            case "<":
                str=str.replace(letter, "&lt;") 
                break;
            case "&":
                str=str.replace(letter, "&amp;") 
                break;
            case "'":
                str=str.replace(letter, "&apos;") 
                break;
            case "\"":
                str=str.replace(letter, "&quot;") 
                break;
        }
    }
    
    return str;
}

console.log(convertHTML("><"));

//
// Switch option 3:
//
function convertHTML(str) {
    // Split by character to avoid problems.
  
    var temp = str.split("");
  
    // Since we are only checking for a few HTML elements, use a switch
  
    for (var i = 0; i < temp.length; i++) {
      switch (temp[i]) {
        case "<":
          temp[i] = "&lt;";
          break;
        case "&":
          temp[i] = "&amp;";
          break;
        case ">":
          temp[i] = "&gt;";
          break;
        case '"':
          temp[i] = "&quot;";
          break;
        case "'":
          temp[i] = "&apos;";
          break;
      }
    }
  
    temp = temp.join("");
    return temp;
}
  
//test here
convertHTML("Dolce & Gabbana");