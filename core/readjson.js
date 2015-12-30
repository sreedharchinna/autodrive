var parser = require('json-parser');
var fs = require('fs');
var core = {
    readJson: function(jsonfile){
        
        console.log("Inside 'readJson' function");
        console.log("JSON file :", jsonfile);
        
        //Reading json file.
        var jsobject;
        var jsonData = fs.readFileSync(jsonfile, 'utf8');
        if(jsonData == null){
            console.error("json data not present");
        }else{
            //console.log("json data ",jsonData);          
            jsobject = parser.parse(jsonData);
            //console.log(jsobject);
        }   
        return jsobject;
    }
};
module.exports = core;