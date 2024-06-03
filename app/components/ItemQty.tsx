import { useShoppingCart } from "use-shopping-cart"

const ItemQty = () => {
    const { cartDetails } = useShoppingCart()
    return (
        <div className="absolute border-none sm:right-4 right-0.5 sm:top-3 top-0.5 flex items-center justify-center h-6 w-6 rounded-full bg-primary">
            <span
                className="text-xs text-white font-bold border-none">
                {Object.keys(cartDetails ?? {}).length}
            </span>
        </div>
    )
}

export default ItemQty