function sumOfPositiveNumbers(arr) {
    let positiveNumbersSum = 0;
  
    for (let num of arr) {
      if (num > 0) {
        positiveNumbersSum += num;
      }
    }
  
    return positiveNumbersSum;
  }
  
  const exampleInput = [2, -5, 10, -3, 7];
  const result = sumOfPositiveNumbers(exampleInput);
  console.log(result);