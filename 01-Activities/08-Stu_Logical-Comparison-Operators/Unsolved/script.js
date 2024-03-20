const a = "50";
const b = 50;
const c = 100;
const d = c % b;
const e = c / 2;

const expression1 = (b === e);
const expression2 = (e < d);

// Use comparison operators so all expressions below log to the console as true
console.log(a === b);
// false
console.log(b !== e);
// false
console.log(c < b);
// false
console.log(d > 0);
// false

// Use logical operators so all expressions below log to the console as true
console.log(expression1 && expression2);
// false
console.log( !expression1 || expression2);
// false
