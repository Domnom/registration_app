<!DOCTYPE html>
<html ng-app="dashboardModule">
<head>
	<title>Dashboard</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

	@yield('styles')
	

	<!--<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js"></script>

	<script src="https://code.angularjs.org/1.2.28/angular-route.min.js"></script>-->

	<script src="/modules/angular/angular.min.js"></script>

	<script src="/modules/angular/additional_modules/angular-route.min.js"></script>
	<script type="192.168.10.10:3000/socket.io/socket.io.js"></script>
	<!--<script src="https://cdn.socket.io/socket.io-1.2.0.js"></script>-->
	<script src="/modules/angular/additional_modules/socket.io/node_modules/socket.io-client/socket.io.js"></script>
	<!--<script src="/modules/angular/additional_modules/angular-socket-io/socket.min.js"></script>-->
</head>
<body>

	<!-- Put this shit into its own file -->
	<nav class="navbar navbar-inverse">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-menu">
					<span class="sr-only">Toggle Navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
        		</button>
        		<a class="navbar-brand" href="/admin/dashboard#">My Dashboard</a>
			</div>

		<!-- Navbar links -->
			<div class="collapse navbar-collapse" id="navbar-menu">
				<ul class="nav navbar-nav">
					<li><a href="/admin/dashboard#employee">Employees</a></li>
					<li><a href="/admin/dashboard#visitor">Visitors</a></li>
				</ul>

				<ul class="nav navbar-nav navbar-right">
					@if (Auth::guest())
						<li><a href="/auth/login">Login</a></li>
					@else
						<li><a href="/auth/logout">Logout</a></li>
					@endif
				</ul>
			</div>	
		</div>
	</nav>

	<div class="container">
		<div ng-view></div>
	</div>
	<!-- angular module -->
	<script src="/js/modules/dashboardModule.js"></script>

	<!-- Controllers -->
	<script src="/js/controllers/admin/employee/IndexEmployeeController.js"></script>
	<script src="/js/controllers/admin/employee/ShowEmployeeController.js"></script>
	<script src="/js/controllers/admin/employee/EditEmployeeController.js"></script>

	<script src="/js/controllers/VisitorController.js"></script>

	<!-- Services -->
	<script src="/js/services/employee/indexEmployeeService.js"></script>
	<script src="/js/services/employee/showEmployeeService.js"></script>
	<script src="/js/services/employee/employeeService.js"></script>

</body>
</html>