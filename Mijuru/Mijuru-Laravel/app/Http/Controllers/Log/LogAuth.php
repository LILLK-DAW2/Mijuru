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
        $request->validate([
            'nombre_u' => 'required|string|max:20',
            'password' => 'required|string',
        ]);

        $credenciales = $request->only('nombre_u', 'password');

        $user = User::where('nombre_u', $credenciales['nombre_u'])->first();
        if (!$user) {
            return response()->json(['error' => 'Credenciales no válidas.'], 401);
        }

        if ($user->estado == 0) {
            return response()->json(['error' => 'El usuario está eliminado.'], 401);
        }

        if (!Hash::check($credenciales['password'], $user->password)) {
            return response()->json(['error' => 'Credenciales no válidas.'], 401);
        }

        Auth::login($user);
        $token = $request->session()->token();
        $user->update(['remember_token' => $token]);
        $user->save();

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
