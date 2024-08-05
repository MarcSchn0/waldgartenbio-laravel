import React from 'react';
import {ShoppingCartIcon} from '@heroicons/react/24/outline';
import {Button, Card, CardHeader, Image, Tooltip} from "@nextui-org/react";
import {Product} from "@/types";

interface Props {
    product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {

    const redirectToDetails = (id: string) => {
        window.location.href = route('shop.show', {id: id});
    };



    return (
        <div className="max-w-xs w-full">
            <Card isPressable onPress={() => redirectToDetails(product.id.toString())} className="h-full group">
                <CardHeader className="relative z-10 flex-col items-start">
                    <div className="relative w-full h-48">
                        <Image isZoomed
                               src={"http://[::1]:5173/resources/js/Components/images/"+product.p_img}
                               alt={product.p_img}
                               className="inset-0 w-full h-full object-cover rounded-t-lg"
                               loading="lazy"
                        />
                    </div>
                </CardHeader>
                <div className="flex flex-col w-full flex-auto p-4">
                    <h1 className="text-lg font-semibold text-slate-900 mb-2 group-hover:underline">
                        {product.p_name}
                    </h1>
                    <p>{product.p_description} </p>
                    <p className="text-lg font-semibold text-slate-500 mb-2">{product.p_price} €</p>
                    <Tooltip content="Zum Warenkorb hinzufügen">
                        <Button onPress={() => redirectToDetails(product.id.toString())} color="primary">
                            <ShoppingCartIcon className="w-5 h-5"/>
                        </Button>
                    </Tooltip>
                </div>
            </Card>
        </div>
    );
}

export default ProductCard;
