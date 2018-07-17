<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cubiertos extends Model
{
    protected $table ="cubiertos";
    protected $primaryKey ="id_cubiertos";
    protected $fillable = ['id_cubiertos','nombre','cantidad','condicion'];
}
