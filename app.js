var path = require('.//core//makeexecutionpath');

var autodrive = {    
    execute: function(jsonfile, step){
        console.log("Inside 'execute' function"); 
        console.log("JSON file to be parsed is ", jsonfile);
        console.log("Step to go ", step);
        console.log(path.makePath(jsonfile, step));
    }
    
};
module.exports = autodrive;