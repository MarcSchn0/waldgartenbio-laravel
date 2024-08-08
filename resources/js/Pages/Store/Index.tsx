import React from "react";
import UserLayout from "@/Layouts/UserLayout";
import {Head} from "@inertiajs/react";
import {PageProps, Product} from "@/types";
import {ShopItem} from "@/Components/ui/shop-item";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";


export default function Index({auth, products}: PageProps & { products: Product[] }) {
    const Layout = auth.user ? AuthenticatedLayout : UserLayout;

    return (
        <Layout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Shop</h2>} user={auth.user}>
            <Head title="Shop"/>

            <div className="flex justify-center items-center mt-10 ml-10 mr-10 bg-white shadow-sm rounded-lg">
                <div className="grid grid-cols-3 gap-6">
                    {products.map((product: Product) => (
                        <ShopItem key={product.id} product={product}/>
                    ))}
                </div>
            </div>


        </Layout>
    );
}
