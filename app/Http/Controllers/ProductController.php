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
        $products = DB::table('products')->get();

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

    public function show($id)
    {
        return Inertia::render('Store/Detail', [
            'product' => Product::find($id),
        ]);
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
