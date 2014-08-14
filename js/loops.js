//Loops
// Ismael Iribe

// while loop
var bonab = 99;// iterator, counter

while (bonab > 0) {
    console.log(bonab + " bottles of beer on the wall.");
    bonab--;
    
};/* will continue if you are using nothing
    * that is variable in your condition*/
    console.log("No more bottles of beer on the wall.")

// for-loop
for (var bonab = 99; bonab > 0; bonab--){
       console.log(bonab + " bottles of beer on the wall.");
    
 };
 
    console.log("No more bottles of beer on the wall.")

for (var i = 0; i < 5; i++) {
    for (var ii = 0; ii < 3; ii++) {;// make sure you don't include loop inside loop
    console.log( "i:" + i + ", ii:" +ii);
};
};    