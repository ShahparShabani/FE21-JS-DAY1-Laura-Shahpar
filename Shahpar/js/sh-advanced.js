document.write("<h1>Advanced</h1> <br> <br>");

// Exercise 1 - Sum
document.write("<h3>Exercise 1 : Sum</h3> <br> <br>");

var a = 7;

var b = 14;

var c = "21";

var d = "36";

var e = 42;

var sum = a + b + Number(c) + Number(36) + e;

// console.log("Sum is: " + sum);
document.write("Sum is: " + sum + "<br><br> <hr>");

// Exercise 1 - Multiply
document.write("<h3>Exercise 1 : Multiply</h3> <br> <br>");

var f = "1";

var g = 15;

var h = 8;

var i = "1";

var multiply = Number(f) * g * h * Number(i);

// console.log("Multiply is: " + multiply);
document.write("Multiply is: " + multiply + "<br> <br><hr><br>");

// Divide
var divide = sum / multiply;
document.write("Divide is: " + divide + "<br> <br><hr>");

// Exercise 2
console.log("Exercise 2 :");

var array = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 25, 7],
    [21, 4, 6, 17],
    [3, 5, 26, 3],
];

console.log(
    array[1][1] +
    ", " +
    array[4][2] +
    ", " +
    array[5][3] +
    ", " +
    array[2][3] +
    ", " +
    array[2][1]
);
