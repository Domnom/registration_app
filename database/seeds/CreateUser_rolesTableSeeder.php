<?php

use Illuminate\Database\Seeder;
use App\User_role;

class CreateUser_rolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

    	// id = 1
        $employee = new User_role();
        $employee->role = 'employee';
        $employee->save();


        // id = 2
        $visitor = new User_role();
        $visitor->role = 'visitor';
        $visitor->save();


        // id = 3
        $admin = new User_role();
        $admin->role = 'admin';
        $admin->save();
    }
}
