// // Change the values and operators below to test your algorithm meets all conditions
// const x = 50;
// const expression1 = (x < 25);
// const expression2 = (x > 50);

// Write Your JavaScript Code Here
// Check if both expressions are true using &&

if(expression1 && expression2) {
    console.log("True ✅ True ✅");

// If both conditions are not true, check if expression1 is true
} else if (expression1) {
    console.log("True ✅ False ❌");

// If expression1 is not true, then check if expression2 is true
} else if (expression2) {
    console.log("False ❌ True ✅");

// If none of the conditions above evaluate to true, both expressions must be false
} else {
    console.log("False ❌ False ❌");
}

// let hungryLevel = 50;
// let isLunchTime = true;
// let lunchBill = 17;

// console.log(isLunchTime === true);

// if (true) console.log("I'm testing");

// if (isLunchTime === true) {
//     console.log ("im'm testing");
//     console.log("I'm learning");
// } else console.log(`I will ear later`);

// if (hungryLevel > 51) {
//     console.log(`I'm getting hungy`);
// }   else console.log(`not hungry at all`);

// if (lunchBill > 50) {
//     console.log(`the average price is $`);
// } else if(lunchBill >= 12 && lunchBill <= 16) {
//     console.log(`the average price is $$`);
// }   else if(lunchBill >= 17 && lunchBill <= 22) {
//     console.log(`the average price is $$$`);
// }   else if(lunchBill >= 23 && lunchBill <= 30) {
//     console.log(`the average price is $$$$`);
// }   else {
//     console.log(`the average price is caro pra caralho`);
// }
