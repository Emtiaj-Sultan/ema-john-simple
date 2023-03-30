
import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setProducts(data));
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        console.log(storedCart);
    }, []);

    const handleCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    };
    const removeToCart = (product) => {
        removeFromDb(product.id);
    };
    return (
        <div className="shop-container relative">
            <div>
                <div className="grid grid-cols-3 gap-11 mt-[120px] pl-[104px] pr-[82px] pb-6">
                    {
                        products.map(product => <Product key={product.id} product={product} handleCart={handleCart}
                            removeToCart={removeToCart}></Product>)
                    }
                </div>
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;;