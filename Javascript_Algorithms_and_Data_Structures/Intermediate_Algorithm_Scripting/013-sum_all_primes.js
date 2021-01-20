/**
 A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
 */

 // minha solução 
 {
  function sumPrimes(num) {
    const arr = [2];
    let primes = [2];
    let nextNumber;

    while((nextNumber = arr[arr.length-1]+1) <= num){
      arr.push(nextNumber)// vetor de numero até num
    }
    // iteração no vetor de numeros até num
    arr.forEach( num2 => {
     let isPrime = primes.every( num3 => {
        return num2 % num3 !== 0
      })
      if(isPrime){
        primes.push(num2)
      }
    })
  
    const sumOfPrimes = primes.reduce((total, num2) => {
      return total + num2
    })
    console.log(primes)
    return  sumOfPrimes;
  }
  
  sumPrimes(10);
 }

//solução do freecodecamp
{
  function sumPrimes(num) {
    // Helper function to check primality
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
          return false;
      }
      return true;
    }
  
    // Check all numbers for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i))
        sum += i;
    }
    return sum;
  }
}