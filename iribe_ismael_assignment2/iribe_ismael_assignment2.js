//Ismael Iribe
//MDV 1408
//12Aug2014




var kidNames = [ "Jack", "Ilene", "Kaleb", "Ingrid"];
    agePerkid = [ 2, 7, 5, 10];//var cleanOneRoom = function(){
for (var kidNumber = 0; kidNumber < kidNames.length; kidNumber++) {
    var kidName = kidNames[kidNumber],
        toysKidOwns = agePerkid[kidNumber];
        console.log("Need to pick up " + kidName + " for "
            + toysKidOwns + " toys.");
    for (var toys = 0; toys < toysKidOwns; toys += 1) {
       var toysLeft = toysKidOwns - toys;
       console.log (toys + " picked up," + toysLeft +" to finish.");
}
    console.log ("I'm done pickiing up after " + kidName);
};// for toyNumber