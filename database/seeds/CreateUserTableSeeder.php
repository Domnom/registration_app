<?php

use Illuminate\Database\Seeder;
use App\User;

class CreateUserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = new User();
        $admin->name = 'Dominic Trang';
        $admin->email = 'admin@email.com';
        $admin->password = bcrypt('s5s6adsqasd');
        $admin->user_role_id = 3;
        $admin->status = 'out';
        $admin->save();

        $employee = new User();
        $employee->name = 'Employee 1';
        $employee->email = 'employee1@email.com';
        $employee->password = bcrypt('123');
        $employee->user_role_id = 1;
        $employee->status = 'out';
        $employee->save();

        $visitor = new User();
        $visitor->name = 'Visitor 1';
        $visitor->email = 'visitor1@email.com';
        $visitor->password = bcrypt('123');
        $visitor->user_role_id = 2;
        $visitor->status = 'out';
        $visitor->save();
    }
}
