//Ismael Iribe
//MDV 1408
//12Aug2014
var say = function(message) { console.log(message); };// shorten console.log
var decision = "Clean House"; // Boolean Variable
var myConfirmation = true;
var myPrompt;
var p = true; q = false, r = true;

myPrompt = prompt("Do you like having a clean or messy home?")
    if (myPrompt === "clean") {
        say("It is hard keeping up with these messy kids.")
    } else {
        say("How can you live like that?!")
    };

if ((p && r) || q) {
    say ("No matter how hard you try your home is always messy with kids.")
} else {
    say("I think your home is very clean for now.")
};

var toysInRoom = function(kidNames) {
    var toysRoom = [ "Bat", "Cars", "Dolls", "and blocks"];
    myConfirmation = confirm("Your kids left this in " + toysRoom + ".");
    if (myConfirmation === true) {
        say ("Looks like we still need to clean up.");
    } else {
        say ("Ok lets keep on cleaning.");
    };
    return kidNames;

}
var numOfKids = 4;// iterator, counter

while (numOfKids > 0) {
    console.log(numOfKids + " Rooms to clean after.");
    numOfKids--;
    
};/* will continue if you are using nothing
    * that is variable in your condition*/
    say("No more rooms to clean. Take a break.")

// for-loop
for (var numOfKids = 4; numOfKids > 0; numOfKids--){
       say(numOfKids + " rooms to clean.");
    
 };
 
    say("You finally cleaned this house.")

 
var cleanAllRooms = function(kidNumber) {}
var kidNames = [ "Jack", "Ilene", "Kaleb", "Ingrid"];
    agePerkid = [ 2, 7, 5, 10];//
    var cleanOneroom = function(){//scope where caraibles can or can't be used
        var kidName = kidNames[kidNumber],
        toysKidOwns = agePerkid[kidNumber];
        say("You need to pick up " + kidName + "'s "
            + toysKidOwns + " toys.");
    for (var toys = 0; toys < toysKidOwns; toys += 1) {
       var toysLeft = toysKidOwns - toys;
       say (toys + " picked up," + toysLeft +" to finish.");
    };
    say ("I'm done picking up after " + kidName);//argument
    
};
cleanAllRooms();
    //you can use this too but don't for classfunction cleanOneDeck(){};
    
for (var kidNumber = 0; kidNumber < kidNames.length; kidNumber++) {
    cleanOneroom(kidNumber);
};// for toyNumber
//encapsulation important to know
myConfirmation = confirm("Do you think the house is clean now?");
    if (myConfirmation === true) {
        say("I think it's because " + kidNames + " are asleep.");
    } else {
        say("Oh man the kids might still be awake!");
};
// Return Values
//var agePerkid = function(toysInRoom) {
//   var toys = 4,
//   kidsMessLeft;
//   if (toysInRoom<numOfKids) {
//      say("You have to clean for a while.");
//       return; //   }
//    kidsMessLeft = Math.floor(toysInRoom/numOfKids);
//   return kidsMessLeft;
//};
