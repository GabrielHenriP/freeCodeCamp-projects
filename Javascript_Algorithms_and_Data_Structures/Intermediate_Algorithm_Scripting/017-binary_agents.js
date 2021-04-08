/**
 * Return an English translated sentence of the passed binary string.
    The binary string will be space separated.
 */
// minha solução
{
  function binaryAgent(str) {
    const arrayCode = str.split(' ').map( bin => {
  
      const resp = bin
      .split('')
      .map(n => Number(n))
      .reduce((acumulador, num, index, original) => {
        let expoente = (original.length - 1) - index
        return acumulador += num * Math.pow(2, expoente)
      }, 0)
      
      return resp
    })
    console.log(String.fromCharCode(...arrayCode))
    return String.fromCharCode(...arrayCode);
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
}

// solução do freecode 
{
  function binaryAgent(str) {
    return String.fromCharCode(
      ...str.split(" ").map(function(char) {
        return parseInt(char, 2);
      })
    );
  }
  
  // test here
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  );
}