import { faCartPlus, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, price, name, seller, ratings } = props.product;
    const handleAddToCart = props.handleCart;
    return (
        <div className="product w-[300px] h-[510px] border-[1px] border-solid border-[#95A0A7] rounded-[8px] relative">
            <img className="w-[280px] h-[280px] rounded-[8px] m-2" src={img} alt={name} />
            <div className='pl-[14px]'>
                <h2 className='text-lg text-[#0E161A] tracking-[0.0015em] pt-2'>{name}</h2>
                <p className='text-base text-[#0E161A] tracking-[0.0015em]'>Price: ${price}</p>
                <p className='py-3'>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} Stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='w-full py-2 bg-[#FFE0B3] border-[1px] border-solid border-[#95A0A7] rounded-b-lg absolute bottom-0 hover:bg-amber-500'>Add to Cart <FontAwesomeIcon icon={faCartPlus} className="ml-1"></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;