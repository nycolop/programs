function likes(names) {
  let result = 'no one likes this';
  let leng = names.length;
  
  if (leng < 4) {
    switch (leng) {
    case 1:
      result = `${names[0]} likes this`;
      return result;
      break;
    case 2:
      result = `${names[0]} and ${names[1]} like this`;
      return result;
    case 3:
      result = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      return result;
    }
  } 
  else if (leng >= 4) {
    result = `${names[0]}, ${names[1]} and ${leng - 2} others like this`;
    return result;
  }
  
  return result;
}

console.log(likes([])); // -- must be "no one likes this"
console.log(likes(["Peter"])); // -- must be "Peter likes this"
console.log(likes(["Jacob", "Alex"])); // -- must be "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"])); // -- must be "Max, John and Mark like this
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // -- must be "Alex, Jacob and 2 others like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Elison", "Elian", "Peter", "George"])); // -- must be "Alex, Jacob and 6 others like this"