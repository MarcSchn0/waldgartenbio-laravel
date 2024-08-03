<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'p_img',
        'p_name',
        'p_price',
    ];
}
