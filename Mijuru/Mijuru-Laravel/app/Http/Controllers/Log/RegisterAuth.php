<?php

namespace App\Http\Controllers\Log;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class RegisterAuth extends Controller
{
    public function register(Request $request)
    {

        //dd($request);
        // Validar los datos del formulario
        $request->validate([
            'nombre_u'=>'required|string|max:30',
            'nombre'=>'required|string|max:20',
            'apellidos'=>'required|string|max:30',
            'fecha_n'=>'required|date',
            'email'=>'required|email|unique:users',
            'password'=>'required|string',
        ]);
        $request->created_at=now();

        // Crear el usuario
        User::create($request->all());


        // Redirigir al usuario después de registrarse
        return response()->json('Usuario Reg',200);
    }

}
