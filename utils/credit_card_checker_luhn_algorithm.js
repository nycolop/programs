// --- My own version of implementing -> Luhn Algorithm ---

// -- PseudoCode --
// sum each 1 with himself
// if a number is greater than 9, then sum himself again eg: 18 = 1+8=9
// sum all numbers
// multiply by 9 the final sum
// result = result % 10 = check digit
// if result = 0 ? return true : return false


function validateCred(cardNumber) {
  // validateCred function =
  // no mutate, returns true or false
  // when digits of a valid credit card number

  let card = [...cardNumber]; // No mutate
  
  for (let i = 0; i < card.length; i++) {
    if (i % 2 === 0) {
      card[i] = card[i] * 2;
      if (card[i] >= 10) {
        card[i] = card[i] + '';
        card[i] = [parseInt(card[i][0]), parseInt(card[i][1])];
        card[i] = card[i].reduce((a, b) => a + b);
      }
    }
  };
  
  let result = (card.reduce((a, b) => a + b) * 9) % 10;

  return result === 0 ? true : false;
};

function findInvalidCards(cardNumbers) {
  // Checks in a nested array of numbers, whichs card-numbers are invalid or valid.
  // Returns another nested array with the invalid cards.
  
  let invalidCards = [];

  for (let i = 0; i < cardNumbers.length; i++) {
    if(validateCred(cardNumbers[i]) === false) {
      invalidCards.push(cardNumbers[i]);
    }
  }

  return invalidCards;
}

function idInvalidCardCompanies(invalidCards) {
  // Checks for the invalid card numbers their respective companies
  // Returns a new array with the companies names
  // If can't found the company then return “Company not found”.
  // Can't have repeated companies.
  // Amex = 3, Visa = 4, Mastercard = 5, Discover = 6

  let companies = [];

  for (let i = 0; i < invalidCards.length; i++) {
    if (invalidCards[i][0] === 3 && !companies.includes('Amex')) {
      companies.push('Amex');
    } else if (invalidCards[i][0] === 4 && !companies.includes('Visa')) {
      companies.push('Visa');
    } else if (invalidCards[i][0] === 5 && !companies.includes('Mastercard')) {
      companies.push('Mastercard');
    } else if (invalidCards[i][0] === 6 && !companies.includes('Discover')) {
      companies.push('Discover');
    }
    
    const reg = /3|4|5|6/;

    if (reg.test(!invalidCards[i][0])) {
      console.log('Company not found');
    }
  }

  return companies;
}



// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards