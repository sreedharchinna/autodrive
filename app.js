var _ = require("underscore");
var autodrive = {
    between: function(low, high){
        console.log("Inside 'between' function");
        return _.random(low, high);
    },
    execute: function(jsonfile, step){
        console.log("Inside 'execute' function");    
    }
    
};
module.exports = autodrive;