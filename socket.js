var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// var express = require('express'),
// 	io = require('socket.io'),
// 	http = require('http'),
// 	app = express(),
// 	server = http.createServer(app),
// 	io = io.listen(server);

io.on('connection', function(socket) {
	socket.on('employee updated', function(msg) {
		console.log("The original message");
		console.log(msg);

		io.emit('refreshEmployees', msg.data);
		//io.emit('refreshEmployees', { data: 'employees are outdated' });
	});

	//TESTING
	socket.on('tester', function(msg) {
		console.log('here is the data');
		console.log(msg);

		io.emit('quickTest', {data: msg});
	})

	console.log('socket was called!');
});

http.listen(3000, "192.168.10.10", function() {
//http.listen("80", "", function(){
	console.log('Listening on port: 3000');
})
