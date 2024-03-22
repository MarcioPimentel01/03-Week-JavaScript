// Creates an array containing names of five student in the class
const students = ["Sarah", "Orlando", "Heather", "Ismael", "Hung"];

// // Logs the length of the array
console.log(students.length);

console.log("-----------------------------------");
console.log('For loop');

// `for` loop starts at 0, runs while i is less than length of student array
// Increments by 1
for(let i = 0; i < students.length; i++) {
  // This statement will run each time the loop is executed
  console.log(`Great to see you, ${students[i]}!`);
}

console.log("-----------------------------------");
console.log('For-of loop');

// `for-of` loop executes once for each item in the array
for(const student of students) {
  // This statement will run each time the loop is executed
  console.log(`Great to see you, ${student}!`);
}


// interation aka For Loop
// Iterator = tracks the current Iteration
// section 1 - Defines your iterator
// section 2 loop condition expression - if true is going to loop
// section 3 iterator increment

for (let i = 0; i < students.length; i++) {
 console.log(`current student name: ${students[i]}`);
  
}
if (condition) {
  
} else {
  
}