// alert("Hello from JS File"); 

console.log("Hello from JS File");

let myName = "Abhay Sharma";

myName = "Abhay";
console.log(myName);

// cosnt is used to create variables that cannot be reassigned.
const myAddress = "Earth"

// trying to reassign a const variable will throw an error
// myAddress = "Mars"

console.log(myAddress)

// Concatenation, using the + operator to combine strings and variables
console.log("My name is " + myName + " I live on " + myAddress);

const numA = 10;
const numB = 5;

// the + operator can also be used to add numbers together
console.log(numA + numB);

/* 
    concatenation can also be used to combine strings and numbers, 
    but the numbers will be converted to strings first
*/
console.log("The sum of numA and numB is " + (numA + numB));

// assignning value of numA + numB to a new variable
const numC = numA + numB;
console.log("The sum of numA and numB is " + numC);

// Template literals: another way to combine strings and variables
// using backticks and ${}
console.log(`The sum of numA and numB is ${numC}`);

// boolean values can be used to represent true or false
// booleans are written without quotes
let petOwner = true;

// using concatenation to combine strings and booleans
console.log("Is "+myName+" a pet owner? "+petOwner);

console.log(`is number A greater than number B? ${numA < numB}`);

// logical operators can be used to combine expressions and return a boolean value

// && is the logical AND operator, it returns true if both expressions are true 
console.log(numB > numC && numA > numB);

// || is the logical OR operator, it returns true if either expression is true
console.log(numB > numC || numA > numB);
