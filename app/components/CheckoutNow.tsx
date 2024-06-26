"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToBag";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function CheckoutNow({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();
  const { data: session } = useSession();
  const router = useRouter();

  function buyNow(price_id: string) {
    if (!session?.user) {
      signIn();
    } else if (session.user && !session.user.phone) {
      router.push("/register");
    } else {
      checkoutSingleItem(price_id);
    }
  }

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  return (
    <Button
      variant={"outline"}
      onClick={() => {
        buyNow(product.price_id);
      }}
    >
      Checkout Now
    </Button>
  );
}
