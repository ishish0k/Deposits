//Ismael Iribe
//MDV 1408
//21Aug2014

var json = {
    "bugs": {
        "001": {   
        "name": "beetle",
        "size": 20
        },
        "002":{
        "name": "mantis",
        "size": 15
        },
        "003":{
        "name": "scorpion",
        "size": 9
        }
    }
};



var json2 = {
    "bugs": [
        {
            "bugid" : "001",
            "name": "beetle",
            "size": 20
        },
        {
            "bugid" : "002",
            "name" : "mantis",
            "size" : 15  
            
        },
        {
            "bugid" : "003",
            "name" : "scorpion",
            "size" : 9  
        }
    ]
};

console.log (json2);