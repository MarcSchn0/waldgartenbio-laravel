<?php

namespace Database\Seeders;

use App\Enums\ProductType;
use DB;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [];

        // Initialize Faker
        $faker = Faker::create();

        // Generate 30 additional products
        for ($i = 0; $i < 30; $i++) {
            $products[] = [
                'p_img' => 'cherry_tomato.png',
                'p_name' => $faker->word . ' Tomato',
                'p_description' => $faker->text,
                'p_color' => $faker->word,
                'p_type' => $faker->randomElement(ProductType::cases())->value,
            ];
        }

        // Insert all products into the database
        DB::table('products')->insert($products);
    }
}
