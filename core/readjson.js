var parser = require('json-parser');
var fs = require('fs');
var core = {
    readJson: function(jsonfile, step){
        
        console.log("Inside 'readJson' function");
        console.log("JSON file :", jsonfile);
        console.log("Step id :", step);
        
        var jsonData;
        //Reading json file.
        fs.readFile(jsonfile, 'utf8', function (error,jsonData){
            if(jsonData !== null){
                console.log("json data ",jsonData);                
            }
             
            if(error !== null){
                console.log("error ",error);   
            }            
            return true;
        });
        console.log("xxx");
        console.log(jsonData);
        //var object = parser.parse(content);
        //console.log(object);
        return true;
    }    
};

module.exports = core;