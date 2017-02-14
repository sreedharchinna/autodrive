var parsethen = {
		parseThen: function(item){
	        console.log(item);
	        if(item.type == "titletext"){
	            driver.wait(until.titleIs(item.value), 1000);
	        }
        
    }
};
module.exports = parsethen;