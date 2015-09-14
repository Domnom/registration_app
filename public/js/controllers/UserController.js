dashboardModule.controller('UserController', ['$scope', 'employeeFactory', function($scope, employeeFactory) {

	employeeFactory.success(function(data) {
		$scope.employees = data;
	});
	$scope.test = 'Hello world!';
	$scope.arr = [
		{
			index: 2
		},
		{
			index: 1
		}
	];

	$scope.alertClick = function(id){
		alert('editing employee ' + id);
	};


	

}]);
