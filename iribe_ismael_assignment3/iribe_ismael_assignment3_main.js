//Ismael Iribe
//MDV 1408
//21Aug2014

var handleData = function (json) {
    for (var i = 0; i < json.bugs.length; i++){
        var bugs = json.bugs[i];
        console.log("Bug ID: " + bugs.bugid + ", Name: " + bugs.name + ", size: " + bugs.size);
    };
};

handleData (json2);