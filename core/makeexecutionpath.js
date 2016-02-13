var jr = require('.//readjson');
var util = require('util');
var step = require('.//Step');
var path = {
    makePath: function (jsonfile, tostep) {
        
        util.log("Inside 'makeexecutionpath' function");
        util.log("JSON file :", jsonfile);
        util.log("Step id :", step);
        
        var jsobject = jr.readJson(jsonfile), 
            keyFound = false, 
            containsID = false, 
            containsNext = false, 
            depth = 0, 
            index = 0, 
            chain = [],
            parent_id_value,
            to_parse = [],
            parent_ids = [];
        
        console.log(jsobject);
        console.log(Object.keys(jsobject));
        
        var parseObj = jsobject,
            tmpArr = Object.keys(parseObj);
        
        
        chain.push(step({
                        is_root:true,
                        is_leaf:false,
                        id: parseObj.id,
                        given: parseObj.given,
                        when: parseObj.when,
                        then: parseObj.then,
                        parent_id:null
                    }));
        console.log(chain[0].getStep());
        parent_ids.push(parseObj.id);
        
        //exit if parent step does not have children
        if(!parseObj.next){
            return true;
        }
        
        parseObj = parseObj.next;
        
        do{
            var tpid = parent_ids.shift();            
            for(var i=0;i<parseObj.length;i++){
                
                var is_leaf_bool = false;
//                console.log(parseObj[i].id);
//                console.log(parseObj[i].given);
//                console.log(parseObj[i].then);
//                console.log(parseObj[i].when);
//                console.log(parseObj[i].next);                
                if(!parseObj[i].next){
                    is_leaf_bool = true;
                }
                
                chain.push(step({
                        is_root:false,
                        is_leaf:is_leaf_bool,
                        id: parseObj[i].id,
                        given: parseObj[i].given,
                        when: parseObj[i].when,
                        then: parseObj[i].then,
                        parent_id:tpid
                }));
                if(parseObj[i].next){
                    to_parse.push(parseObj[i].next);
                    parent_ids.push(parseObj[i].id);
                }            
            }
            parseObj = to_parse.shift();
        }while(parseObj);
        
        
        
        console.log("In the end, number of steps collected is "+chain.length);
        
        for(var i=0;i<chain.length;i++){
            console.log(chain[i].getStep());
        }

    }
};
module.exports = path;