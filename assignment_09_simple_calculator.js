const readlineSync = require('readline-sync');

/**
 * Adds two numbers.
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second. Returns null if dividing by zero.
 */
function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

/**
 * Computes the modulus (remainder) of first number divided by second. Returns null if modulus by zero.
 */
function modulus(a, b) {
  if (b === 0) return null;
  return a % b;
}

/**
 * Raises the first number to the power of the second number.
 */
function power(a, b) {
  return a ** b;
}

/**
 * Displays the main calculator menu options.
 */
function printMenu() {
  console.log('\n============================');
  console.log('       SIMPLE CALCULATOR    ');
  console.log('============================');
  console.log('1. Addition');
  console.log('2. Subtraction');
  console.log('3. Multiplication');
  console.log('4. Division');
  console.log('5. Modulus');
  console.log('6. Exponentiation');
  console.log('7. Quit');
}

/**
 * Main application loop to drive user interaction.
 */
function main() {
  let running = true;

  while (running) {
    printMenu();
    const choice = readlineSync.questionInt('Select an operation (1-7): ');

    if (choice === 7) {
      console.log('\nGoodbye!');
      running = false;
      continue;
    }

    if (choice < 1 || choice > 7) {
      console.log('Invalid choice! Please select a number between 1 and 7.');
      continue;
    }

    const num1 = readlineSync.questionFloat('Enter first number : ');
    const num2 = readlineSync.questionFloat('Enter second number: ');

    let result;
    let symbol;

    switch (choice) {
      case 1:
        result = add(num1, num2);
        symbol = '+';
        break;
      case 2:
        result = subtract(num1, num2);
        symbol = '-';
        break;
      case 3:
        result = multiply(num1, num2);
        symbol = '*';
        break;
      case 4:
        result = divide(num1, num2);
        symbol = '/';
        if (result === null) {
          console.log('Error: Cannot divide by zero.');
          continue;
        }
        break;
      case 5:
        result = modulus(num1, num2);
        symbol = '%';
        if (result === null) {
          console.log('Error: Cannot perform modulus by zero.');
          continue;
        }
        break;
      case 6:
        result = power(num1, num2);
        symbol = '**';
        break;
    }

    console.log(`Result: ${num1} ${symbol} ${num2} = ${result.toFixed(2)}`);
  }
}

// Run the program
main();