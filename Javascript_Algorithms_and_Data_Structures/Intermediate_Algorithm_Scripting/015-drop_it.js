/**
 Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 */

 // minha solução
 {
  function dropElements(arr, func) {

    let indexSlice = [];
     arr.forEach( (num,index) => {
       if(func(num)){
         indexSlice.push(index)
       }
     })
     console.log(indexSlice)
     let resp;
    indexSlice.length === 0 
      ? resp = []
      : resp = arr.slice(indexSlice[0],arr.length)
  
    console.log(resp)
    return resp;
  }
  
  dropElements([6, 7, 3, 4, 5], function(n) {return n == 3; });
 }

 // solucao do freecodecamp
 {
  function dropElements(arr, func) {
    return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
  }
  
  // test here
  dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  });
 }