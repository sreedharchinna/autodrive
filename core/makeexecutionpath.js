var jr = require('.//readjson.js');
var path = {
    makePath: function(jsonfile, step){
        
        console.log("Inside 'makeexecutionpath' function");
        console.log("JSON file :", jsonfile);
        console.log("Step id :", step);
        
        var jsobject = jr.readJson(jsonfile);
        console.log(jsobject);
    }
};
module.exports = path;