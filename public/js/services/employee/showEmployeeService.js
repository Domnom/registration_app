dashboardModule.service('showEmployeeService', 
	['$http', '$location', '$routeParams',
	function($http, $location, $routeParams) {

		// routeParams seems to be useless here as the value for route params 
		// 	never updates (same url will always be called).
		console.log("this is the factory with location path: " + $location.path() + " and the id at the end = " + $routeParams.employeeId);

		return function(id) {
			return $http.get('/api/employee/' + $routeParams.employeeId) 
				.success(function(data) {
					return data;
				})
				.error(function(error) {
					return error;
				});
		};
}]);