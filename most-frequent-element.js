function findMostFrequentElement(arr) {
    // Create an object to store the occurrences of each element
    const occurrences = {};
  
    // Loop through the array and count the occurrences of each element
    for (let num of arr) {
      if (occurrences[num]) {
        occurrences[num]++;
      } else {
        occurrences[num] = 1;
      }
    }
  
    // Find the element with the maximum occurrence
    let mostFrequentElement;
    let maxOccurrences = 0;
    for (let num in occurrences) {
      if (occurrences[num] > maxOccurrences) {
        mostFrequentElement = num;
        maxOccurrences = occurrences[num];
      }
    }
  
    return mostFrequentElement;
  }
  
  // Test the function with the example input
  const exampleInput = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const result = findMostFrequentElement(exampleInput);
  console.log(result); // Output: 3
  