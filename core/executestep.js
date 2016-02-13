var runstep = {
    executeStep: function(step){
        var given = [];
            when = [];
            then = [];
        console.log("--------------------------------------------------");
        console.log("Inside Execute Step.");    
        var data = step.getStep();
        console.log("Step ID :"+data.id);
        given = data.given;
        when = data.when;
        then = data.then;
        if(given){
            for(var i=0;i<given.length;i++){
            console.log(given[i]);    
            }            
        }
        if(when){
            for(var i=0;i<when.length;i++){
                console.log(when[i]);
            }            
        }
        if(then){
            for(var i=0;i<then.length;i++){
                console.log(then[i]);
            }            
        }

//        console.log("Data given :"+data.given);
//        console.log("Data when :"+data.when);
//        console.log("Data then :"+data.then);        
    }
};
module.exports = runstep;