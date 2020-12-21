/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.
*/

// minha solução
{
    function diffArray(arr1, arr2) {
  
        let newArr1 = arr2.filter( e => {
          return arr1.indexOf(e) == -1
        })
      
        let newArr2 = arr1.filter( e => {
          return arr2.indexOf(e) == -1
        })
      
        //console.log(arr1.indexOf(arr2[3]))
        console.log(newArr1.concat(newArr2))
        return newArr1.concat(newArr2);
      }
      
      diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
}

// soluçao 2 do freecodecamp
{
    function diffArray(arr1, arr2) {
        return arr1
          .concat(arr2)
          .filter(item => !arr1.includes(item) || !arr2.includes(item));
      }
      
      diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
}

// soluçao 3 do freecodecamp
{
    function diffArray(arr1, arr2) {
        return [...diff(arr1, arr2), ...diff(arr2, arr1)];
      
        function diff(a, b) {
          return a.filter(item => b.indexOf(item) === -1);
        }
      }
}