var jr = require('.//readjson.js');
var util = require('util');
var path = {
    makePath: function(jsonfile, step){
        
        util.log("Inside 'makeexecutionpath' function");
        util.log("JSON file :", jsonfile);
        util.log("Step id :", step);
        
        var jsobject = jr.readJson(jsonfile);
        console.log(jsobject);
        for(var pathKey in jsobject) {
                util.log("key is "+pathKey);
                util.log("root id is: "+jsobject[pathKey].id);
                if(jsobject[pathKey].id != 1){
                    console.error("Root id is not one, check the json file.");
                }
                //console.log(jsobject[pathKey].children.length);
                if("children" in jsobject[pathKey]){
                    util.log("children exists");
                    util.log("Number of children"+jsobject[pathKey].children.length);
                }
//              if(jsobject[pathKey].children.length)
                //console.log("value: "+jsobject[pathKey].children[0].id);
                //console.log("value: "+jsobject[pathKey].children[1].id);                
            }
    }
};
module.exports = path;