node_modules/server/index.js
---------------------------------
var http = require("http");
var server = {
	start: function() {
		http.createServer().listen(8844);
	}
};

if (module.parent == null) {
	server.start();
} else {
	module.exports = server;
}


index.js
--------
var server = require('server');
server.start();
