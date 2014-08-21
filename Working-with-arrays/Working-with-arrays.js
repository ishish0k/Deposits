
//  Scalable Data Infrastructures
//    Working with Arrays

var pirateNames = ["Blackbeard", "Kidd", "Lafitte"];

console.log(pirateNames);

pirateNames[2] = "Jack Sparrow";

console.log(pirateNames);
pirateNames[3] = "Davey";
pirateNames[4] = "Ismael";
console.log(pirateNames);

console.log("The length of the array "+ pirateNames.length);
console.log(pirateNames);
pirateNames[pirateNames.length] = "Black Bart";
console.log("The new length is " + pirateNames.length);
console.log(pirateNames);

pirateNames[pirateNames.length]= "Jane";
console.log(pirateNames);
console.log("The new length is " + pirateNames.length);


pirateNames.unshift("Kaleb");//unshift to the front, push to the back
console.log(pirateNames);

var lastPirate = pirateNames.pop();

console.log ("The last pirate in the list was " + lastPirate);
console.log(pirateNames);

var firstPirate = pirateNames.shift();

console.log ("The first pirate in the list was " + firstPirate);
console.log(pirateNames);

for (var i = 0; i< pirateNames.length; i++) {
    if (pirateNames[i] === "Jane"){
        
       console.log(pirateNames[i]+ " is a fictional pirate."); 
        
    } else{
        
        console.log(pirateNames[i]+" was a real pirate.")
        
    };
    
    //console.log("Index " + i + ": " + pirateNames[i]);
    
    
}