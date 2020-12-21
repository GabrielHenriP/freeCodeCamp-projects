/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

*/
// minha solução
{
    function sumAll(arr) {
        let c = 0;
        if(arr[0] < arr[1]){
          for(let i = arr[0]; i <= arr[1]; i++ ){
            c += i
          }
          console.log(c); return c
        }else {
          for(let i = arr[1]; i <= arr[0]; i++ ){
            c += i
          }
          console.log(c); return c
        }
        
      }
      
      sumAll([1, 4]);
}

//solução 1 do freecodecamp
{
    function sumAll(arr) {
        var max = Math.max(arr[0], arr[1]);
        var min = Math.min(arr[0], arr[1]);
        var temp = 0;
        for (var i = min; i <= max; i++) {
          temp += i;
        }
        return temp;
      }
      
      sumAll([1, 4]);
}

//solução 3 do freecodecamp
{
    function sumAll(arr) {
        var sum = 0;
        for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
          sum += i;
        }
        return sum;
      }
      
      sumAll([1, 4]);
}