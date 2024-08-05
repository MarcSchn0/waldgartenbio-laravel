<?php

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
            $table->decimal('p_price');
            $table->text('p_description');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
