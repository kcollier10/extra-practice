// Create a function that takes the age and return the age in days.

function calcAge(age) {
    return age * 365;
}

// Create a function that calculates the chance of being an imposter. The formula for the chances of being an imposter is 100 × (i / p) where i is the imposter count and p is the player count. Make sure to round the value to the nearest integer and return the value as a percentage.

function imposterFormula(i, p) {
    return ((100 * (i / p)).toFixed(0)) + "%";
}

function imposterFormula(i, p) {
    return Math.round(100 * (i / p)) + '%';
}

// Create a function that takes voltage and current and returns the calculated power.

function circuitPower(voltage, current) {
    return voltage * current;
}

const circuitPower=(voltage, current)=>voltage*current;

// Create a function that takes a number as an argument and returns the square root of that number cubed.

function cubeSquareRoot(num) {
    return Math.sqrt(num * num * num);
}

const cubeSquareRoot = num => num ** 1.5;

// JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.
//
// Consider a && b:
//
// a is checked if it is true or false.
// If a is false, false is returned.
// b is checked if it is true or false.
// If b is false, false is returned.
// Otherwise, true is returned (as both a and b are therefore true ).
// The && operator will only return true for true && true.
//
// Make a function using the && operator.

and = (a, b) => a && b;

function and(a, b) {
    return a && b;
}

// Create a function that takes length and width and finds the perimeter of a rectangle.

function findPerimeter(length, width) {
    return (length * 2) + (width * 2);
}

const findPerimeter = (length, width) => 2 * (length + width);

// Write a function that takes an integer minutes and converts it to seconds.

const convert = (minutes) => minutes * 60

function convert(minutes) {
    return (minutes * 60);
}

// Write a function that converts hours into seconds.

function howManySeconds(hours) {
    return hours * 60 * 60;
}

// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function lessThanOrEqualToZero(num) {
    if (num <= 0) {
        return true;
    } else {
        return false;
    }
}

// Create a function that takes an array and returns the first element.

function getFirstValue(arr) {
    return arr[0];
}

// Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {
    return (base * height) / 2;
}

// Create a function to remove all null values from an array.

function removeNull(arr) {
    return arr.filter(Boolean);
}

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition(num) {
    return ++num
}

function addition(num) {
    return num + 1;
}

// Create a function that takes two numbers as arguments and return their sum.

function addition(a, b) {
    return a + b;
}

// different example

function addition(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Sorry but you didn't pass two numbers.";
    }
    return a + b;
}

// Create a function that takes a string and returns the word count. The string will be a sentence.

function countWords(str) {
    return str.split(" ").length;
}


function footballPoints(wins, draws, losses) {
    return (wins * 3) + (draws);
}

// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

function profitableGamble(prob, prize, pay) {
    if (prob * prize > pay) {
        return true;
    }
    return false;
}

// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

function animals(chickens, cows, pigs) {
    return (chickens * 2) + (cows * 4) + (pigs * 4);
}












