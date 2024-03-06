<?php

namespace Database\Seeders;

use app\Models\Campus;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;


class CampusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        // Obtener todos los IDs de usuarios existentes
        $userIds = User::pluck('id')->toArray();

        for ($i = 0; $i < 10; $i++) {
            $campus = new Campus();
            $campus->nombre_campus = $faker->unique()->sentence(3);
            $campus->descripcion = $faker->paragraph(3);
            $campus->foto_portada = $faker->imageUrl();
            $campus->creador = $faker->randomElement($userIds);
            $campus->estado = $faker->randomElement(['A', 'B']); // Cambiar según tus necesidades
            $campus->fecha_c = $faker->date();
            $campus->fecha_b = $faker->randomElement([null, $faker->dateTimeBetween('-1 year', 'now')]); // Puede ser nulo o una fecha aleatoria
            $campus->save();
        }
    }
}
