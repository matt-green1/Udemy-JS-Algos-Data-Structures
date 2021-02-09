function getDigit(num, i) {
    //absolute value is just to protect from negative numbers
    //flooring it rounds down
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  
  //finds digit count for a given number
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  //uses digitCount to find the number with the MOST digits
  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  
  mostDigits([23,567,89,12234324,90])
  
  
  
  
  
  
  
  
  
  
  