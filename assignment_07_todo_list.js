const readlineSync = require('readline-sync');

// Global array to store tasks
const tasks = [];

/**
 * FEATURE 1 — Adds a new task to the list.
 * 
 * @param {string[]} tasks - The array of tasks.
 */
function addTask(tasks) {
  const task = readlineSync.question('Enter task: ').trim();
  if (task === '') {
    console.log('Error: Task description cannot be empty.');
    return;
  }
  tasks.push(task);
  console.log(`Task added: "${task}"`);
}

/**
 * FEATURE 2 — Displays all tasks currently in the list.
 * 
 * @param {string[]} tasks - The array of tasks.
 */
function viewTasks(tasks) {
  if (tasks.length === 0) {
    console.log('\nYour to-do list is empty.');
    return;
  }
  console.log('\nYour Tasks:');
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
  }
}

/**
 * FEATURE 3 — Deletes a task by its 1-based index.
 * 
 * @param {string[]} tasks - The array of tasks.
 */
function deleteTask(tasks) {
  if (tasks.length === 0) {
    console.log('\nNo tasks available to delete.');
    return;
  }

  viewTasks(tasks);
  const taskNum = readlineSync.questionInt('\nEnter task number to delete: ');

  if (taskNum < 1 || taskNum > tasks.length) {
    console.log('Error: Invalid task number.');
    return;
  }

  const removed = tasks.splice(taskNum - 1, 1);
  console.log(`Task "${removed[0]}" has been removed.`);
}

/**
 * Displays the main menu choices.
 */
function printMenu() {
  console.log('\n============================');
  console.log('       TO-DO LIST MENU      ');
  console.log('============================');
  console.log('1. Add task');
  console.log('2. View tasks');
  console.log('3. Delete task');
  console.log('4. Quit');
}

/**
 * Main application loop to handle menu selection and execution.
 */
function main() {
  let running = true;

  while (running) {
    printMenu();
    const choice = readlineSync.questionInt('Enter your choice (1-4): ');

    switch (choice) {
      case 1:
        addTask(tasks);
        break;
      case 2:
        viewTasks(tasks);
        break;
      case 3:
        deleteTask(tasks);
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