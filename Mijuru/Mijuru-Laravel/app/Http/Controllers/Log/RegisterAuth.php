<?php

namespace App\Http\Controllers\Log;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Str;


class RegisterAuth extends Controller
{
    public function register(Request $request)
    {
        try {
            // Validar los datos del formulario
            $request->validate([
                'nombre_u' => 'required|string|max:30|unique:users',
                'nombre' => 'required|string|max:20',
                'apellidos' => 'required|string|max:30',
                'fecha_n' => 'required|date',
                'email' => 'required|email|unique:users',
                'password' => 'required|string',
            ]);

            // Crear el usuario
            User::create($request->all());

            // Redirigir al usuario después de registrarse
            return response()->json('Usuario Reg', 200);
        } catch (ValidationException $e) {
            // Devolver los errores de validación al formulario
            $errors = $e->errors();

            $errorMessages = [];
            foreach ($errors as $error) {
                $errorMessages = array_merge($errorMessages, $error);
            }

            $errorString = implode(', ', $errorMessages);

            return response()->json(['error' => $errorString], 422);
        } catch (QueryException $e) {
            // Si se produce un error de consulta (por ejemplo, campo único duplicado)
            $errorMessage = $e->getMessage();

            // Analizar el mensaje de error para detectar si es un error de campo único duplicado
            if (strpos($errorMessage, 'SQLSTATE[23000]: Integrity constraint violation: 1062') !== false) {
                return response()->json(['error' => 'El valor proporcionado ya está en uso.'], 422);
            }

            // Si no se puede identificar específicamente el error, devolver un mensaje genérico
            return response()->json(['error' => 'Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.'], 500);
        } catch (\Exception $e) {
            // Manejar cualquier otro error
            return response()->json(['error' => 'Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde:'.$e->getMessage()], 500);
        }
    }
}
