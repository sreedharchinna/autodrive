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
            console.log("json data ",jsonData);          
            jsobject = parser.parse(jsonData);
            console.log(jsobject);
            
            for(var pathKey in jsobject) {
                console.log("key is "+pathKey);
                console.log("value: "+jsobject[pathKey].id);
                console.log("value: "+jsobject[pathKey].children[0].id);
                //console.log("value: "+jsobject[pathKey].children[1].id);
                if(jsobject.hasOwnProperty(pathKey)){
                    console.log("has key".pathKey);
                }else{
                    console.log("not there");
                }                
            }            
        }   
        return jsobject;
    }
};
module.exports = core;