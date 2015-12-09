var _ = require("underscore");
var autodrive = {
    between: function(low, high){
        return _.random(low, high);
    }
    
};

module.exports = autodrive;