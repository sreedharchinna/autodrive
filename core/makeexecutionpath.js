var jr = require('.//readjson');
var util = require('util');
var path = {
    makePath: function (jsonfile, step) {
        
        util.log("Inside 'makeexecutionpath' function");
        util.log("JSON file :", jsonfile);
        util.log("Step id :", step);
        
        var jsobject = jr.readJson(jsonfile), keyFound = false, containsID = false, containsNext = false, depth = 0;
        
        console.log(jsobject);
        //console.log(Object.keys(jsobject));
        parseObj = jsobject;        
        do {
            console.log("-----------------------------------\n\n");
            console.log("Current Object :" + parseObj);
            tmpArr = Object.keys(parseObj);
            for (var index in tmpArr){
                if(tmpArr[index] === "id"){
                    containsID = true;
                    console.log("Contains ID ");
                }                
            }
            if(containsID){
                for(var index in tmpArr){
                    if(tmpArr[index] === "next"){
                        containsNext = true;
                        console.log("Contains Next in ID:"+parseObj.id);
                    }                
                }
            }
            if(!containsID){
                console.error("Input JSON format is wrong: does not contain ID in a step.");
                return false;
            }
            console.log("Current ID :"+parseObj.id);
            if(parseObj.id == step){
                console.log("Found :"+parseObj.id);
                return true;
            }
            if(containsNext){
                parseObj = parseObj.next; 
                console.log("Next Step :"+parseObj);
            } 
        }while(containsNext);
        
//        for(var pathKey in jsobject) {
//            if(pathKey === "id"){
//                
//                console.log("root id is: "+jsobject[pathKey]);
//            }
//        }
//        for(var pathKey in jsobject) {
//                util.log("key is "+pathKey);
//                util.log("root id is: "+jsobject[pathKey].id);
//                if(jsobject[pathKey].id != 1){
//                    console.error("Root id is not one, check the json file.");
//                }
//                //console.log(jsobject[pathKey].children.length);
//                if("children" in jsobject[pathKey]){
//                    util.log("children exists");
//                    util.log("Number of children"+jsobject[pathKey].next.length);
//                }
//                //if(jsobject[pathKey].next.length)
//                //console.log("value: "+jsobject[pathKey].next[0].id);
//                //console.log("value: "+jsobject[pathKey].next[1].id);                
//            }
    }
};
module.exports = path;