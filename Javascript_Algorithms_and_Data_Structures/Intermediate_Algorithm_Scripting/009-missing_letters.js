//Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

// minha solução
{
  function fearNotLetter(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const firstIndex = alphabet.search(...str);
    const correctPiece = alphabet.slice(firstIndex, firstIndex + str.length)
  
    const missingLetter = correctPiece.split('').find( (letter, index) =>{
      return letter !== str[index]
    })
    
    return missingLetter;
  }
  
  fearNotLetter("ijklno");
}

// solução do freecodecamp
{
  function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
      /* code of current character */
      var code = str.charCodeAt(i);
  
      /* if code of current character is not equal to first character + no of iteration
          hence character has been escaped */
      if (code !== str.charCodeAt(0) + i) {
        /* if current character has escaped one character find previous char and return */
        return String.fromCharCode(code - 1);
      }
    }
    return undefined;
  }
  
  // test here
  fearNotLetter("abce");
}