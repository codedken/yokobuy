"use client"

import { toast } from "react-hot-toast"
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
    name: string;
    description: string;
    price: number;
    currency: string;
    image: any;
    price_id: string;
    item_count: number;
}

const AddToBag = ({
    currency,
    description,
    image,
    name,
    price,
    price_id,
    item_count,
}: ProductCart) => {
    const { addItem } = useShoppingCart();
    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id,
    }
    return (
        <Button onClick={() => {
            addItem(product, { count: item_count })
            toast.success(`${item_count} ${product.name} added to the cart`)
        }}>
            Add To Cart
        </Button>
    )
}

export default AddToBag