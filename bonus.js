const rs = require('readline-sync');

const operations2 = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  '%': (a, b) => a % b,
};

const validateInput = (operations) => {
  const input = rs.question('Enter an operation (e.g., "5 * 3"): ');
  const elements = input.split(' ');
  const num1 = parseInt(elements[0], 10);
  const num2 = parseInt(elements[2], 10);
  const operation = elements[1];

  const arrOperations = Object.keys(operations).join(', ');

  if (!operations[operation]) {
    console.log(`Invalid operation. Please use one of the following operators: ${arrOperations}`);
    return validateInput(operations);
  }

  if (isNaN(num1) || isNaN(num2)) {
    console.log('Invalid numbers. Please enter valid numbers.');
    return validateInput(operations);
  }

  if (operation === '/' && num2 === 0) {
    console.log('Division by zero is not allowed.');
    return validateInput(operations);
  }

  return [num1, num2, operation];
};

const calculateResult = (operations, operation, num1, num2) => {
  return operations[operation](num1, num2);
};

const calculator = (operations) => {
  const [num1, num2, operation] = validateInput(operations);
  const result = calculateResult(operations, operation, num1, num2);
  console.log(`${num1} ${operation} ${num2} = ${result}`);
};

calculator(operations2);
