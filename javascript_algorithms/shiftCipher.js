class ShiftCipher {
  constructor(shift) {
    this._shift = shift;
  }
  
  encrypt(plainText) {
    // returns capitalized, shift forwards based in the shift property.
    let modified = plainText.toUpperCase().split('');
    const shift = this._shift;
    const reg = /[A-Z]/;

    for (let i = 0; i < modified.length; i++) {
      let char = modified[i].charCodeAt();
      
      if (reg.test(modified[i])) {
        if (char + shift <= 90) {
          char = char + shift;
          modified[i] = String.fromCharCode(char);
        } else {
          let difference = 90 - char;
          let more = shift - difference;
          let tmp = 64 + more;
          modified[i] = String.fromCharCode(tmp);
        }
      }
    };
    
    return modified.join('');
  };
    
    
  decrypt(encryptedText) {
    let modified = encryptedText.toUpperCase().split('');
    const shift = this._shift;
    const reg = /[A-Z]/;
    
    for (let i = 0; i < modified.length; i++) {
      let char = modified[i].charCodeAt();
      
      if (reg.test(modified[i])) {
        if (char - shift >= 65) {
          char = char - shift;
          modified[i] = String.fromCharCode(char);
        } else {
          let difference = char - 65;
          let more = shift - difference;
          let tmp = 91 - more;
          modified[i] = String.fromCharCode(tmp);
        }
      }
    };
    
    return modified.join('').toLowerCase();
  };
  
};

const probe = new ShiftCipher(1);
probe.encrypt('I love to code!'); // 'K NQXG VQ EQFG!'
probe.decrypt('a');