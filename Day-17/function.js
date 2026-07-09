let student1 = {
  id: 1,
  name: "santhosh",
  branch: "cds",
};

let student2 = new Object({
  id: 2,
  name: "Ram",
  branch: "CSE",
});

console.log(student1);
console.log(student2);

//reading objects

console.log(student1.id);
console.log(student1.name);

//adding an item to existing object

student1.marks = "8.5";
console.log(student1);

//updating an item to existing object

student1.name = "vamsi";
console.log(student1);

//deleting an item
delete student1.branch;
console.log(student1);

for (let key in student1) {
  console.log(`${key} => ${student1[key]}`);
}
