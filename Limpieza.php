<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Limpieza extends Model
{
    protected $table ="limpieza";
    protected $primaryKey ="id_plimpieza";
    protected $fillable = ['id_plimpieza','nombre','cantidad','condicion'];
}
