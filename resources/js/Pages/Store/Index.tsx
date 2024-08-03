import React, {useEffect} from "react";
import UserLayout from "@/Layouts/UserLayout";
import {Head} from "@inertiajs/react";
import {Product} from "@/types";
import ProductCard from "@/Components/ui/Productcard";



interface Props {
    products: Product[];
}

const Index: React.FC<Props> = ({ products }) => {
    return (
        <UserLayout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Shop</h2>}>
            <Head title="Shop"/>

            <div className="flex justify-center items-center mt-10 ml-10 mr-10 bg-white shadow-sm rounded-lg">
                <div className="grid grid-cols-3 gap-6">
                    {products.map((product: Product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>


        </UserLayout>
    );
}

export default Index;
