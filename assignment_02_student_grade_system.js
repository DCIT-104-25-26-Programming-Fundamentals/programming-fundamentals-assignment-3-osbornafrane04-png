const readlineSync = require('readline-sync');

/**
 * Determines the letter grade for a given numeric score.
 * 
 * @param {number} score - Student's numeric score (0 to 100).
 * @returns {string|null} The letter grade ('A', 'B', 'C', 'D', 'F') or null if out of range.
 */
function getGrade(score) {
  // Validate range (0 to 100 inclusive)
  if (score < 0 || score > 100) {
    return null;
  }

  // Determine grade based on scale
  if (score >= 80) {
    return 'A';
  } else if (score >= 70) {
    return 'B';
  } else if (score >= 60) {
    return 'C';
  } else if (score >= 50) {
    return 'D';
  } else {
    return 'F';
  }
}

/**
 * Main function to prompt for input, calculate grade, and output result.
 */
function main() {
  const score = readlineSync.questionInt('Enter student score (0-100): ');
  const grade = getGrade(score);

  if (grade === null) {
    console.log('Error: Score must be between 0 and 100.');
  } else {
    console.log(`Grade: ${grade}`);
  }
}

// Run the main program
main();