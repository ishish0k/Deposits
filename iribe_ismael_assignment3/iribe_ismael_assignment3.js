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

for (var key in json.bugs) {
    var bugs = json.bugs[key];
};
//bug size
console.log (bugs);

var json2 = {
    "bugs": [
        {
            "buid": "001",
            "name": "beetle",
            "size": 20
        },
        {
            "buid": "002",
            "name": "mantis",
            "size": 15  
            
        },
        {
            "buid":"003",
            "name": "scorpion",
            "size": 9  
        },
        
        
    ]
}