<?php

use Carbon\Carbon;
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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_u')->unique();
            $table->string('nombre');
            $table->string('apellidos');
            $table->string('email')->unique();
            $table->string('password');
            $table->timestamp('fecha_n');
            $table->string('telefono')->nullable();
            $table->string('direccion')->nullable();
            $table->string('activo')->default('D');
            $table->binary('foto_perfil')->nullable();
            $table->string('tipo_usuario')->default('N');
            $table->string('estado')->default('1');
            $table->timestamp('deleted_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
