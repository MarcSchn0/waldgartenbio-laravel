import { useState } from 'react';
import {Button} from "@/Components/ui/button";
import tomato from "@/Components/images/cherry_tomato.png"
import {Input} from "@/Components/ui/input";

export default function ProductCard({itemName, itemId, price}: {itemName: string, itemId: number, price: number}) {
    const [size, setSize] = useState('xs');

    return (
        <div className="flex flex-col w-80 p-4 bg-white border border-slate-200 shadow-lg rounded-lg">
            <div className="relative w-full h-48 mb-4">
                <img
                    src={tomato}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                    loading="lazy"
                />
            </div>
            <div className="flex flex-col flex-auto p-4">
                <h1 className="text-lg font-semibold text-slate-900 mb-2">
                    {itemName}
                </h1>
                <div className="text-lg font-semibold text-slate-500 mb-2">{price} €</div>
                <div className="text-sm font-medium text-slate-700 mb-4">In stock</div>

                <div className="flex flex-col space-y-2">
                    <Input type="number" placeholder="Anzahl" value={1}/>
                    <Button>zum Warenkorb hinzufügen</Button>
                </div>




            </div>
        </div>
    );
}
