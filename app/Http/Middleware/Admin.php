<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class Admin
{

    public function __construct() {

    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        if (Auth::check()) {
            if (Auth::user()->user_role_id === 3) {
                // User is an admin
                return $next($request);
            }
            // User is not an admin
            return redirect('/')->withError("Sorry, you are not an admin.");
        }
        // User is not logged in
        return redirect('/auth/login');
    }
}
