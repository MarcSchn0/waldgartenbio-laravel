<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'p_img',
        'p_name',
        'p_price',
        'p_description',
    ];
}
