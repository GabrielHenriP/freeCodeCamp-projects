/**
 * Flatten a nested array. You must account for varying levels of nesting.
 */
// minha primeira tentativa - não deu certo
{
  function steamrollArray(arr) {
    let allIsNotArray;
    let resp = [];
  
    while(!allIsNotArray){
      
      arr = arr.flat()
      console.log(arr)
      allIsNotArray = arr.every( num => !Array.isArray(num))
      console.log(allIsNotArray)
    }
     return arr
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
}

// solução do freecode
{
  function steamrollArray(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
}