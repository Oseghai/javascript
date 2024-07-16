// Reverse string
function reverseString(str){
    return str.split('').reverse().join('');
}

console.log(reverseString('william'))

// Count characters
function countCharacters(str){
    return str.length;
}

console.log(countCharacters('savages'));

// Capitalize Words
function capitalizeWords(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(" ");
  
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    // Join the capitalized words back into a sentence
    const capitalizedSentence = capitalizedWords.join(" ");
  
    return capitalizedSentence;
  }

  console.log(capitalizeWords("twinkle twinkle little star"));

  // find maximum and minimum
  function findMax(arr){
    return Math.max(...arr);
  }

  console.log(findMax([10, 50, 70, 100, 9, 7]))

  function findMin(arr){
    return Math.min(...arr);
  }

  console.log(findMin([1, 6, 8, 9, 7]))

  // sum of array
  function sumArray(arr){
    return arr.reduce((acc, curr) => acc + curr, 0);
  }

  console.log(sumArray([100, 3, 49, 70, 90]))

  // filter array
  function filterArray(arr, condition){
    return arr.filter(condition);
  }

  console.log(filterArray([1, 3, 2, 8, 10, 4, 7], (num) => num % 2 ===0));

  // factorial
  function factorial(n){
    if (n === 0){
        return 1;
    }
    return n * factorial(n - 1);
  }

  console.log(factorial(6));

  // prime number check
  function isPrime(n){
    if (n <= 1){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % i === 0){
            return false;
        }
    }
    return true;
  }

  console.log(isPrime(2));

  // fibonacci sequence
  function fibonacci(n){
    if (n <= 1){
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  console.log(fibonacci(8));