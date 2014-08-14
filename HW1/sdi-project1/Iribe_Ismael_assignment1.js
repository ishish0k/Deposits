//alert("JavaScript works!");
// Ismael Iribe
//SDI0814
//Project 1

//Initial Variables

var shipmate = "Sailor";
var annoyingAlarm = "Sirius";
var myPrompt;
var myConfirmation = true;
var mySnoozePrompt;
var myAlarmPrompt;
var snooze = 10;
var timeHour = 6;
var timeMinutes = 30;
var newWakeUpTime = 31;


    console.log ("Wake up Mr. " + shipmate + "!" );
    console.log ("Your going to be late it's " + timeHour + ":" + timeMinutes);
    console.log ('"Ahh this ' + annoyingAlarm + ' AI know when I am having my best dreams?! It always interrupts me in the best part of my dream!!" says the Space sailor.');
myConfirmation = confirm ("Are you ready to wake up?");
    console.log ("Come on your going to be late");

myPrompt = prompt ("What is your name?");
    console.log ("Hey can you wake up" + myPrompt + "?");

myConfirmation = confirm("Did I interrupt your dream? Do you want some more time?");
if (myConfirmation === true) {
   console.log ("Ok, sorry Mr. Grumpy!");
} else {
  console.log ("I'll let you sleep for a while."); 
}

myAlarmPrompt = prompt ("What's your name again?");

if (myAlarmPrompt === myPrompt) {
   console.log ("Just making sure your not hungover too much.");
} else {
   console.log ("How much more time do you need to wear this off? You should stop drinking.");
}
mySnoozePrompt = prompt ("Give you how many more minutes . Enter from 1-10 minutes.");

console.log (mySnoozePrompt);
if (mySnoozePrompt < 10) {
    mySnoozePrompt = parseInt(mySnoozePrompt);
    console.log ('"Ok I will wake you up at ' + timeHour+ ":" + (mySnoozePrompt + newWakeUpTime) +' ok. It is ' + timeHour + ":" +newWakeUpTime + ' right now."');
} else {
    console.log ('"No you need to wake up sooner than that."')
}











//var firstNumber = 100;
//var secondNumber = 5;
//var outcome; don't use this

//var outcome = firstNumber / secondNumber

// return outcome;
//
//var division = function(firstNumber, secondNumber) { outcome = firstNumber / secondNumber
//    console.log("The outcome is " + outcome);
// division (100, 20);
// division(300, 50);
//
//};/
// var returnedOutcome = division(100, 20); 