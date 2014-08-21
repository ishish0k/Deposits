//Ismael Iribe
//MDV 1408
//21Aug2014
var insectLegs = prompt("How many legs do bugs have? Pick between 1 and 8:", "");
insectLegs = parseInt (insectLegs);

switch (insectLegs) {
    case 1:
        prompt("I don't think theres anything with one leg. You must think a worm is a bug too!")
        break;

    case 2:
            prompt("Water beetles will have special legs adapted for swimming, that makes them look like they have 2 legs. ")
        break;
    case 3:
            prompt("They do have 3 sets but how many total? ")
        break;
    case 4:
            prompt("Did you read that in the Bible? ")
        break;
    case 5:
            prompt("Your so close! ")
        break;
    case 6:
            prompt("You know your insects. You must like bug collecting.")
        break;
    case 7:
            prompt("It might have been a spider that lost a leg. ")
        break;
    case 8:
            prompt("You must live near the desert to know a scorpion.")
    
    
    
    
}
var handleData = function (json) {
    for (var i = 0; i < json.bugs.length; i++){
        var bugs = json.bugs[i];
        console.log("Insect ID: " + bugs.insectid + ", Name: " + bugs.name + ", size: " + bugs.size + ", legs: " + bugs.legs);
    };
};

handleData (json2);

