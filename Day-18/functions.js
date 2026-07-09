//find sum of squares of given a,b
// a = 5
// b = 4

let a = 1;
let b = 2;
// General Function
// console.log(sumOfSquares(a, b)); hosting -- we can call a function before declaration

function sumOfSquares(a, b) {
  return a * a + b * b;
}

console.log(sumOfSquares(a, b));

//function expression
let ans = function (x, y) {
  let res = x + y;
  return res;
};
console.log(ans(10, 20));

//arrow function
let sum = (x, y) => {
  let res = square(x) + square(y);
  return res;
};

//single arrow function

let square = (z) => z ** 2;

console.log(sum(5, 2));
