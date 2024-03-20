let studentName = "Marcio"
console.log(studentName);

let studentAge = 47;
console.log(studentAge);

const teacherName = "Stanley";
console.log(teacherName);

studentName = "Pimentel";
studentAge = 48;

console.log(studentName + " " + studentAge);


// the following is very important
//Evaluation expression
function greet() {
    return "Hello, world!";
}

let add = `${greet}`;
console.log(add);

// // Declare variables using let
// let personName = 'Sakura';
// let pets = 3;
// let funFact = 'I like pineapple on my pizza.';

// // Use template literals to combine data and variable names in a single console log
// console.log(`My name is ${personName}.`);
// console.log(`I have ${pets} pet(s).`);
// console.log(`Fun fact: ${funFact}`);

// // When re-assigning variables, use variable name
// personName = 'Mateo';
// pets = 5;
// funFact = 'I was a yo-yo champ in third grade.';

// // Logs message with re-assigned values
// console.log(`My name is ${personName}.`);
// console.log(`I have ${pets} pet(s).`);
// console.log(`Fun fact: ${funFact}`);
