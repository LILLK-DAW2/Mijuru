<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class CampusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('campus')->insert([
            'nombre_campus' => 'Campus A',
            'descripcion' => 'Descripción del Campus A',
            'foto_portada' => 'foto1.jpg',
            'creador' => 1, // ID del usuario creador
            'foro_padre' => null,
            'herramientas_campus' => json_encode(['herramienta1', 'herramienta2']),
            'estado' => '1',
            'fecha_b' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
