function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Example usage
  console.log(fibonacci(0)); // 0
  console.log(fibonacci(1)); // 1
  console.log(fibonacci(5)); // 5
  console.log(fibonacci(10)); // 55