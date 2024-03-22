// WRITE YOUR CODE BELOW
// 1 Creare an array with at least 5 classmates
// create a greeting For loop
// create a for of loop - "Greate to see you again" - classmate name - logs into the CONSOLE each student on the array'

students = ["marcio", "sara", "anthony", "renee", "olive"];
console.log(students.length);
console.log("-----------------------------------");
console.log('For loop');

for (let i = 0; i < students.length; i++) {
    console.log(`Grate to see you ${(students[i])}`);   
} 

console.log("-----------------------------------");
console.log('For-of loop');


for (const student of students) {
    console.log(`Great to see you, ${student}!`);
}

