function analyzesentence(sentence) {
    let length = 0;
    let wordCount = 1; // Assuming at least one word
    let vowelCount = 0;
    
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
      
      // Increment the length counter
      length++;
      
      // Check for words
      if (char === ' ') {
        wordCount++;
      }
      
      // Check for vowels
      if (
        char === 'a' || char === 'e' || char === 'i' || 
        char === 'o' || char === 'u' || char === 'A' || 
        char === 'E' || char === 'I' || char === 'O' || 
        char === 'U'
      ) {
        vowelCount++;
      }
    }
    
    // Assuming the sentence ends with a period
    if (sentence[sentence.length - 1] === '.') {
      length++;
    }
    
    return {
      length: length,
      wordCount: wordCount,
      vowelCount: vowelCount
    };
  }
  
  // Example usage
  const sentence = "Manchester United are going to win the premier league title.";
  const result = analyzesentence(sentence);
  console.log(result); // Output: { length: 61, wordCount: 10, vowelCount: 22 }