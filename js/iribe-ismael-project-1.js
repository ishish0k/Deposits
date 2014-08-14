//alert("JavaScript works!");

// Ismael Iribe
// SDI 1408
// Project 1
// First Foray into Javascript

// variables
var myHouse = "123 Elm Street";
var myFavoriteStore = "\"EB\" \n Gamestop";
var numOfMiles = 7.65;
// if in quotes it will make that number a string. if not it is a numbertype.

var construction = true;
// it is assuming it is a boolean and can be either true or false.
var accident = true
// My first outputs if you use above it will quote and create new line.
console.log("My house is at " + myHouse + ".");
console.log("I shop at " + myFavoriteStore + ".");
console.log("It is about " + numOfMiles + ".");
// conditionals
if (construction === true) {
    if (accident === true) {
        numOfMiles = numOfMiles + 2;
    console.log ("It is going to be " + numOfMiles + " miles to the store.")
    } else {
        colsole.log ("I still have to drive farther.");
    }
    console.log("I need to take different route.");
} else {
    console.log("I can get to buy games at store.");
}
// single = is a assignment== assigment quality === it is identitiy operator will check if data types are the same.