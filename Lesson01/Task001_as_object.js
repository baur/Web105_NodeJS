var UserDB = {
	userName: 'Test',
	connect: function() {
		console.log('db connect success');
	},

	getUserName: function() {
		return this.userName;
	},

	setUserName: function(text) {
		this.userName = text;
	},

	start: function () {this.connect()
	}
}
