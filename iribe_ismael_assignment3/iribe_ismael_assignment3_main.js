//Ismael Iribe
//MDV 1408
//21Aug2014



var insectLegs = prompt("How many legs do bugs have? Pick between 1 and 8:", "");
insectLegs = parseInt (insectLegs);

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

var critterTypes = ["Bugs", "Arachnids", "Arthropods"];

console.log(critterTypes);

critterTypes[0] = "Bugs";

console.log(critterTypes);
critterTypes[3] = "Crustaceans";
critterTypes[4] = "Rats";
console.log(critterTypes);

console.log("The length of the array "+ critterTypes.length);
console.log(critterTypes);

critterTypes[critterTypes.length]= "Jane";
console.log(critterTypes);
console.log("You have  " + critterTypes.length + " under your bed.");


critterTypes.unshift("beetles");//unshift to the front, push to the back
console.log(critterTypes);

var lastCritter = critterTypes.pop();

console.log ("You first collected " + lastCritter);
console.log(critterTypes);

var firstCritter = critterTypes.shift();

console.log ("You must like to collect " + firstCritter);
console.log(critterTypes);

for (var i = 0; i< critterTypes.length; i++) {
    if (critterTypes[i] === "rat"){
        
       console.log(critterTypes[i]+ " This is not a insect it's a mammal."); 
        
    } else{
        
        console.log(critterTypes[i]+" At least they are in the same family of arthropods.")
        
    };
    
    //console.log("Index " + i + ": " + critterTypes[i]);
    
    
}



var handleData = function (json) {
    for (var i = 0; i < json.bugs.length; i++){
        var bugs = json.bugs[i];
        console.log("It's just a " + bugs.name + "and it is  " + bugs.size + "centimiters, has " + bugs.legs + " legs.");
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
    if (bugs.legs === 8 )
    {
     console.log("This is in the arachnid family.");  
    } 
    if (bugs.legs === 7)
    {
        console.log("Must be that spider that lost his peg leg.");
    }
    };
};

handleData (json2);



