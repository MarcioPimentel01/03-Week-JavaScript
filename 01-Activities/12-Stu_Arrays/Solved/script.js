// // Creates an array containing names of five students in the class
// const students = ["Sarah", "Orlando", "Heather", "Ismael", "Hung"];

// // Logs length of the students array
// console.log(students.length);

// // Now, write a console log introducing each student
// console.log(`Welcome to the class, ${students[0]}.`);
// console.log(`Welcome to the class, ${students[1]}.`);
// console.log(`Welcome to the class, ${students[2]}.`);
// console.log(`Welcome to the class, ${students[3]}.`);
// console.log(`Welcome to the class, ${students[4]}.`);
   
// // Replace the first student in the array with a new student Bob.
// students[0] = "Bob";

// // Use your Javascript to check if "Bob" is the first element in the array
// if (students[0] === "Bob") {
//     console.log(`${students[0]} is in class!`);
// }


// So far we have been storing one piece of data in variables

const name = "Andre";
const pets = 3;
const isStudent = true;

// To store grups of data in a single variable, we use arrays

const names = ["marcio", "rodrigues", "pimentel", "domingos", "da silva", "figueiredo"];

//the entire array can be accessed by using the array's name.
console.log(names);

// to log a simple element, we use the name of the array with the index in brackets
console.log(names[1]);

// arrays are zero-indexerd, so the index of the first element in the array os 0.

console.log(names[0]);

// we can also use index to replace data in a arry

console.log(names[3]);

// replace "domingos" with "carter"

names[3] = "carter"

// logs out the fourth name " carter"

console.log(`the name of the fourth person in the is ${names[3]}`);




