// Exercise 1
document.write("Exercise 1: Sorting an array <br> <br>");

var carType = "Tesla, Audi, Renault, Volvo, Mazda, Fiat, Ferrari";


carTypeArray = carType.split(',');
document.write(carTypeArray + "<br><br>");

document.write("Sorted Array is: <br>" + carTypeArray.sort() + "<hr><br>");





// Exercise 2-1
document.write("Exercise 2-1 <br><br>");

let fruit = 'apple, banana, kiwi'
let fruitArr = fruit.split(',');
document.write("Original fruit array: <br>" + fruitArr + "<br><br>");

fruitArr.push('orange');
document.write(fruitArr + "<br>");

fruitArr.pop();
document.write(fruitArr + "<hr><br>");

// Exercise 2-2
document.write("Exercise 2-2 <br><br>");

let animal = 'monkey, horse, dog'
let animalArr = animal.split(',');
document.write("Original animal array: <br>" + animalArr + "<br><br>");

animalArr.sort();
document.write(animalArr + "<br><br>");

animalArr.unshift("cat");
document.write(animalArr + "<br><br>");

// Add space at the beggining of the last element if there is no space.
if (animalArr[animalArr.length -1].charAt(0) != " ") {
    animalArr[animalArr.length -1] = " " + animalArr[animalArr.length -1];
}
document.write(animalArr + "<br><br><hr>");


// Exercise 3
document.write("Exercise 3: <br> <br>");

let fruitS = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";

let fruitA = fruitS.split('/');

for(let i=0; i<fruitA.length-1 ; i++) {
    document.write(fruitA[i] + "<br>");
}

// Create a variable containing the following string:

// "mango/cherries/kiwi/grapes/pear/peach/orange/lemon"



// Create a program that will output each fruit on a separate line in the web browser:

// mango 

// cherries 

// kiwi 

// grapes

// pear 

// peach 

// orange 

// lemon