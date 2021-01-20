/*
 Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
 */
//minha solução
{
  function smallestCommons(arr) {
    let array =[];
    let array2 = [];
    const primes = [2,3,5,7,11,13, 17, 19, 23, 29, 31];
  
    if(!(arr[0] < arr[1])){
      let temp = arr[0];
      arr[0] = arr[1]
      arr[1] = temp
    }
  
    for(let i = arr[0]; i <= arr[1]; i++){
      array.push(i)
    }
    
    primes.forEach( (pnum) => {
      let over = false
      const allOne = array.every( num => num === 1)
      
      while(!over && !allOne){
        const push = array.every( num => {
          const rest = num % pnum
          return rest !== 0
        });
        if(!push){
          array2.push(pnum);
        }
        
        array.forEach( (num,index) => {
          if(num % pnum == 0 ){
            array[index] = num/pnum
          }
        });
        
        over = array.every( num => {
          const rest = num % pnum
          return rest !== 0
        });
      }    
    })
    
    //console.log(array2.reduce((total, num) => total*num))
    console.log(array2)
    return array2.reduce((total, num) => total*num);
  }
  
  smallestCommons([23,18]);
}

// solução do freecoecamp
{
  function smallestCommons(arr) {
    // Sort array from greater to lowest
    // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
    arr.sort(function(a, b) {
      return b - a;
    });
  
    // Create new array and add all values from greater to smaller from the
    // original array.
    var newArr = [];
    for (var i = arr[0]; i >= arr[1]; i--) {
      newArr.push(i);
    }
  
    // Variables needed declared outside the loops.
    var quot = 0;
    var loop = 1;
    var n;
  
    // Run code while n is not the same as the array length.
    do {
      quot = newArr[0] * loop * newArr[1];
      for (n = 2; n < newArr.length; n++) {
        if (quot % newArr[n] !== 0) {
          break;
        }
      }
  
      loop++;
    } while (n !== newArr.length);
  
    return quot;
  }
  
  // test here
  smallestCommons([1, 5]);
}
/*
 Code Explanation
Because of the possibility of the smallest common denominator being among the two biggest numbers, it makes sense to check those first, so sort the array.
Create a new array to sort all the numbers, newArr.
Use a descending for loop (var i = arr[0]; i >= arr[1]; i--) to add the numbers from the biggest to the smallest in the new array.
Declare the variables for the quotient so we can access them outside the loop:
the quotient that’ll be our smallest common multiple (quot)
the loop number we’re checking (loop)
the index of the array of numbers (n)
Use a do whileloop to check what we need whilen is not the same length as the new array.
In the do part, we are going to multiply the very first number, times the number of loops, times the second number (quot = newArr[0] * loop * newArr[1];).
The loop part will allows us to increase the number we’re checking beyond the greatest number we have without having to change the algorithm.
We enter a for loop that will go from n being 2 and going up by one (loop++) while it is smaller than the array with all the numbers (n < newArr.length).
If the quotient does not divide evenly (quot % newArr[n] !== 0), then stop the loop (break;). If it is even, then check for the next elements (n++) in the array until it is not even or we find our answer.
Outside the loop, increase the value of loop (loop++).
At the end of the loop return the quotient (return quot;).
Note: If the array only has two elements, then the for loop never gets used and the return value is the product of said numbers.
 */