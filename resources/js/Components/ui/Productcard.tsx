import tomato from "@/Components/images/cherry_tomato.png";
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import {Button, Card, CardHeader, Image} from "@nextui-org/react";
import {Product} from "@/types";

export default function ProductCard(product: Product) {

    const test = (n: number) => {
        console.log(n);
    };

    return (
        <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
            <Card isPressable onPress={() => test(2)} className="col-span-12 sm:col-span-4 h-[400px]">
                <CardHeader className="relative z-10 flex-col items-start">
                    <div className="relative w-full h-48">
                        <Image
                            src={tomato}
                            alt=""
                            className="inset-0 w-full h-full object-cover rounded-t-lg"
                            loading="lazy"
                        />
                    </div>
                </CardHeader>
                <div className="flex flex-col w-full flex-auto p-4">
                    <h1 className="text-lg font-semibold text-slate-900 mb-2">
                        {product.p_name}
                    </h1>
                    <p className="text-lg font-semibold text-slate-500 mb-2">{product.p_price} €</p>
                    <Button onPress={() => test(1)} color="primary">
                        <ShoppingCartIcon className="w-5 h-5"/>
                    </Button>
                </div>
            </Card>
        </div>
    );
}
