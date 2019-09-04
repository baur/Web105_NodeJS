
var UserDB = {

    userName: 'Test',
	connect: function() {
		console.log('db connect success');
	},

	getUserName: function() {
		return userName;
	},

	setUserName: function(text) {
		userName = text;
	},

	start: function () {UserDB.connect()
	}

}
