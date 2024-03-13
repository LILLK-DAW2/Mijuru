<?php

namespace App\Http\Controllers\Log;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LogAuth extends Controller
{
    public function login(Request $request)
    {
        // Validación de los campos de entrada
        $request->validate([
            'nombre_u' => 'required|string|max:20',
            'password' => 'required|string',
        ]);

        // Obtener las credenciales del request
        $credenciales = $request->only('nombre_u', 'password');

        // Buscar al usuario en la base de datos por su nombre de usuario
        $user = User::where('nombre_u', $credenciales['nombre_u'])->first();
        if (!$user) {
            // Si el usuario no existe, devolver un error de credenciales inválidas
            return response()->json(['error' => 'Credenciales no válidas.'], 401);
        }

        // Verificar si el usuario está eliminado
        if ($user->estado == 0) {
            // Si el usuario está eliminado, devolver un error
            return response()->json(['error' => 'El usuario está eliminado.'], 401);
        }

        // Verificar la contraseña
        if (!Hash::check($credenciales['password'], $user->password)) {
            // Si la contraseña no coincide, devolver un error de credenciales inválidas
            return response()->json(['error' => 'Credenciales no válidas.'], 401);
        }

        // Verificar si ya existe un token
        $token = $user->remember_token;
        if (!$token) {
            // Si no existe un token, generar uno nuevo
            $token = $request->session()->token();
            $user->update(['remember_token' => $token]);
            $user->save();
        }

        // Iniciar sesión con el usuario
        Auth::login($user);

        // Devolver el token en la respuesta
        return response()->json(['token' => $token], 200);
    }


    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        // Obtener el token de la solicitud

        $token = $request->token;
        //dd($token);


        // Buscar al usuario con el token proporcionado
        $user = User::where('remember_token', $token)->first();

        if ($user) {
            // Actualizar el campo remember_token a null
            $user->update(['remember_token' => null]);
            $user->save();
            return response()->json(['mensaje' => 'Cerraste sesión exitosamente'], 200);
        } else {
            return response()->json(['error' => 'No se encontró ningún usuario con el token proporcionado'], 404);
        }
    }
}
