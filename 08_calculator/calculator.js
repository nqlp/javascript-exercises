const add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const sum = function (array) {
  if (array.length === 0) {
    return 0;
  }

  else if (array.length === 1) {
    return array[0];
  }

  // computes the sum of an array of many numbers
  else if (array.length > 2) {
    return array.reduce((acc, curr) => acc + curr);
  }

  else {
    for (let i = 0; i < array.length; i++) {
      return array[i] + array[i + 1];
    }
  }
};

const multiply = function (array) {
  if (array.length > 2) {
    return array.reduce((acc, curr) => acc * curr);
  }

  for (let i = 0; i < array.length; i++) {
    return array[i] * array[i + 1];
  }
};

const power = function (firstNumber, secondNumber) {
  return Math.pow(firstNumber, secondNumber);
};

const factorial = function (number) {
  if (number === 0) {
    return 1;
  }
  else {
    return number * factorial(number - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
