'use client'
import {useState} from "react";

export default function ItemsEntry()
{
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    return (<div>
        <h2>Item Price</h2>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>

        <h2>Item Quantity</h2>
        <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>

        <h2>Total</h2>
        {price * quantity}
    </div>)
}