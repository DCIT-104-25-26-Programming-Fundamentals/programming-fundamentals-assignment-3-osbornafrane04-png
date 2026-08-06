const readlineSync = require('readline-sync');

/**
 * PART A — Generates and prints the first N terms of the Fibonacci sequence.
 * 
 * @param {number} n - The number of terms to display.
 */
function printFibonacciSequence(n) {
  if (n <= 0) {
    console.log('Error: N must be a positive integer (greater than 0).');
    return;
  }

  const sequence = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    sequence.push(a);
    const next = a + b;
    a = b;
    b = next;
  }

  console.log(`Fibonacci sequence: ${sequence.join(' ')}`);
}

/**
 * PART B — Checks if a given number belongs to the Fibonacci sequence iteratively.
 * 
 * @param {number} target - The number to check.
 * @returns {boolean} True if target is a Fibonacci number, false otherwise.
 */
function isFibonacciNumber(target) {
  if (target < 0) return false;

  let a = 0;
  let b = 1;

  if (target === 0 || target === 1) return true;

  while (b < target) {
    const next = a + b;
    a = b;
    b = next;
  }

  return b === target;
}

/**
 * Main driver program executing Part A and Part B sequentially.
 */
function main() {
  console.log('=====================================================');
  console.log(' PART A: PRINT FIRST N TERMS');
  console.log('=====================================================');
  const count = readlineSync.questionInt('How many terms? ');
  printFibonacciSequence(count);

  console.log('\n=====================================================');
  console.log(' PART B: CHECK FIBONACCI NUMBER');
  console.log('=====================================================');
  const checkNum = readlineSync.questionInt('Enter a number to check: ');

  if (isFibonacciNumber(checkNum)) {
    console.log(`${checkNum} is a Fibonacci number.`);
  } else {
    console.log(`${checkNum} is NOT a Fibonacci number.`);
  }
}

// Run the program
main();