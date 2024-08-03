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
            <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                {products.map((product: Product) => (
                    <ProductCard product={product}/>

                ))}
            </div>
        </UserLayout>
    );
}

export default Index;
