dashboardModule.service('employeeService', 
	['$http', 'socketio', 
	function($http, socketio) {


	// Get all employees
	// these functions are called by doing the following
	// -----------------------------------------------------------------------
	// employeeService.getEmployees().then(angular.bind(this,function(response) {
	// 		this.employees = response.data;
	// }));
	// -----------------------------------------------------------------------

		this.getEmployees = function() {
			var employees = $http.get('/api/employee')
				.success(function(data) {
					this.employeesData = data;
					return employeesData;
				});
			return employees;
		};

		this.getEmployee = function(id) {
			var employee = $http.get('/api/employee/' + id)
				.success(function(data) {
					this.employeeData = data;
					return employeeData;
				});
			return employee;
		};


		this.updateEmployee = function(id, employee) {
			$http.put('/api/employee/' + id, employee)
				.success(angular.bind(this, function(data) {
					console.log('employee updated from employeeService!');
					console.log("id number: " + id);
					console.log(employee)
					// updating employees and emitting data
					this.getEmployees().then(function(response) {
						socketio.emit('employee updated', response);
					});
				}))
				.error(function(data) {
					console.log(data);
				});
		};
	}]
);