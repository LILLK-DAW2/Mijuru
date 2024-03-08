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

        return response()->json(['token' => $token], 200);
    }}
