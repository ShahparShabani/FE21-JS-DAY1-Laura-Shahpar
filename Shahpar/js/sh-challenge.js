document.write("<h1>Challenge</h1> <br> <br>");

// Multidimensional array
document.write("<h3>Multidimensional array</h3> <br>");

var myString = "Vienna is a nice city.";

var spaceInLog = " ";
var spaceInDoc = "&nbsp;";

// '&nbsp;'.repeat(4)
var myStringToArr = myString.split(" ");

let insertSpace = 0;
let insertSpaceInDoc = 5; // Since there is some space by default for the first word.

let multiArray = new Array(myStringToArr.length);
multiArray[0] = [myStringToArr[0]];
console.log(multiArray[0][0]);
document.write("<br>" + multiArray[0][0] + "<br>");

insertSpace += myStringToArr[0].length + 1;
console.log(insertSpace);
multiArray[1] = [spaceInLog.repeat(insertSpace) + myStringToArr[1]];
console.log(multiArray[1][0]);

multiArray[1] = [
  spaceInDoc.repeat(insertSpace + insertSpaceInDoc) + myStringToArr[1],
];
document.write(multiArray[1][0] + "<br>");

insertSpace += myStringToArr[1].length + 1;
multiArray[2] = [spaceInLog.repeat(insertSpace) + myStringToArr[2]];
console.log(multiArray[2][0]);

multiArray[2] = [
  spaceInDoc.repeat(insertSpace + insertSpaceInDoc) + myStringToArr[2],
];
document.write(multiArray[2][0] + "<br>");

insertSpace += myStringToArr[2].length + 1;
multiArray[3] = [spaceInLog.repeat(insertSpace) + myStringToArr[3]];
console.log(multiArray[3][0]);

multiArray[3] = [
  spaceInDoc.repeat(insertSpace + insertSpaceInDoc) + myStringToArr[3],
];
document.write(multiArray[3][0] + "<br>");

insertSpace += myStringToArr[3].length + 1;
multiArray[4] = [spaceInLog.repeat(insertSpace) + myStringToArr[4]];
console.log(multiArray[4][0]);

multiArray[4] = [
  spaceInDoc.repeat(insertSpace + insertSpaceInDoc) + myStringToArr[4],
];
document.write(multiArray[4][0]);

// document.write(multiArray);
// console.log(multiArray);

// Classmate solutions will not work in doc because in doc the space should be "&nbsp;"
// var a=[['Vienna',1,2,3,4],[1,2,'is',3,4],[1,2,3,'a',4],[1,2,3,4,'nice'],[1,"city",2,3,4]]; // A five dimensional array
// var s=" "; // A string with a space
// var space=0;//This variable stores the space between the strings
// console.log(a[0][0]);//logs the first string
// space=a[0][0].length+1;//increased by the length of the string plus an empty space
// console.log(s.repeat(space)+a[1][2]);// The string s is repeated 7 times and then the specified string is added.
// space=space+a[1][2].length+1;//As before by length of the string plus an empty space
// console.log(s.repeat(space)+a[2][3]);
// space=space+a[2][3].length+1;
// console.log(s.repeat(space)+a[3][4]);
// space=space+a[3][4].length+1;
// console.log(s.repeat(space)+a[4][1]);
// document.write(s.repeat(space)+a[4][1]); // will not add space in doc

document.write("<hr>");

// Multidimensional array
document.write("<h3>String Manipulation</h3> <br> <br>");

let string =
  "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";

document.write(string.split("$").join(" "));
