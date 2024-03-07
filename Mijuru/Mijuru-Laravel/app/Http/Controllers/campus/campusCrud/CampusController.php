<?php

namespace App\Http\Controllers\campus\campusCrud;

use App\Http\Controllers\Controller;
use App\Models\Campus;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;

class CampusController extends Controller
{
    /**
     * Obtiene todos los campus.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            $campus = Campus::all();
            return response()->json($campus, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json('No se encontraron campus', 404);
        } catch (\Exception $e) {
            return response()->json('Error al obtener campus: ' . $e->getMessage(), 500);
        }
    }

    /**
     * Almacena un nuevo campus.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'nombre_campus' => 'required|string|max:60',
                'descripcion' => 'nullable|string|max:255',
                'foto_portada' => 'nullable|string',
                'creador' => 'required|exists:users,id',
                'foro_padre' => 'nullable|exists:campus,id_campus',
                'herramientas_campus' => 'required|json',
            ]);

            // Asignar el estado
            $request['estado'] = '1';

            // Crear el registro
            Campus::create($request->all());

            // Retornar la respuesta
            return response()->json('Campus creado con éxito', 201);
        } catch (ValidationException $e) {
            return response()->json($e->errors(), 422);
        } catch (\Exception $e) {
            return response()->json('Error al crear campus: ' . $e->getMessage(), 500);
        }
    }

    /**
     * Elimina un campus existente.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Request $request)
    {
        try {
            $idcampus = $request->input('id');
            $campus = Campus::findOrFail($idcampus);
            $campus->update(['estado' => '0', 'fecha_b' => now()]);
            return response()->json('Campus eliminado con éxito', 200);
        } catch (ModelNotFoundException $e) {
            return response()->json('Campus no encontrado', 404);
        } catch (\Exception $e) {
            return response()->json('Error al eliminar campus: ' . $e->getMessage(), 500);
        }
    }

    /**
     * Actualiza un campus existente.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        try {
            $request->validate([
                'nombre_campus' => 'required|string|max:60',
                'descripcion' => 'nullable|string|max:255',
                'foto_portada' => 'nullable|string',
                'creador' => 'required|exists:users,id',
                'foro_padre' => 'nullable|exists:campus,id_campus',
                'herramientas_campus' => 'json',
                'estado' => 'required|string|size:1',
                'fecha_b' => 'nullable|date',
            ]);

            $campus = Campus::findOrFail($request->input('id'));
            $campus->update($request->all());
            return response()->json('Campus actualizado con éxito', 200);
        } catch (ValidationException $e) {
            return response()->json($e->errors(), 422);
        } catch (ModelNotFoundException $e) {
            return response()->json('Campus no encontrado', 404);
        } catch (\Exception $e) {
            return response()->json('Error al actualizar campus: ' . $e->getMessage(), 500);
        }
    }
}
