const a = "50";
const b = 50;
const c = 100;
const d = c % b;
const e = c / 2;

const expression1 = (b === e);
const expression2 = (e < d);

// Use comparison operators so all expressions below log to the console as true
console.log(a === b); // Check if the value of 'a' is exactly equal to the value of 'b', if true, log true, otherwise false.
// false
console.log(b !== e); // Check if the value of 'b' is not equal to the value of 'e', if true, log true, otherwise false.
// false
console.log(c < b); // Check if the value of 'c' is less than the value of 'b', if true, log true, otherwise false.
// false
console.log(d > 0); // Check if the value of 'd' is greater than 0, if true, log true, otherwise false.
// false

// Use logical operators so all expressions below log to the console as true
console.log(expression1 && expression2); // Log true if both 'expression1' and 'expression2' are true, otherwise false.
// false
console.log( !expression1 || expression2); // Log true if either 'expression1' is false or 'expression2' is true, otherwise false.
// false

