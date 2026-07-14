let di = document.getElementById("name");
di.style.color = "blue";
di.style.backgroundColor = "red ";

let de = document.getElementsByClassName("box");

for (let i = 0; i < de.length; i++) {
  de[i].style.backgroundColor = "blue";
}

let dt = document.getElementsByTagName("h2");
//for each loop
for (let item of dt) {
  demo(item);
}
function demo(item) {
  item.style.backgroundColor = "green";
  item.style.color = "white";
}

let qt = document.querySelector("h3");
qt.style.backgroundColor = "yellow";

let qi = document.querySelector("#head");
qi.style.backgroundColor = "brown";

let qc = document.querySelectorAll(".links");

for (let i = 0; i < qc.length; i++) {
  qc[i].style.backgroundColor = "lightBlue";
  qc[i].style.color = "red";
}

//class List
let b = document.getElementById("box");

function OnStyle() {
  b.classList.add("yellow");
}

function OFStyle() {
  b.classList.remove("yellow");
}

function oNoffstyleYellow() {
  b.classList.toggle("yellow");
}

function oNoffstyleBlack() {
  b.classList.toggle("black");
}
