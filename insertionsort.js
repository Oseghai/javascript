function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
  
      // Move elements of arr[0..i-1], that are
      // greater than key, to one position ahead
      // of their current position
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
    return arr;
  }
  
  // Example usage
  const arr = [40, 80, 90, 6, 1, 30];
  console.log(insertionSort(arr)); // Output: [1, 6, 30, 40, 80, 90]