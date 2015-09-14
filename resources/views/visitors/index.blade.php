@extends('layouts.dashboard')

@section('content')
	<p>Here are the visitors</p>
	<ul>
		@foreach ($visitors as $visitor)
			<li>{{ $visitor->name }}</li>
		@endforeach
	</ul>
@stop