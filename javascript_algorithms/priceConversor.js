export function priceConversor(number) {
  // Ex: in: 3000, out: '$3.000'
  
  let result;
  let temp = number + "";
  temp = temp.split("");
  let final;

  if (number >= 1000 && number < 10000) {
    final = ["$", ...temp.slice(0, 1), ".", ...temp.slice(1)];
    result = final.join("");
  } else if (number >= 10000 && number < 100000) {
    final = ["$", ...temp.slice(0, 2), ".", ...temp.slice(2)];
    result = final.join("");
  } else if (number >= 100000 && number < 1000000) {
    final = ["$", ...temp.slice(0, 3), ".", ...temp.slice(3)];
    result = final.join("");
  } else {
    result = number;
  }

  if (number < 1000) {
    final = ["$", ...temp.slice(0)];
    result = final.join("");
  }

  return result;
}
