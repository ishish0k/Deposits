//Ismael Iribe
//MDV 1408
//21Aug2014


var critterTypes = ["Arachnid", "Bug", "Not Bug"];
var insectLegs = prompt("How many legs do bugs have? Pick between 1 and 8:", "");
insectLegs = parseInt (insectLegs);
var insectsUnderbed = function(crawlUnder) {
    var bugs = 8,
    bugsUnderBed;
    if (crawlUnder<bugs) {
        console.log("Catch the bugs before they go under.");
        return 0;
    }
    bugsUnderBed = Math.floor(crawlUnder/bugs);
    return bugsUnderBed;
};

var bugsNotStepped = insectsUnderbed(4);
console.log ("You only caught a few bugs.")
var insect = 8;// iterator, counter
while (insect > 0) {
    console.log(insect + " Rooms to clean after.");
    insect--;
    
};/* will continue if you are using nothing
    * that is variable in your condition*/
    console.log("No more rooms to clean. Take a break.")

// for-loop
for (var insect = 4; insect > 0; insect--){
       console.log(insect + " rooms to clean.");
    
 };
while (insect > 0) {
    console.log(insect + " little legged critter crawled under your bed.");
    insect--;
    
};/* will continue if you are using nothing
    * that is variable in your condition*/
    console.log("I think that's all the things that crawled under your bed.")

// for-loop
for (var insect = 8; insect > 0; insect--){
       console.log(insect + " ");
    
 };
 
    console.log("I think thats all of the bugs.")

console.log(critterTypes);

critterTypes[2] = "Anthropod";
console.log(critterTypes);
critterTypes[3] = "Scorpion";
var lastCritter = critterTypes.pop();

console.log ("The last type of critter in the list was " + lastCritter);
console.log(critterTypes);



switch (insectLegs) {
    case 1:
        console.log("I don't think theres anything with one leg. You must think a worm is a bug too!");
        break;

    case 2:
            console.log("Water beetles will have special legs adapted for swimming, that makes them look like they have 2 legs. ");
        break;
    case 3:
            console.log("They do have 3 sets but how many total? ");
        break;
    case 4:
            console.log("Did you read that in the Bible? ");
        break;
    case 5:
            console.log("Your so close! ");
        break;
    case 6:
            console.log("You know your insects. You must like bug collecting.");
        break;
    case 7:
            console.log("It might have been a spider that lost a leg. ");
        break;
    case 8:
            console.log("You must live near the desert to know about scorpiones and spiders.");
    
    default:
        console.log("You did not enter a number between 1 and 8.");
        break;  
}

var handleData = function (json) {
    for (var i = 0; i < json.bugs.length; i++){
        var bugs = json.bugs[i];
        console.log("It's just a " + bugs.name + " and it is  " + bugs.size + " centimiters, has " + bugs.legs);
    if (bugs.legs >=0 && bugs.legs <=5)
    {
        console.log("This is not a bug!");
    }
    if ( !(bugs.legs >= 0 && bugs.legs <=5))
    {
     console.log("Might be a bug or arachnid.");  
    }
    if (bugs.legs === 6 )
    {
     console.log("This is a bug.");  
    }
    if (bugs.legs === 7)
    {
        console.log("Must be that spider that lost his peg leg.");
    }
    if (bugs.legs === 8 )
    {
     console.log("This is in the arachnid family.");  
    } 
    };
};

handleData (json2);



