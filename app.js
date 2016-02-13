var path = require('.//core//makeexecutionpath');
var runstep = require('.//core//executestep');

var autodrive = {    
    execute: function(jsonfile, step){
        var chain = [];
        console.log("Inside 'execute' function"); 
        console.log("JSON file to be parsed is :", jsonfile);
        console.log("Step to go :", step);
        chain = path.makePath(jsonfile, step);
//        console.log("\n\n\n\nPath to traverse: "+path.makePath(jsonfile, step));
        for(var i=0;i<chain.length;i++){
//            console.log(chain[i].getStep());
            runstep.executeStep(chain[i]);
        }        
    }
    
};
module.exports = autodrive;