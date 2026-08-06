const readlineSync = require('readline-sync');

/**
 * PART A — Prints the multiplication table for a single number from 1 to 12.
 * 
 * @param {number} num - The number to generate the table for.
 */
function printSingleTable(num) {
  console.log(`\nMultiplication Table for ${num}:`);
  for (let i = 1; i <= 12; i++) {
    const multiplier = String(i).padStart(2, ' ');
    console.log(`${num}  x  ${multiplier} =  ${num * i}`);
  }
}

/**
 * PART B — Prints multiplication tables for every number from 1 to N.
 * 
 * @param {number} n - The upper limit for tables.
 */
function printTablesUpToN(n) {
  for (let i = 1; i <= n; i++) {
    printSingleTable(i);
    if (i < n) {
      console.log('---------------------------');
    }
  }
}

/**
 * Main driver function to handle user prompts and execute both parts.
 */
function main() {
  console.log('=====================================================');
  console.log(' PART A: SINGLE TABLE');
  console.log('=====================================================');
  const num = readlineSync.questionInt('Enter a number: ');

  if (num <= 0) {
    console.log('Error: Please enter a positive integer (greater than 0).');
    return;
  }

  printSingleTable(num);

  console.log('\n=====================================================');
  console.log(' PART B: TABLES FROM 1 TO N');
  console.log('=====================================================');
  const limit = readlineSync.questionInt('Enter N for full tables (1 to N): ');

  if (limit <= 0) {
    console.log('Error: Please enter a positive integer (greater than 0).');
    return;
  }

  printTablesUpToN(limit);
}

// Run the program
main();