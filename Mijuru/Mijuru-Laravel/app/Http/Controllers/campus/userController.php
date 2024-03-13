<?php

namespace App\Http\Controllers\campus;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class userController extends Controller

{
    /**
     * Obtiene todos los usuarios.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            $users = User::all();
            return response()->json($users, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json('No se encontraron usuarios', 404);
        } catch (\Exception $e) {
            return response()->json('Error al obtener usuarios: ' . $e->getMessage(), 500);
        }
    }
    public function show(Request $request)
    {
        try {
            // Verificar si se proporcionó un token en la solicitud
            $token = $request->token;
            if (!$token) {
                return response()->json('No se proporcionó un token en la solicitud', 400);
            }

            // Buscar el usuario asociado al token en la base de datos
            $user = User::where('remember_token', $token)->first();
            if (!$user) {
                return response()->json('Token no válido', 401);
            }

            // Devolver la información del usuario
            return response()->json($user, 200);
        } catch (\Exception $e) {
            return response()->json('Error al obtener el usuario: ' . $e->getMessage(), 500);
        }
    }

    /**
     * Almacena un nuevo usuario.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'nombre_u' => 'required|string|unique:users|max:255',
                'nombre' => 'required|string|max:255',
                'apellidos' => 'required|string|max:255',
                'email' => 'required|email|unique:users|max:255',
                'password' => 'required|string|max:255',
                'fecha_n' => 'required|date',
                'telefono' => 'nullable|string|max:255',
                'direccion' => 'nullable|string|max:255',
                'activo' => 'string|max:1',
                'foto_perfil' => 'nullable|image|max:2048',
                'tipo_usuario' => 'string|max:1',
                'estado' => 'string|max:1',
                'deleted_at' => 'nullable|date',
            ]);
            $request['estado'] = '1';
            // Hash de la contraseña
            $request['password'] = bcrypt($request['password']);

            // Crear el registro
            User::create($request->all());

            // Retornar la respuesta
            return response()->json('Usuario creado con éxito', 201);
        } catch (ValidationException $e) {
            return response()->json($e->errors(), 422);
        } catch (Exception $e) {
            return response()->json('Error al crear usuario: ' . $e->getMessage(), 500);
        }
    }

    /**
     * Elimina un usuario existente.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
        public function destroy(Request $request)
        {
            try {
                $id = $request->input('id');
                $fecha= date(now());
                //dd($fecha);
                $user = User::findOrFail($id);
                $user->update(['estado' => '0', 'deleted_at' => $fecha,'email' => '']);
                return response()->json('Usuario eliminado con éxito', 200);
            } catch (ModelNotFoundException $e) {
                return response()->json('Usuario no encontrado', 404);
            } catch (Exception $e) {
                return response()->json('Error al eliminar usuario: ' . $e->getMessage(), 500);
            }
        }

    /**
     * Actualiza un usuario existente.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        try {
            $request->validate([
                'nombre_u' => 'required|string|max:255',
                'nombre' => 'required|string|max:255',
                'apellidos' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'password' => 'nullable|string|max:255',
                'fecha_n' => 'required|date',
                'telefono' => 'nullable|string|max:255',
                'direccion' => 'nullable|string|max:255',
                'activo' => 'string|max:1',
                'foto_perfil' => 'nullable|image|max:2048',
                'tipo_usuario' => 'string|max:1',
                'estado' => 'string|max:1',
                'deleted_at' => 'nullable|date',
            ]);

            $id = $request->input('id');
            $user = User::findOrFail($id);

            // Actualizar el registro
            $user->update($request->all());

            // Retornar la respuesta
            return response()->json('Usuario actualizado con éxito', 200);
        } catch (ValidationException $e) {
            return response()->json($e->errors(), 422);
        } catch (ModelNotFoundException $e) {
            return response()->json('Usuario no encontrado', 404);
        } catch (Exception $e) {
            return response()->json('Error al actualizar usuario: ' . $e->getMessage(), 500);
        }
    }}
