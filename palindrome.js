function isPalindrome(str) {
    // Base case: empty string or single-character string is a palindrome
    if (str.length <= 1) {
      return true;
    }
  
    // Check if the first and last characters match, then recursively check the remaining substring
    if (str.charAt(0) === str.charAt(str.length - 1)) {
      return isPalindrome(str.slice(1, str.length - 1));
    }
  
    return false;
  }
  
  // Example usage
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
  console.log(isPalindrome("hello")); // false