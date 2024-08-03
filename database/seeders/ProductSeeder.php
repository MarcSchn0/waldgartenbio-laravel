<?php

namespace Database\Seeders;

use DB;
use Faker\Factory as Faker;
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

        // Initialize Faker
        $faker = Faker::create();

        // Generate 30 additional products
        for ($i = 0; $i < 30; $i++) {
            $products[] = [
                'p_img' => $faker->word,
                'p_name' => $faker->word . ' Tomato',
                'p_price' => $faker->randomFloat(2, 1, 100),
            ];
        }

        // Insert all products into the database
        DB::table('products')->insert($products);
    }
}
