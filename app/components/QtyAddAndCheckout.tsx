"use client"

import { useState } from "react"
import AddToBag from "./AddToBag"
import CheckoutNow from "./CheckoutNow"
import QtyModBtn from "./QtyModBtn"

const QtyAddAndCheckout = ({ data }: any) => {

    const [qty, setQty] = useState(1)

    const incrementQty = () => {
        setQty(prev => prev + 1)
    }
    const decrementQty = () => {
        if (qty > 1) setQty(prev => prev - 1)
    }
    return <> <QtyModBtn
        qty={qty}
        incrementQty={incrementQty}
        decrementQty={decrementQty}
    />
        <div className="flex gap-2.5 mt-6">
            <AddToBag
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
                item_count={qty}
            />

            <CheckoutNow
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
                item_count={0}
            />
        </div>
    </>
}

export default QtyAddAndCheckout