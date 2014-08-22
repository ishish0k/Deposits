//Ismael Iribe
//MDV 1408
//12Aug2014

var decision = "Clean House"; // Boolean Variable
var myConfirmation = true;
var myPrompt;
var p = true; q = false, r = true;

myPrompt = prompt("Do you like having a clean or messy home?")
    if (myPrompt === "clean") {
        console.log("It is hard keeping up with these messy kids.")
    } else {
        console.log("How can you live like that?!")
    };

if ((p && r) || q) {
    console.log ("No matter how hard you try your home is always messy with kids.")
} else {
    console.log("I think your home is very clean for now.")
};

var toysInRoom = function(kidNames) {
    var toysRoom = [ "Bat", "Cars", "Dolls", "and blocks"];
    myConfirmation = confirm("Your kids left this in " + toysRoom + ".");
    if (myConfirmation === true) {
        console.log ("Looks like we still need to clean up.");
    } else {
        console.log ("Ok lets keep on cleaning.");
    };
    return kidNames;

}
var numOfKids = 4;// iterator, counter

while (numOfKids > 0) {
    console.log(numOfKids + " Rooms to clean after.");
    numOfKids--;
    
};/* will continue if you are using nothing
    * that is variable in your condition*/
    console.log("No more rooms to clean. Take a break.")

// for-loop
for (var numOfKids = 4; numOfKids > 0; numOfKids--){
       console.log(numOfKids + " rooms to clean.");
    
 };
 
    console.log("You finally cleaned this house.")

 
var cleanAllRooms = function(kidNumber) {}
var kidNames = [ "Jack", "Ilene", "Kaleb", "Ingrid"];
    agePerkid = [ 2, 7, 5, 10];//
    var cleanOneroom = function(){//scope where caraibles can or can't be used
        var kidName = kidNames[kidNumber],
        toysKidOwns = agePerkid[kidNumber];
        console.log("You need to pick up " + kidName + "'s "
            + toysKidOwns + " toys.");
    for (var toys = 0; toys < toysKidOwns; toys += 1) {
       var toysLeft = toysKidOwns - toys;
       console.log (toys + " picked up," + toysLeft +" to finish.");
    };
    console.log ("I'm done picking up after " + kidName);//argument
    
};
cleanAllRooms();
    //you can use this too but don't for classfunction cleanOneDeck(){};
    
for (var kidNumber = 0; kidNumber < kidNames.length; kidNumber++) {
    cleanOneroom(kidNumber);
};// for toyNumber
//encapsulation important to know
myConfirmation = confirm("Do you think the house is clean now?");
    if (myConfirmation === true) {
        console.log("I think it's because " + kidNames + " are asleep.");
    } else {
        console.log("Oh man the kids might still be awake!");
};
// Return Values
//var agePerkid = function(toysInRoom) {
//   var toys = 4,
//   kidsMessLeft;
//   if (toysInRoom<numOfKids) {
//      console.log("You have to clean for a while.");
//       return; //   }
//    kidsMessLeft = Math.floor(toysInRoom/numOfKids);
//   return kidsMessLeft;
//};
