const readlineSync = require('readline-sync');

// Global array to store student records
const students = [];

/**
 * Helper function to compute the numeric average of an array of scores.
 * 
 * @param {number[]} scores - Array of numerical scores.
 * @returns {number} The arithmetic mean.
 */
function computeAverage(scores) {
  if (!scores || scores.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

/**
 * FEATURE 1 — Prompts for student information and adds a new record object.
 * 
 * @param {object[]} students - The list of student objects.
 */
function addStudent(students) {
  console.log('\n--- Add Student Record ---');
  const name = readlineSync.question('Student name: ').trim();
  if (name === '') {
    console.log('Error: Student name cannot be empty.');
    return;
  }

  const id = readlineSync.questionInt('Student ID: ');

  // Verify that the student ID is unique
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      console.log(`Error: Student ID ${id} already exists.`);
      return;
    }
  }

  const count = readlineSync.questionInt('How many scores? ');
  if (count <= 0) {
    console.log('Error: Number of scores must be greater than 0.');
    return;
  }

  const scores = [];
  for (let i = 0; i < count; i++) {
    const score = readlineSync.questionFloat(`Enter score ${i + 1}: `);
    scores.push(score);
  }

  const studentObj = {
    name: name,
    id: id,
    scores: scores
  };

  students.push(studentObj);
  console.log(`Student "${name}" added successfully.`);
}

/**
 * FEATURE 2 — Prints all student records in a formatted overview.
 * 
 * @param {object[]} students - The list of student objects.
 */
function displayAllStudents(students) {
  if (students.length === 0) {
    console.log('\nNo student records found.');
    return;
  }

  console.log('\n================================================================');
  console.log('                      ALL STUDENT RECORDS                       ');
  console.log('================================================================');

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const avg = computeAverage(student.scores).toFixed(2);
    const scoresList = student.scores.join(', ');

    console.log(`ID: ${student.id} | Name: ${student.name}`);
    console.log(`Scores: [${scoresList}] | Average: ${avg}`);
    console.log('----------------------------------------------------------------');
  }
}

/**
 * FEATURE 3 — Finds a student by ID and prints their average score.
 * 
 * @param {object[]} students - The list of student objects.
 */
function calculateSpecificAverage(students) {
  if (students.length === 0) {
    console.log('\nNo student records available.');
    return;
  }

  const searchId = readlineSync.questionInt('Enter student ID: ');

  let foundStudent = null;
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === searchId) {
      foundStudent = students[i];
      break;
    }
  }

  if (!foundStudent) {
    console.log(`Error: Student with ID ${searchId} was not found.`);
    return;
  }

  const avg = computeAverage(foundStudent.scores).toFixed(2);
  console.log(`${foundStudent.name}'s average score: ${avg}`);
}

/**
 * Prints the main menu choices.
 */
function printMenu() {
  console.log('\n================================');
  console.log('   STUDENT RECORD SYSTEM MENU   ');
  console.log('================================');
  console.log('1. Add student');
  console.log('2. Display all students');
  console.log('3. Calculate average score');
  console.log('4. Quit');
}

/**
 * Main loop controlling program execution and user menu choices.
 */
function main() {
  let running = true;

  while (running) {
    printMenu();
    const choice = readlineSync.questionInt('Enter your choice (1-4): ');

    switch (choice) {
      case 1:
        addStudent(students);
        break;
      case 2:
        displayAllStudents(students);
        break;
      case 3:
        calculateSpecificAverage(students);
        break;
      case 4:
        console.log('\nGoodbye!');
        running = false;
        break;
      default:
        console.log('Invalid choice! Please enter a number between 1 and 4.');
    }
  }
}

// Run the program
main();