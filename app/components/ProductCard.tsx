"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingBag, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useShoppingCart } from "use-shopping-cart";

const ProductCard = ({
  product,
  dimension,
}: {
  product: any;
  dimension: any;
}) => {
  const { addItem } = useShoppingCart();

  const [qty, setQty] = useState(1);

  const incrementQty = () => {
    setQty((prev) => prev + 1);
  };

  const decrementQty = () => {
    if (qty > 1) setQty((prev) => prev - 1);
  };

  const productModel = {
    name: product.name,
    description: product.description,
    price: product.price,
    currency: "USD",
    image: product.imageUrl,
    price_id: product.price_id,
  };

  return (
    <div className="group relative">
      <div
        className={`relative ${dimension} overflow-hidden 
                 lg:h-80`}
      >
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.imageUrl}
            alt="Product Image"
            className="bg-gray-200 rounded-lg group-hover:opacity-60 
        h-full object-cover object-center lg:h-full lg:w-full"
            width={500}
            height={500}
            priority
          />
        </Link>
        <div
          className="w-full flex items-center justify-between gap-2
        h-12 bg-black -bottom-12 absolute
        group-hover:bottom-0 transition-all duration-500"
        >
          <Button
            onClick={decrementQty}
            className="border-r border-y-0 border-l-0 border-white rounded-none 
            bg-transparent hover:bg-primary h-full"
            variant="outline"
          >
            <Minus className="text-white" />
          </Button>

          <Button
            onClick={() => {
              setQty(1);
              addItem(productModel, { count: qty });
              toast.success(`${qty} ${product.name} added to the cart`);
            }}
            className="flex gap-3 justify-center items-center rounded-none
             group-hover:bg-black bg-black hover:underline"
          >
            <span className="text-white font-bold uppercase">Add to Bag</span>
            <div className="relative">
              <ShoppingBag className="text-white" />
              <span
                className="flex items-center justify-center w-6 h-6 
            text-black text-xs font-bold rounded-full bg-white absolute 
            -top-2 -right-3"
              >
                {qty}
              </span>
            </div>
          </Button>
          <Button
            onClick={incrementQty}
            className="rounded-none border-white border-l border-y-0 border-r-0
            bg-transparent hover:bg-primary h-full"
            variant="outline"
          >
            <Plus className="text-white" />
          </Button>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.categoryName}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
