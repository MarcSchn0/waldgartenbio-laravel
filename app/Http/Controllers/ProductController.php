<?php

namespace App\Http\Controllers;

use App\Models\Product;
use DB;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        // Fetch the products from the database
        $products = DB::table('products')->get();

        // Pass the products to the Inertia view
        return Inertia::render('Store/Index', [
            'products' => $products
        ]);
    }


    public function store(Request $request)
    {
        $data = $request->validate([
            'p_img' => ['required'],
            'p_name' => ['required'],
            'p_price' => ['required', 'numeric'],
        ]);

        return Product::create($data);
    }

    public function show(Product $product)
    {
        return $product;
    }

    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            'p_img' => ['required'],
            'p_name' => ['required'],
            'p_price' => ['required', 'numeric'],
        ]);

        $product->update($data);

        return $product;
    }

    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json();
    }
}
