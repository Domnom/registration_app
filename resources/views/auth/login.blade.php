<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
</head>
<body>
	<form method="POST" action="/auth/login">
		<input type="hidden" name="_token" value="{{ csrf_token() }}">
		E-mail: <input type="text" name="email">
		<br><br>
		Password: <input type="password" name="password">
		<br><br>
		<button type="submit">Login</button>
		<br><br>
		<a href="/auth/register">Create an account</a>
	</form>
</body>
</html>