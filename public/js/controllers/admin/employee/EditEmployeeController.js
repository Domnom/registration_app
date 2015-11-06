dashboardModule.controller('EditEmployeeController',
	['$routeParams', 'showEmployeeService', 'socketService', 'employeeService',
	function($routeParams, showEmployeeService, socketService, employeeService) {




		this.isLoaded = false;

		// First get the employee we are editing
		this.employeeId = $routeParams.employeeId;


		employeeService.getEmployee(this.employeeId)
			.then(angular.bind(this, function(response) {
			this.employee = response.data;
			this.isLoaded = true;
			})
		);

		//Figure out a way to pass variables between controllers
		// showEmployeeService(this.employeeId)
		// 	.success(angular.bind(this, function(data) {
		// 		this.employee = data;
		// 		this.isLoaded = true;
				
		// 	}));



		// Function to save updated employee

		this.updateEmployee = function() {
			employeeService.updateEmployee(this.employeeId, this.employee);
		};
		


}]);	

dashboardModule.service('socketio', 
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


		//TESTING

		this.getEmployees = function() {
			var employees = $http.get('/api/employee')
				.success(function(data) {
					employees = data
					return employees;
				});
			return employees;
		};
	}]
);
