
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setProducts(data));
    }, []);
    const handleCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };
    return (
        <div className="shop-container">
            <div>
                <div className="grid grid-cols-3 gap-11 mt-[120px] pl-[104px] pr-[82px]">
                    {
                        products.map(product => <Product key={product.id} product={product} handleCart={handleCart}></Product>)
                    }
                </div>
            </div>
            <div className="sticky top-20 h-[500px] bg-red-100">
                <div>
                    <h3>Cart summary</h3>
                    <p>Length: {cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;;