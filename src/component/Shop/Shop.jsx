
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
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            // console.log(addedProduct);
        }
        setCart(savedCart);
    }, [products]);

    const handleCart = (product) => {
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product.id);
    };

    const removeToCart = (product) => {
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if (product.quantity > 0) {
            if (!exists) {
                product.quantity = 0;
                newCart = [...cart, product];
            }
            else {
                exists.quantity = exists.quantity - 1;
                if (exists.quantity < 0) {
                    exists.quantity = 0;
                    return;
                }
                else {
                    const remaining = cart.filter(pd => pd.id !== product.id);
                    newCart = [...remaining, exists];
                }
            }
        }
        setCart(newCart);
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