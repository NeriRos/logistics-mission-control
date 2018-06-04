var path = require('path');
module.exports = 
{
	nodeServer: {
		ip: "",
		dns: "",
		httpPort: 80,
		httpsPort: 443,
		isHTTPS: false 
	},
	dbs: {
		firebase: {
			apiKey: "",
			authDomain: "",
			databaseURL: "",
			projectId: "",
			storageBucket: ""
		},
		mongodb: {
			uri: "GH@bW9uZ29kYjovL25lcml5YTpHMHJpbGw0ekBkczI0NzI5MC5tbGFiLmNvbTo0NzI5MC9jYXJnby1leHByZXNz", // GH@bW9uZ29kYjovLzEyNy4wLjAuMTo0Nzk3NS9ldHlwZQ== 	
		}
	},
	isVerboseOutput: true
};