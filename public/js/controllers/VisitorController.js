dashboardModule.controller('VisitorController', 
	['$scope', '$http', function($scope, $http) {

	$http.get('/api/visitor')
		.success(function(data) {
			$scope.visitors = data;
		})
		.error(function(data, status) {
			console.log(data);
		});
}]);