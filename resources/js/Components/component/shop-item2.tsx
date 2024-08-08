import { Button } from "@/Components/ui/button"
import {Product} from "@/types";
import {ShoppingCartIcon} from "@heroicons/react/24/outline";

export function ShopItem2({product}: {product: Product}) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-background rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0000004D] to-transparent z-10" />
          <img
            src="http://[::1]:5173/resources/js/Components/images/cherry_tomato.png"
            alt="Product Image"
            width={500}
            height={500}
            className="h-64 w-full object-cover"
            style={{ aspectRatio: "500/500", objectFit: "cover" }}
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">{product.p_name}</h3>
            <span className="text-2xl font-bold text-primary"></span>
          </div>
          <p className="text-muted-foreground mb-6">
              {product.p_description}
          </p>
          <div className="flex items-center justify-between">
            <Button size="sm"><ShoppingCartIcon className="w-5 h-5" /> Zum Warenkorb hinzufügen</Button>
          </div>
        </div>
      </div>
    </div>
  )
}


