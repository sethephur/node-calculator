var rs = require('readline-sync');

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

const getOperationType = () => {
  rs.setDefaultOptions({ limit: ['+', '-', '*', '/'] });
  const operation = rs.question('What type of operation would you like to preform? (ex: "+" "-" "*" "/") ');
  return operation;
};

const calculateResult = (operations) => {
  const operation = getOperationType();
  console.log(`------- ${operation} -------`);
  let num1 = rs.questionInt('What is the first number? ');
  console.log(`${num1} ${operation} `);
  let num2 = rs.questionInt('What is the second number? ');

  if (operation == '/' && num2 == 0) {
    console.log('Division by zero is not allowed. ');
    return getOperationType();
  }
  console.log(`${num1} ${operation} ${num2} = ${operations[operation](num1, num2)}`);
};

calculateResult(operations);
