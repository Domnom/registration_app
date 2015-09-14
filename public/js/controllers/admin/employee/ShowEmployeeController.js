dashboardModule.controller('ShowEmployeeController', 
	['$routeParams', 'showEmployeeService',
	function($routeParams, showEmployeeService) {


	this.employeeId = $routeParams.employeeId;
	this.isLoaded = false;

	showEmployeeService(this.employeeId)
		.success(angular.bind(this,function(data) {
			this.employee = data;
			this.isLoaded = true;
		}));	
}]);