function getTicketPrice(age) {
    if (age <= 12) {
      return 10;
    } else if (age >= 13 && age <= 17) {
      return 15;
    } else {
      return 20;
    }
  }
  
  // Example usage
  console.log(getTicketPrice(10)); // 10
  console.log(getTicketPrice(15)); // 15
  console.log(getTicketPrice(25)); // 20