<?php

use App\Http\Controllers\productController;
use App\Http\Controllers\ProfileController;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});*/

Route::get('/', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('shop', ProductController::class)
    ->only(['index', 'store','show']);

//Route::get('/shop/{id}', [ProductController::class, 'show'])->name('shop.show');

Route::get('/shop/{id}', function ($id) {
    $product = Product::findOrFail($id);
    return Inertia::render('Store/Detail', [
        'product' => $product
    ]);
})->name('shop.show');

require __DIR__.'/auth.php';
