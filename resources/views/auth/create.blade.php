<!DOCTYPE html>
<html>
<head>
	<title>Register</title>
</head>
<body>
	<form method="POST" action="/auth/register">

	<!-- Hidden fields -->
		<input type="hidden" name="_token" value="{{ csrf_token() }}">
		<input type="hidden" name="status" value="out">		
		<input type="hidden" name="current_visit_id" value=2>

	<!-- User input -->
		Employee: <input type="radio" name="user_role_id" value=1>
		<br>
		Visitor: <input type="radio" name="user_role_id" value=2>
		<br>
		Name: <input type="text" name="name">
		<br><br>
		E-mail: <input type="email" name="email">
		<br><br>
		Password: <input type="password" name="password">
		<br><br>
		<button type="submit">Register</button>
	</form>
</body>
</html>