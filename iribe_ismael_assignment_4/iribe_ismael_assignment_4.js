
//Ismael Iribe
//SDI 1408
//24Aug14

//String Phone Number Pattern//
function testString(theCharacters, i) {// defining the function
    i = i || 0;// defining interger
    if (theCharacters.length !=12) return false;//if it doesn't equal length of 12 characters
    if(i == theCharacters.length) return true;// if the letters lenght is the length
    if(i == 3 || i == 7){ //for the first number of intergers throught the last
        return theCharacters[i] == "-" ? testString(theCharacters, ++i) : false;// if it has the character - i or else it is false 
    }
    return isNaN(parseInt(theCharacters[i],10)) ? false : testString(theCharacters, ++i); // if Not A number returns false
    
}
    var theTest = testString("123-456-7890");
    console.log(theTest);
    theTest = testString("ABC-123-4567")
    console.log (theTest);
    theTest = testString("1234567890")
    console.log (theTest);
