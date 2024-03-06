<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('campus', function (Blueprint $table) {
            $table->bigIncrements('id_campus')->comment('Este campo almacena el ID del campus.');
            $table->string('nombre_campus', 60)->comment('Este campo almacena el nombre del campus');
            $table->string('descripcion', 255)->nullable()->comment('Este campo almacena la descripción del campus');
            $table->string('foto_portada')->comment('Este campo almacena la foto de la portada del campus');
            $table->string('creador', 30)->comment('Este campo almacena el creador del campus.');
            $table->unsignedBigInteger('foro_padre')->nullable()->comment('Este campo almacena el foro_padre si tiene.');
            $table->json('herramientas_campus')->comment('Este campo almacena en forma de json las herramientas disponibles en el campus.');
            $table->string('estado', 1)->comment('Este campo almacena el estado de este registro en la aplicación');
            $table->date('fecha_c')->comment('Este campo almacena la fecha de creación de este registro.');
            $table->date('fecha_b')->nullable()->comment('Este campo almacena la fecha de borrado de este registro.');
            $table->timestamps();

            // Foreign Key Constraints
            $table->foreign('creador')->references('id')->on('users');
            $table->foreign('foro_padre')->references('id_campus')->on('campus');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('campus');
    }
};
