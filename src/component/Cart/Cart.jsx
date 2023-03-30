import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }
    const tax = total * 7 * 0.01;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className="py-7 sticky top-20 bg-[#FFE0B3]">
            <h3 className="text-center text-2xl pb-12 text-[#1C2B35]">Order summary</h3>
            <div className="pl-6 cart-items">
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default Cart;