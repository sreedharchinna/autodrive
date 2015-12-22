var core = require('.//core//readjson.js');

var autodrive = {    
    execute: function(jsonfile, step){
        console.log("Inside 'execute' function"); 
        console.log("JSON file to be parsed is ", jsonfile);
        console.log("Step to go ", step);
        console.log(core.readJson(jsonfile, step));
    }
    
};
module.exports = autodrive;