/**
 Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */

 // minha solução
 {
  function convertHTML(str) {
    const convert = {
      '&':'&amp;',
      '<':'&lt;',
      '>':'&gt;',
      '"':'&quot;',
      "'":'&apos;'
    }
    const keys = Object.keys(convert)
    const strConverted = str.split('').map( letter => {
      let temp;
      keys.includes(letter) 
        ?  temp = letter.replace(letter, convert[letter])
        : temp = letter
      return temp
        
    }).join('');
  
    console.log(strConverted )
    return strConverted ;
  }
  
  convertHTML("Dolce & Gabbana");
 }

// solução do freecodecamp
{
  function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
  }
  
  // test here
  convertHTML("Dolce & Gabbana");
}