var dashboardModule = angular.module('dashboardModule', ['ngRoute', 'ui.router']);

/*--------------------------------------------------------------------
/* PROBLEMS
/*--------------------------------------------------------------------

~~ EditEmployeeController ~~

Line 24: Manually redirected URL. This is done because the employees
	       were called before the POST method completed. This resulted
	       in outdated data.
	FIX: Perhaps implement events and call an event when POST is complete
		 Could cause screen to flicker when data is being updated.



/*--------------------------------------------------------------------*/



// dashboardModule.config(function ($routeProvider, $stateProvider, $urlRouterProvider) {

// 	//$admin_dashboard_views_directory = '/views/admin/dashboard'

// 	$urlRouterProvider.otherwise("/");

// 	$stateProvider

// 	.state ('dashboard', {
// 		url: '/',
// 		templateUrl: '/views/admin/dashboard/home/main.html'
// 	})


	
// });

dashboardModule.config(function($routeProvider, $urlRouterProvider, $stateProvider) {

// 	console.log($urlRouterProvider);
// 	$urlRouterProvider.otherwise("/");

// 	$stateProvider

// 	.state ('dashboard', {
// 		url: '/',
// 		templateURL: '/views/admin/dashboard/home/main.html'
// 	})

// });


// ============================== OLD =================================
//------------------------------ Routes -------------------------------
	$routeProvider

//----------------------------- Employees -----------------------------
	
	//~~ Index ~~//
	.when('/employee', {
		templateUrl: '/views/admin/dashboard/employees/index.html',
		controller: 'IndexEmployeeController',
		controllerAs: 'vm'
	})

	//~~ Show ~~//
	.when('/employee/:employeeId', {
		templateUrl: '/views/admin/dashboard/employees/show.html',
		controller: 'ShowEmployeeController',
		controllerAs: 'vm'
	})

	//~~ Edit ~~//
	.when('/employee/edit/:employeeId', {
		templateUrl: '/views/admin/dashboard/employees/edit.html',
		controller: 'EditEmployeeController',
		controllerAs: 'vm'
	})

//------------------------------ Visitors ------------------------------

	//~~ Index ~~//
	.when('/visitor', {
		templateUrl: '/views/admin/dashboard/visitors/index.html',
		controller: 'VisitorController'
	})

//------------------------------- Home --------------------------------

	.otherwise({
		templateUrl: '/views/admin/dashboard/home/main.html'

	})
// =============================== OLD =================================
});
