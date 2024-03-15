<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up():void
    {
        Schema::create('campus', function (Blueprint $table) {
            $table->bigIncrements('id_campus');
            $table->string('nombre_campus', 60);
            $table->string('descripcion', 255)->nullable();
            $table->string('foto_portada')->nullable();
            $table->unsignedBigInteger('creador');
            $table->unsignedBigInteger('foro_padre')->nullable();
            $table->json('herramientas_campus');
            $table->string('estado', 1);
            $table->date('fecha_b')->nullable();
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
