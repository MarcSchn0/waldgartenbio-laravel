<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            [
                'p_img' => 'cherry_tomato.png',
                'p_name' => 'Cherry Tomato',
                'p_price' => 10.90,
            ],
            [
                'p_img' => 'cherry_tomato.png',
                'p_name' => 'Big Tomato',
                'p_price' => 20.00,
            ],
            [
                'p_img' => 'cherry_tomato.png',
                'p_name' => 'Orange Tomato',
                'p_price' => 30.00,
            ],
        ];

        DB::table('products')->insert($products);
    }
}
