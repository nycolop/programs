// Option 1: switch
function pairElement(str) {
  let arr = [];
  
  for (let letter of str) {
    switch (letter) {
      case "A":
      arr.push(["A", "T"]);
      break;
      case "T":
      arr.push(["T", "A"]);
      break;
      case "C":
      arr.push(["C", "G"])
      break;
      case "G":
      arr.push(["G", "C"])
      break;
    }
  }

  return arr;
}

console.log(pairElement("GCG")); // [["G", "C"], ["C", "G"], ["G", "C"]]

// Option 2: Ternary
function pairElement(str) {
  let arr = [];
  
  for (let letter of str) {
    letter === "A" ? arr.push(["A", "T"]) 
    : letter === "T" ? arr.push(["T", "A"]) 
    : letter === "C" ? arr.push(["C", "G"])
    : letter === "G" ? arr.push(["G", "C"])
    : [];
  }

  return arr;
}

console.log(pairElement("TTGAG")); // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]