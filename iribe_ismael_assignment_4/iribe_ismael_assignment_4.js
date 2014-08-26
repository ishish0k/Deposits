
//Ismael Iribe
//SDI 1408
//24Aug14

//String Phone Number Pattern//
var testString = function(numStr) {
    if (numStr) {
        //var hasParen = testString.substring(0,1) would check for parenthasis if there was in number
        var areaCode = numStr.substring(0,3);//checks first 3 characters
        var firstDash = numStr.substring (3,4);//checks 4th character
        var firstThreeNum = numStr.substring (4,7);//checking next three characters
        var  secondDash = numStr.substring (7,8);//checks for the ninth character
        var lastFourNum = numStr.substring (8,12)//checks last four numbers
    if (isNaN(areaCode,
    "phone number - area code"))
        ||(firstDash !="-")
    ||(isNaN(firstThreeNum
    "First Three Number's"))
        ||(secondDash !="-")
        ||(isANaN(lastFourNum))){
        console.log ("This is a phone number");
    }else{
        console.log("This is a phone Number!");
    }
    }
    response = "Hey" + numStr + "is something.";
    return response;
    };
    var theTest = testString("123-456-7890");
    console.log (theTest);
