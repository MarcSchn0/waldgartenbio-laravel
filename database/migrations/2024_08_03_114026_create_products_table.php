<?php

use App\Enums\ProductType;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('p_img');
            $table->string('p_name');
            $table->text('p_description');
            $table->string('p_color');
            $table->enum('p_type', array_column(ProductType::cases(), 'value'));
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
