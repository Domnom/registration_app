
	<div>
		<p>Here are the employees</p>
		<table width=50% border=1px>
			<thead>
				<tr>
					<td>Name</td><td>email</td><td>status</td>
				</tr>
			</thead>
			<tbody>
				<tr ng-repeat="employee in employees">
					<td><a href="/employee/@{{employee.id}}">@{{ employee.name }}</a></td>
					<td>@{{ employee.email }}</td>
					<td>@{{ employee.status }}</td>
					<td><input type="button" value="edit" ng-click="getEmployee(employee.id)"/></td>
				</tr>
			</tbody>
		</table>

		<div>
			<ul>
				
			</ul>
		</div>
	</div>