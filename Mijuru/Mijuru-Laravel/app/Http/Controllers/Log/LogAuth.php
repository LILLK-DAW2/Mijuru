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

        if ($user && Hash::check($credenciales['password'], $user->password)) {

            Auth::login($user);
            $token =$request->session()->token();
            $user->remember_token=$token;
            $user->save();
            return response()->json([
                'token'=>$token
            ],200);
        }
        return 'Credenciales no válidas. Por favor, inténtalo de nuevo.';
    }
}
