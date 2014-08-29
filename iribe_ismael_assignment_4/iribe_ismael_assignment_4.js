
//Ismael Iribe
//SDI 1408
//24Aug14

//String Phone Number Pattern//
//Assignment two Technical/boolean make up
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
//Assignment Two Technical/Functions
var email = "aaa@fff.ghi";
//Project 3 code encapsulation make up
function emailString(email) {
    
    if(typeof email === 'undefined') return null;
    if(typeof email !== 'string' || email.indexOf('@') === -1) return false;
    //divide the email into parts
    var emailAt = email.split('@'),
    // makes sure there are two parts after @
        emailFirst = emailAt[0],
        emailDomain = emailAt[1],
        emailPeriod = emailDomain.split('.'),
        validChars = ['a','b','c','d',
                      'e','f','g','h','i',
                      'j','k','l','m','n','o',
                      'p','q','r','s','t','u','v',
                      'w','x','y','z','.','0','1','2',
                      '3','4','5','6','7','8','9','_','-'];
        
    if (emailAt.length !== 2) {
        console.log("Too many parts");
        return false;
    }
    

    //check if atleast 1 characters before @ and after @
    if (emailFirst.length < 1 || emailDomain.length < 3) {
        console.log("Too many characters before @");
        return false;
        
    }
    //define the valid characters to use A-Z and Numbers.
    for (var i = 0; i < emailFirst.length; i += 3) {
        if (validChars.indexOf(emailFirst.charAt(i))<0) {
            console.log ("Wrong use of characters");
            return false;
        }
    }
    if (emailDomain.indexOf ('.')<=0) {
        console.log("Can have period but not start with it.");
        return false;
    }
    //Same rule for first part of email
    for (var i = emailFirst.length - 1; i >= 0; i--) {
        if(validChars.indexOf(emailDomain.charAt(i)) < 0) {
            console.log("Wrong number or values in Domain.");
            return false;   
        }
    };
    //Rule for Domain
    for (var i = emailDomain.length - 1; i >= 0; i--) {
        if (validChars.indexOf(emailDomain[i]) < 0) {
            console.log("Wrong number of values.")
        }
    };
    if (emailPeriod[emailPeriod.length - 1].length < 3) {
        console.log ("Has to be atleast 3 characters from the end.");
        return false;
    }
    
    console.log ("Email valid.");
    return true;
};

    var emailTest = emailString("aaa@bbb.ccc");//Test String email
    console.log("This value is a " + emailTest + " email.");
    emailTest = testString("aaa@bb.ccc")//Incorrect check
    console.log ("This value is a " + emailTest + " email.");
    emailTest = testString("1234567890")//Incorrect check no -
    console.log ("This value is a " + emailTest + " email.");
    
var webAddress = "http:www.google.com";
var secAddress = "https:";

// breaking down function to see if a website
var webSear = function(webLink) {
    //instead of quoting I used .contains in the link. I know this will search anywhere in address.
    if (webLink.contains("https:")) {
        console.log ("This is a secure web address.")
        return true;
    } if (webLink.contains("http:")) {
        console.log("This is a unsecure website link.")
        return true;
    } else {
        return false;
    }
    
};

var webTest = webSear("http:www.google.com");
console.log("This address is a " + webTest + " web adress.");
webTest = webSear ("https://www.google.com");//true
console.log("This address " + webTest + " web address.");//true
webTest = webSear ("httr://www.google.com/http");//true
console.log("This address " + webTest + " web address.");//true

//String split into words and upper case

var upCase = function (simpleWord){
    var word = simpleWord.split(" ");// determening were in the string the space is
    for ( var i = 0; i < word.length; i++ )//begin ri;e
    {
        var j = word[i].charAt(0).toUpperCase();//uppercase the first character.
        word[i] = j + word[i].substr(1);
    }
    return word.join(" "); //return the string 
};


var wordTest = upCase("hello world");
console.log("Split and uppercased " + wordTest + ".");

//replace comma with slash

var replace = function(comma, replacing) {
  return this.split(comma).join(replacing);
};
var array = new Array("a1,a2,a3");

for (i = 0; i < array.length; ++i) {
    array[i] = array[i].replace(/,/g,"/");//replace all /g
}

console.log ('This string "a,b,c" replaced to ' + array);

//format number

var num = 2.1;
var n = num.toFixed(2);

console.log ("Change 2.1 to " + n);//change to 2.10

//fuzzy number;

var fuzzyNumDiff = function (fuzzNumOne, fuzzNumTwo, fuzzNumPerc) {
    if ((fuzzNumOne< fuzzNumTwo - ((fuzzNumPerc/100)*fuzzNumTwo)) || (fuzzNumOne> fuzzNumTwo + ((fuzzNumPerc/100)*fuzzNumTwo))) {
        return false;     
    } else {
        return true;
    }
};

var fuzzTest = fuzzyNumDiff (11, 10, 12);
console.log ("The difference is " + fuzzTest + " percent difference from initial number.");

//Number of Hours between dates

var dateOne = '2012-12-24';
var dateTwo = '2012-01-01';
dateOne = dateOne.split('-');
dateTwo = dateTwo.split('-');


dateOne = new Date(dateOne[0], dateOne[1], dateOne[2]);
dateTwo = new Date(dateTwo[0], dateTwo[1], dateTwo[2]);


var hours = Math.abs(dateOne-dateTwo) / 36e5;

console.log("Time difference in dates " + hours);

//Change variable to "variable"

    var chgToNum = function(number){
        return parseInt(number);
        };
        
var chgNum= chgToNum("42");
console.log("Change a string to a number " +chgNum);

// find the smallest number in an array


var nmArray = [3,6,7,8];

var nmSmallest = function(q){
    return Math.min.apply (0,nmArray.filter (
    function(q) { return q>this;
    }, q)) || 0;
};

var nmMin = nmSmallest(5);

console.log ("This is the smallest number returned " + nmMin);
//Sum array numbers

var sum = 0;

for (var i = 0; i<nmArray.length; i++) {
  if (!isNaN(parseInt(nmArray[i]))) { sum += nmArray[i]; }
};

console.log("The sim of the array is "+ sum);


//Sort the array

var sortArray = function (strArray, givenKey) {
    return (strArray.sort(function(a)
                          { return a[givenKey];
                          }));
};

var sortedArray = sortArray ("a"+[{a:2},{a:3},{a:1}]);
console.log ("This array sorted gives " + sortedArray);