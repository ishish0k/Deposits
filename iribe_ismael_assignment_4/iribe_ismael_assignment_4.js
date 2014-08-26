
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
    var theTest = testString("123-456-7890");//Test String with number
    console.log("This value is a " + theTest + " listed phone number.");
    theTest = testString("ABC-123-4567")//Incorrect check
    console.log ("This value is a " + theTest + " listed phone number.");
    theTest = testString("1234567890")//Incorrect check no -
    console.log ("This value is a " + theTest + " listed phone number.");

//Email Function to test email if correct value.
var email = "abc@def.ghi";

function emailString(email) {
    //divide the email into parts
    var emailAt = email.split('@');
    
    if (emailAt.length !== 3) {
        console.log("The @ sign in the right place");
        return false;
    }
    
var emailFirst = emailSection[0];
var emailDomain = emailSection[1];
    //check if 3 characters before @ and after @
    if (emailFirst.length < 3 || emailDomain.length<3) {
        console.log("Too many or characters after @");
        return false;
        
    }
    //define the valid characters to use A-Z and Numbers.
    var validChars = ['a','b','c','d',
                      'e','f','g','h','i',
                      'j','k','l','m','n','o',
                      'p','q','r','s','t','u','v',
                      'w','x','y','z','.','0','1','2',
                      '3','4','5','6','7','8','9','_','-'];
    for (var i = 0; i < emailFirst.length; i += 3) {
        if (validChars.indexOf(emailFirst.charAt(i))<0) {
            console.log ("Wrong use of characters");
            return false;
        }
    }
    //Same rule for Domain
    for(var j = 0; j < emailDomain.length; j += 1) {
        if(validChars.indexOf(emailDomain.charAt(j)) < 0) {
            alert("Wrong number or values in Domain.");
            return false;   
        }
    }
    //Rule for period
    var emailPeriod = emailDomain.split('.');
    if (emailPeriod[emailPeriod.length - 1].length <3) {
        console.log("Put a period in the right place");
        return false;
    }
    console.log ("Email valid.");
    return true;
}

    var emailTest = emailString("aaa@bbb.ccc");//Test String email
    console.log("This value is a " + emailTest + " email.");
    emailTest = testString("aaa@bb.ccc")//Incorrect check
    console.log ("This value is a " + emailTest + " email.");
    emailTest = testString("1234567890")//Incorrect check no -
    console.log ("This value is a " + emailTest + " email.");


