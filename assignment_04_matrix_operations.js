const readlineSync = require('readline-sync');

/**
 * Prints a matrix in a neat aligned grid format.
 * 
 * @param {number[][]} matrix - 2D array representing the matrix.
 */
function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].map(val => String(val).padStart(5, ' ')).join(''));
  }
}

/**
 * Helper function to read a matrix of size rows x cols from user input.
 * 
 * @param {number} rows - Number of rows.
 * @param {number} cols - Number of columns.
 * @param {string} label - Name of the matrix for prompt display.
 * @returns {number[][]} The constructed matrix.
 */
function readMatrix(rows, cols, label = 'Matrix') {
  console.log(`\nEnter values for ${label} (${rows}x${cols}):`);
  const matrix = [];
  
  for (let i = 0; i < rows; i++) {
    let rowInput = readlineSync.question(`Enter row ${i + 1}: `);
    let row = rowInput.trim().split(/\s+/).map(Number);

    // Validate input length and numeric values
    while (row.length !== cols || row.some(isNaN)) {
      console.log(`Error: Please enter exactly ${cols} numbers separated by spaces.`);
      rowInput = readlineSync.question(`Enter row ${i + 1}: `);
      row = rowInput.trim().split(/\s+/).map(Number);
    }

    matrix.push(row);
  }

  return matrix;
}

/**
 * PART A — Transposes an M x N matrix into an N x M matrix.
 * 
 * @param {number[][]} matrix - Input matrix (M x N).
 * @returns {number[][]} Transposed matrix (N x M).
 */
function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transposed = [];

  for (let j = 0; j < cols; j++) {
    const newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    transposed.push(newRow);
  }

  return transposed;
}

/**
 * PART B — Computes element-wise sum of two M x N matrices.
 * 
 * @param {number[][]} matrixA - First M x N matrix.
 * @param {number[][]} matrixB - Second M x N matrix.
 * @returns {number[][]} Sum matrix (M x N).
 */
function addMatrices(matrixA, matrixB) {
  const rows = matrixA.length;
  const cols = matrixA[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(row);
  }

  return result;
}

/**
 * PART C — Multiplies an M x N matrix A with an N x P matrix B.
 * 
 * @param {number[][]} matrixA - Matrix A (M x N).
 * @param {number[][]} matrixB - Matrix B (N x P).
 * @returns {number[][]} Product matrix (M x P).
 */
function multiplyMatrices(matrixA, matrixB) {
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const colsB = matrixB[0].length;
  const result = [];

  for (let i = 0; i < rowsA; i++) {
    const row = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }

  return result;
}

/**
 * Main driver program executing Parts A, B, and C sequentially.
 */
function main() {
  console.log('=====================================================');
  console.log(' PART A: MATRIX TRANSPOSE');
  console.log('=====================================================');
  const m = readlineSync.questionInt('Enter number of rows (M): ');
  const n = readlineSync.questionInt('Enter number of columns (N): ');

  if (m <= 0 || n <= 0) {
    console.log('Error: Matrix dimensions must be positive integers.');
    return;
  }

  const matrixA = readMatrix(m, n, 'Matrix A');
  
  console.log('\nOriginal Matrix:');
  printMatrix(matrixA);

  const transposed = transposeMatrix(matrixA);
  console.log('\nTransposed Matrix:');
  printMatrix(transposed);

  console.log('\n=====================================================');
  console.log(' PART B: MATRIX ADDITION');
  console.log('=====================================================');
  console.log(`Enter a second ${m}x${n} matrix to add to Matrix A:`);
  const matrixB = readMatrix(m, n, 'Matrix B');

  console.log('\nMatrix A + Matrix B:');
  const sumMatrix = addMatrices(matrixA, matrixB);
  printMatrix(sumMatrix);

  console.log('\n=====================================================');
  console.log(' PART C: MATRIX MULTIPLICATION');
  console.log('=====================================================');
  console.log(`Matrix A is size ${m}x${n}.`);
  const p = readlineSync.questionInt(`Enter number of columns for Matrix C (P) [size ${n}xP]: `);

  if (p <= 0) {
    console.log('Error: Columns must be a positive integer.');
    return;
  }

  const matrixC = readMatrix(n, p, 'Matrix C');

  console.log('\nMatrix A x Matrix C:');
  const productMatrix = multiplyMatrices(matrixA, matrixC);
  printMatrix(productMatrix);
}

// Run the program
main();