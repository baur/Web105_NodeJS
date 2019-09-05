var server = {
	connect: function() {
		console.log('Server running ...')
	}
};

if (module.parent == null) {
	server.connect();
} else {
	module.exports = server;
}
