var parsegiven = {
		parseGiven: function(item){
	        console.log(item);
	        if(item.type == "url"){
	            console.log("URL :"+item.loc);
	            if(item.action =="loadurl"){
	                console.log("Loading the URL");
	                driver.get(item.loc);
	            }
	        }
	        return true;
        
    }
};
module.exports = parsegiven;