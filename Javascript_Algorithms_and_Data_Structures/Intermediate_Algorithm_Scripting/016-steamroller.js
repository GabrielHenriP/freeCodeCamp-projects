/**
 * Flatten a nested array. You must account for varying levels of nesting.
 */
// minha primeira tentativa
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