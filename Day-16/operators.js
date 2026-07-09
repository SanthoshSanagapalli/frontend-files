//alert("working");

// Arthematic operators:
console.log("Arithematic operators");
console.log("Addition", 10 + 30); //40
console.log("Subtraction", 30 - 10); //20
console.log("Division", 4 / 2); //2
console.log("Modulo", 10 % 30);
console.log("Multiplication", 10 * 30); //300
console.log("power", 10 ** 2); //1000

//assignment opearator

let a = 10;
a += 20;
console.log("a", a); //30

let name = "santhosh";
console.log(`my name is ${name}`); //my name is santhosh

//Relational Operators
//check only value

console.log(5 == 5); //true
console.log("10" == 10); //true

// checks both data type and value

console.log(5 === 5); //true
console.log("10" === 10); //false

console.log(10 !== "10"); //true

//logical operators:
console.log(true && true); //true
console.log(false && false); //false

console.log(true || false); //true
console.log(false || false); //false

console.log(!false); //true

//bitwise operator

console.log(5 & 3); //1

console.log(5 | 3); //7

console.log(~5); //-6

console.log(5 ^ 3); //6

//unary operators:

a = 10;
a++;
console.log(a); //11

b = 10;
b--;
console.log(b); //9

c = "5";
console.log(typeof c); //string
console.log(typeof -c); //number

//ternary operator:

name = 10 > 0 ? "santhosh" : "vamsi";
console.log(name); //santhosh

//nullish operator:

branch = null;
console.log(branch ?? "CDS"); //CDS

branch = "CSE";
console.log(branch ?? "CDS"); //CSE

let number = 10;
if (number % 2 == 0) {
  console.log("Even number");
} else {
  console.log("Odd Number");
}

// a = prompt();
// if (a == "rock") {
//   console.log("paper");
// } else if (a == "scissors") {
//   console.log("paper");
// } else if (a == "paper") {
//   console.log("rock");
// }

//loops

//for loop
console.log("For loop");
for (let i = 1; i < 11; i++) {
  console.log(i);
}

console.log("While loop");
let i = 10;
while (i >= 5) {
  console.log(i);
  i--;
}

do {
  console.log("do while");
} while (false);

while (false) {
  console.log("while");
}

console.log("While not executed");
