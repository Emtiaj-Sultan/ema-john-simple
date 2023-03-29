
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setProducts(data));
    }, []);
    return (
        <div className="shop-container">
            <div className="grid grid-cols-3 gap-11 pt-[120px] pl-[104px] pr-[82px]">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div>
                <h3>Cart summary</h3>
            </div>
        </div>
    );
};

export default Shop;;