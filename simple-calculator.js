function calculator(num1, operator, num2) {
    let result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        return 'Invalid operator';
    }
  
    return result;
  }
  
  // Test the calculator function
  const num1 = 5;
  const num2 = 2;
  const operator = '+';
  const result = calculator(num1, operator, num2);
  console.log(result); // Output: 7
  