//Var a = Math.floor(0.99)

var b = Math.random();

console.log(Math.floor(b * 10) + 1);

// function
function hi() {
  console.log("Hey there!!");
}
hi();

function iphone() {
  console.log("this is my iphone15 !!");
}
iphone();

//Exercise 1:
var a = 10;
var b = 50;

function add() {
  console.log(a + b);
}
add();

//Exercise 2:
var factor = "Rajinikanth";
var fplayer = "Dhoni";
var fmovie = "shivaji";

function favourite() {
  console.log("Favourite Actor : " + factor);
  console.log("Favourite Player :" + fplayer);
  console.log("Favourite Movie :" + fmovie);
}
favourite();
 
//Exercise 3: Function parameter
function area(l, b) {
  console.log(l * b);
}
area(20, 30);

function area(l, b) {
  var a = l * b;
  console.log("Area is:" + a);
}
var length = 20;
var breath = 30;
area(20, 30);

//Exercise 4: return statement

function add(a, b) {
  return a + b;
}

var total = add(10, 40);
console.log(total);

// Exercise 5:
if ((homework = true)) {
  console.log("Great job");
} else {
  console.log("Finish homework before playing");
}

//Exercise 6:
var season = "spring";

if (season == "spring") {
  console.log("Enjoy the blooming flowers.");
} else if (season == "summer") {
  console.log("Have fun in the sun.");
} else if (season == "autumn") {
  console.log("Admire the colorful leaves.");
} else if (season == "winter") {
  console.log("Bundle upand stay warm.");
}

// Exercise 7:
var number = 5;
if (number % 2 == 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}

// Exercise 8:
var character = "b";

if (
  character == "a" ||
  character == "e" ||
  character == "i" ||
  character == "o" ||
  character == "u"
) {
  console.log("It's a vowel");
} else {
  console.log("It's a consonant");
}

//Exercise 9:
for (count = 1; count <= 10; count = count + 2) {
  console.log(count);
}

for (count = 1; count <= 10; count = count + 1) {
  console.log("jai");
}

// Exercise 10: Reverse number
for (count = 10; count >= 1; count = count - 1) {
  console.log(count);
}

//Exercise 11: print even numbers
for (count = 1; count <= 10; count++) {
  if (count % 2 === 0) {
    console.log(count);
  }
}

// Exercise 12: 2 table
for (count = 1; count <= 10; count = count + 1) {
  console.log(count + "x2=" + count * 2);
}

//Exercise 13: Array

var fruit = ["Apple", "Orange", "Grape", "Banana"];
//console.log(fruit[0]);
//console.log(fruit[3]);

console.log(fruit.length);

//for (count = 0; count <= 4; count = count + 1)
for (count = 0; count < fruit.length; count = count + 1) {
  console.log(fruit[count]);
}
