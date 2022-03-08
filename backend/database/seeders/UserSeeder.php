<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users= 
        [
            [
                'name'     => 'Rasheed',
                'email'    => 'rasheed@gmail.com',
                'password' => Hash::make('password'),
                'image' => 'images/rash2.jpg',
                'created_at' => \Carbon\Carbon::now(),

            ],
            [
                'name'     => 'Carla',
                'email'    => 'carla@gmail.com',
                'password' => Hash::make('password'),
                'image' => 'images/girl6.jpg',
                'created_at' => \Carbon\Carbon::now(),
            ],
            [
                'name'     => 'Skye',
                'email'    => 'Skye@gmail.com',
                'password' => Hash::make('password'),
                'image' => 'images/girl7.jpg',
                'created_at' => \Carbon\Carbon::now(),
            ],
            [
                    'name'     => 'Leila',
                    'email'    => 'Leila@gmail.com',
                    'password' => Hash::make('password'),
                    'image' => 'images/girl8.jpg',
                    'created_at' => \Carbon\Carbon::now(),
            ],
            [
                'name'     => 'Laura',
                'email'    => 'laura@gmail.com',
                'password' => Hash::make('password'),
                'image' => 'images/girl5.jpg',
                'created_at' => \Carbon\Carbon::now(),
            ]
        ];
        DB::table('users')->insert($users);
    }
}
