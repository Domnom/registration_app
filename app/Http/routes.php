<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('home');
});

// ------------------------------------------------
// Administrator
// ------------------------------------------------

// redirect admin to the dashboard
Route::get('/admin', function(){
	return redirect('/admin/dashboard');
});

$router->group([
		'namespace' => 'dashboard',
		'middleware' => 'admin',
	],
	function() {
		Route::get('/admin/dashboard', function(){
			return view('layouts\dashboard');
		});
		//Route::get('/admin/dashboard', 'DashboardController@index');
		//Route::resource('/admin/employee', 'EmployeeController');
		//Route::resource('/admin/visitor', 'VisitorController');

	});

// Log in/out
// !!!: csrf_token has been disabled in Kernel.php

Route::get('/auth/login', 'Auth\AuthController@getLogin');
Route::post('/auth/login', 'Auth\AuthController@postLogin');
Route::get('/auth/logout', 'Auth\AuthController@getLogout');
Route::get('/auth/register', 'Auth\UserController@create');
Route::post('/auth/register', 'Auth\UserController@store');


// ------------------------------------------------
// Api
// ------------------------------------------------
Route::resource('/api/employee', 'Api\ApiEmployeeController');
Route::resource('/api/visitor', 'Api\ApiVisitorController');
