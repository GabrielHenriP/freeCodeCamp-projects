/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.
*/

// minha solução 
{
    function destroyer(arr, ...rest) {

        let newArr = arr.filter( e => {
                return rest.indexOf(e) == -1
            })
      
        console.log(newArr)
        return newArr;
      }
      
      destroyer([1, 2, 3, 1, 2, 3], 2, 3);
}

// solução do freecodecamp
{
    const destroyer = (arr, ...valsToRemove) => arr.filter(elem => !valsToRemove.includes(elem));
}