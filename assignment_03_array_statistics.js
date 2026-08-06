const readlineSync = require('readline-sync');

/**
 * Calculates the sum of all numbers in an array.
 * 
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The total sum.
 */
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

/**
 * Calculates the average of numbers in an array.
 * 
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The average value.
 */
function calculateAverage(arr) {
  if (arr.length === 0) return 0;
  return calculateSum(arr) / arr.length;
}

/**
 * Finds the maximum value in an array using a manual loop.
 * 
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The highest number.
 */
function findMaximum(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

/**
 * Finds the minimum value in an array using a manual loop.
 * 
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The lowest number.
 */
function findMinimum(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

/**
 * Main function to drive input, calculations, and formatted output.
 */
function main() {
  const count = readlineSync.questionInt('How many numbers? ');

  // Validate that N is a positive integer
  if (count <= 0) {
    console.log('Error: Number of elements must be greater than 0.');
    return;
  }

  const numbers = [];
  for (let i = 0; i < count; i++) {
    const num = readlineSync.questionFloat(`Enter number ${i + 1}: `);
    numbers.push(num);
  }

  const sum = calculateSum(numbers);
  const average = calculateAverage(numbers);
  const max = findMaximum(numbers);
  const min = findMinimum(numbers);

  console.log('\nResults:');
  console.log(`Sum:     ${sum}`);
  console.log(`Average: ${average}`);
  console.log(`Maximum: ${max}`);
  console.log(`Minimum: ${min}`);
}

// Run the program
main();