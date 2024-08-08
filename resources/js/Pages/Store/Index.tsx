import React from "react";
import UserLayout from "@/Layouts/UserLayout";
import {Head} from "@inertiajs/react";
import {PageProps, Product} from "@/types";
import {ShopItem} from "@/Components/ui/shop-item";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";


export default function Index({ auth, products }: PageProps & { products: Product[] }) {
    const Layout = auth.user ? AuthenticatedLayout : UserLayout;

    return (
        <Layout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Shop</h2>}
            user={auth.user}>
            <Head title="Shop" />

            <div className="flex justify-center items-center mt-10 ml-10 mr-10 bg-white shadow-sm rounded-lg">
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"> {/* Adjust grid columns based on screen size */}
                    {products.map((product: Product) => (
                        <div
                            key={product.id}
                            className="flex flex-col h-auto w-full"
                        >
                            <ShopItem product={product}/>
                        </div>
                    ))}
                </div>
            </div>

        </Layout>
    );
}

