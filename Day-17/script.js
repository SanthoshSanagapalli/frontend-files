/// Non-Primitive-DataTypes

let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log("Length of arr is :", arr.length);

console.log("poping last element:  ", arr.pop()); //pop function is used to pop the last element of the array
console.log(arr);

console.log("pop first element: ", arr.shift()); // shift function is used to pop the fisrt element of the array
console.log(arr);

console.log("Pushing element at end: ", arr.push(100)); //adding element at the end of the array
console.log(arr);

console.log("Pushing element at front: ", arr.unshift(100)); // adding element at the front

console.log(arr);

//splice

let fruits = ["apple", "banana", "grapes"];
console.log(fruits);
//syntax => splice(startindex, delete_Count, item1, item2, item3...);

fruits.splice(1, 1, "Kiwi", "carrot", "mango");
console.log(fruits);

numbers = [1, 2, 3, 4, 5];

//general for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(`${numbers[i]} power 2 is : ${numbers[i] ** 2}`);
}

//for of loop

for (let item of numbers) {
  console.log(`${item} power 3 is : ${item ** 3}`);
}

//for in loop

for (let idx in numbers) {
  console.log(`${idx} power 4 is : ${idx ** 4}`);
}

//sprting techniques;

num = [55, 770, 22, 0, 1, 222, 11, 2, 1, 5, 8, 887];
num.sort();
console.log("sorted arr", num);

num.reverse();
console.log("reversed arr", num);

console.log(num.indexOf(55));

num2 = [1, 2, 3, 2, 1];
console.log(num2);
console.log(num2.lastIndexOf(1));

new_arr = num2.slice(1, 4);
console.log(new_arr);
num2[1] = 121;
console.log(num2);

//strings

let s1 = "single quote";
let s2 = "double quote's";
let s3 = `back tick`; //back tick is used to access another variable;

console.log(typeof s1);
console.log(typeof s2);
console.log(typeof s3);

let name = "Santhosh";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.length);
console.log(name[0]);
console.log(name.at(-1));

// for (let char of name) {
//   console.log(char);
// }

// slice(start_idx, end_idx)
new_s = name.slice(-3);
console.log(new_s);

new_s1 = name.substring(-3);
console.log(new_s1);
