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
        <div className="w-72 max-w-md bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative">
                <img
                    src={"http://[::1]:5173/resources/js/Components/images/" + product.p_img}
                    alt="Product Image"
                    className="w-full h-48 object-cover p-3 rounded-2xl"
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold">{product.p_name}</h3>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-black">{product.p_type}</span>
                    </div>
                    <p className="text-muted-foreground mb-6">
                        {product.p_description}
                    </p>
                </div>
                <div className="flex flex-col mt-auto">
                    <Input min={1} className="mb-3" type="number" placeholder="Menge:" onChange={event => setFieldValue(event.target.value)} />
                    <Button onClick={() => { redirectToDetails(product.id.toString()); }} size="sm">
                        <ShoppingCartIcon className="w-5 h-5" /> Zum Warenkorb hinzufügen
                    </Button>
                </div>
            </div>
        </div>
    );
}
