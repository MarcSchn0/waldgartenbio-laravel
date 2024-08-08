import { Button } from "@/Components/ui/button";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Product } from "@/types";
import {Input} from "@/Components/ui/input";
import {useState} from "react";

interface Props {
    product: Product;
}

export function ShopItem({ product }: Props) {
    const [fieldValue, setFieldValue] = useState("");

    const redirectToDetails = (id: string) => {
        window.location.href = route('shop.show', { id: id });
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
            <div className="relative">
                <img draggable={false}
                     src={"http://[::1]:5173/resources/js/Components/images/" + product.p_img}
                     alt="Product Image"
                     className="w-full h-full rounded-2xl object-contain"
                />

            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-4">{product.p_name}</h3>
                    <span className="text-2xl font-bold text-black mb-4">{product.p_type}</span>
                    <p className="text-muted-foreground mb-6">
                        {product.p_description}
                    </p>
                </div>
                <div className="flex flex-col mt-auto">
                    <Input id={product.id.toString()} min={1} className="mb-3" type="number" placeholder="Menge:" onChange={event => setFieldValue(event.target.value)} />
                    <Button onClick={() => { redirectToDetails(product.id.toString()); }} size="sm">
                        <ShoppingCartIcon className="w-5 h-5" /> Zum Warenkorb hinzufügen
                    </Button>
                </div>
            </div>
        </div>
    );
}


