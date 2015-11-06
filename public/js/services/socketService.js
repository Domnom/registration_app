dashboardModule.service('socketService', 
	['$rootScope', '$http', 
	function($rootScope, $http) {

		var socket = io.connect('192.168.10.10:3000');
		
		this.on = function(eventName, callback) {
		
			socket.on(eventName, function() {
				var args = arguments;
				$rootScope.$apply(function() {
					callback.apply(socket, args);
				});
			});
		};

		this.emit = function(eventName, data, callback) {
			socket.emit(eventName, data, function() {
				if (callback) {
					//Do stuff
				}
			});
		};
	}]
);