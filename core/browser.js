var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var browser = {
	    initiateBrowser: function () {
	    	// For Firefox browser
	    	var driver = new webdriver.Builder()
	    	.forBrowser('firefox')
	    	.build();

	    	// For chrome browser
	    	//var driver = new webdriver.Builder()
	    	//.forBrowser('chrome')
	    	//.build();
	    	return driver;
	    }
};
module.exports = browser;