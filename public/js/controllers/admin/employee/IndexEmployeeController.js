dashboardModule.controller('IndexEmployeeController', 
	['indexEmployeeService', '$rootScope', 'employeeService', 'socketio', '$filter',
	function(indexEmployeeService, $rootScope, employeeService, socketio, $filter) {

	
	//$location.path() saves anything that follows the # symbol
	//console.log($location.path());
	
	this.isLoaded = false;


	// init
		employeeService.getEmployees().then(angular.bind(this, function(response){
			this.employees = response.data;
			this.isLoaded = true;
		}));


	// SOCKET CALLS

		socketio.on('refreshEmployees', angular.bind(this, function(data) {
			this.employees = data;
		}));


		// Event sent to update employees whent the "fire event" button is clicked
		// using this to test iOS app
		this.testEmployeeCall = function() {
			employeeService.getEmployees().then(function(response) {
				socketio.emit('employee updated', response);
			});
		};
	}]
); 
