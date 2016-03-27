var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;
//    test = require('../testing');

// For Firefox browser
//var driver = new webdriver.Builder()
//    .forBrowser('firefox')
//    .build();

// For chrome browser
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

var runstep = {
    executeStep: function(step){
        var given = [],
            when = [],
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
//                console.log(given[i]);
                this.parseSet(given[i]);
            }            
        }
        if(when){
            for(var i=0;i<when.length;i++){
//                console.log(when[i]);
                this.parseSet(when[i]);
            }            
        }
        if(then){
            for(var i=0;i<then.length;i++){
//                console.log(then[i]);
                this.parseVerify(then[i]);
            }            
        }
//        console.log("Data given :"+data.given);
//        console.log("Data when :"+data.when);
//        console.log("Data then :"+data.then);        
    },
    parseSet: function(item){
        console.log(item);
        if(item.type == "url"){
            console.log("URL :"+item.loc);
            if(item.action =="loadurl"){
                console.log("Loading the URL");
                driver.get(item.loc);
            }
        }
        return true;
    },
    parseVerify: function(item){
        console.log(item);
        if(item.type == "titletext"){
            driver.wait(until.titleIs(item.value), 1000);
        }
    }
};
module.exports = runstep;