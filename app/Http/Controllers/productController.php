<?php

namespace App\Http\Controllers;

use App\Models\product;
use Illuminate\Http\Request;

class productController extends Controller
{
    public function index()
    {
        return product::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'p_img' => ['required'],
            'p_name' => ['required'],
            'p_price' => ['required', 'numeric'],
        ]);

        return product::create($data);
    }

    public function show(product $product)
    {
        return $product;
    }

    public function update(Request $request, product $product)
    {
        $data = $request->validate([
            'p_img' => ['required'],
            'p_name' => ['required'],
            'p_price' => ['required', 'numeric'],
        ]);

        $product->update($data);

        return $product;
    }

    public function destroy(product $product)
    {
        $product->delete();

        return response()->json();
    }
}
