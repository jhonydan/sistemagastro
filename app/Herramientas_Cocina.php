<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Herramientas_Cocina extends Model
{

    protected $table ="herramientas_cocina";
    protected $primaryKey ="id_herramienta";
    protected $fillable = ['id_herramienta','nombre','cantidad','condicion'];

}
