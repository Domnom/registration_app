dashboardModule.service('indexEmployeeService', ['$http', function($http){

	return $http.get('/api/employee')
		.success(function(data) {
			return data;
		})
		.error(function(data) {
			return data;
		});

}]);