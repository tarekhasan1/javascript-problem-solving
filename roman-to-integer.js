function romanToInt(romanNumeral) {
    const romanNumeralsMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let result = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentNumeral = romanNumeral[i];
      const nextNumeral = romanNumeral[i + 1];
  
      if (romanNumeralsMap[currentNumeral] < romanNumeralsMap[nextNumeral]) {
        result -= romanNumeralsMap[currentNumeral];
      } else {
        result += romanNumeralsMap[currentNumeral];
      }
    }
  
    return result;
  }
  
  // Test the function with a Roman numeral input
  const romanNumeralInput = "XXI";
  const integerResult = romanToInt(romanNumeralInput);
  console.log(integerResult); // Output: 21
  