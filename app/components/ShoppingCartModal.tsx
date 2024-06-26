"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import QtyModBtn from "./QtyModBtn";
import { X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ShoppingCartModal() {
  const { toast } = useToast();
  const { data: session } = useSession();
  const router = useRouter();
  const {
    addItem,
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  async function handleCheckoutClick(event: any) {
    event.preventDefault();

    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log(result.error);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="px-3 sm:px-5 py-6 sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="py-6">You don&apos;t have any items</h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6">
                      <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={entry.image as string}
                          alt="Product image"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col mr-2">
                        <div className="mb-2">
                          <div className="flex justify-between text-sm font-medium text-gray-900">
                            <h3 className="line-clamp-1">{entry.name}</h3>
                            <p className="ml-4">${entry.price}</p>
                          </div>
                        </div>
                        <div className="flex gap-1 justify-between">
                          <QtyModBtn
                            qty={entry.quantity}
                            incrementQty={() => addItem(entry, { count: 1 })}
                            decrementQty={() =>
                              entry.quantity === 1
                                ? {}
                                : addItem(entry, { count: -1 })
                            }
                          />
                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => removeItem(entry.id)}
                              className="font-medium text-primary hover:text-red-500"
                            >
                              <X className="text-red-500" />
                            </button>
                          </div>
                        </div>

                        <div className="mt-1 flex flex-1 items-end justify-between text-xs">
                          <p className="text-gray-500">QTY: {entry.quantity}</p>
                          <p className="text-gray-500">
                            Total: ${entry.quantity * entry.price}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          <div className="border-t border-gray-200 px-3 sm:px-4 py-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout.
            </p>

            <div className="mt-6">
              <Button
                onClick={
                  cartCount === 0
                    ? () => {
                        toast({
                          description: "No items in the cart to Checkout",
                        });
                      }
                    : (e) => {
                        if (!session?.user) {
                          signIn();
                        } else if (session.user && !session.user.phone) {
                          router.push("/register");
                        } else {
                          handleCheckoutClick(e);
                        }

                        handleCartClick();
                      }
                }
                className="w-full bg-[#761f54] hover:bg-[#AB367E]"
              >
                Checkout
              </Button>
            </div>

            <div className="mt-4 flex justify-center text-center text-sm text-gray-500">
              <p className="flex flex-col gap-2">
                OR
                <button
                  onClick={() => handleCartClick()}
                  className="font-medium text-[#761f54] hover:text-[#AB367E]"
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
