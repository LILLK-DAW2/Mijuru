<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table('users')->insert([
            'nombre_u'=>'dacaho',
            'nombre'=>'David',
            'apellidos'=>'Hola',
            'email'=>'dacaho2004@gmail.com',
            'password'=>Hash::make('12345'),
            'fecha_n'=>now(),
            'telefono'=>'622422105',
            'created_at'=>now(),

        ]);


    }
}
