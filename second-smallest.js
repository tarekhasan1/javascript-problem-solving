function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return "Array must have at least two elements.";
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    if (secondSmallest === Infinity) {
      return "There is no second smallest element in the array.";
    }
  
    return secondSmallest;
  }
  
  // Test the function with an example array
  const exampleArray = [5, 2, 8, 1, 7, 3];
  const result = findSecondSmallest(exampleArray);
  console.log(result); // Output: 2
  