<?php

namespace app\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Campus extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'campus';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id_campus';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombre_campus',
        'descripcion',
        'foto_portada',
        'creador',
        'foro_padre',
        'herramientas_campus',
        'estado',
        'fecha_c',
        'fecha_b',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'herramientas_campus' => 'array',
        'fecha_c' => 'date',
        'fecha_b' => 'date',
    ];

    /**
     * Get the user who created the campus.
     */
    public function creator()
    {
        return $this->belongsTo(User::class, 'creador', 'id');
    }

    /**
     * Get the parent forum of the campus.
     */
    public function parentForum()
    {
        return $this->belongsTo(Campus::class, 'foro_padre', 'id_campus');
    }
}
