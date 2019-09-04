var userName = 'Test';

function connect() {
	console.log('db connect success');
}

function getUserName() {
	return userName;
}

function setUserName(text) {
	userName = text;
}

function start(){
	connect();
}
