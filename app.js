var _ = require("underscore");

var core = require('.//core//readjson.js');

var autodrive = {
    between: function(low, high){
        console.log("Inside 'between' function");
        return _.random(low, high);
    },
    execute: function(jsonfile, step){
        console.log("Inside 'execute' function"); 
        console.log(jsonfile);
        console.log(step);
        console.log(core.readJson());
    }
    
};
module.exports = autodrive;