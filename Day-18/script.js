// let s = "I love python Full stack";
// let count = 0;
// let vowels = "aeiou";
// for (let i = 0; i < s.length; i++) {
//   if (vowels.includes(s[i])) {
//     count++;
//   }
// }
// console.log(count);

let s = "#";
if (s.length > 1) {
  console.log("Please give only single chatacter");
} else {
  let ascii = s.charCodeAt();
  if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
    console.log("Alphabet");
  } else if (ascii >= 48 && ascii <= 57) {
    console.log("Digit");
  } else {
    console.log("special symbol");
  }
}
