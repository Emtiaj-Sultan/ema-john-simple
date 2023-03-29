import React from 'react';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className="h-20 bg-[#1C2B35] flex justify-between items-center px-28 w-full fixed top-0 z-10">
            <img src={logo} alt="" />
            <div className="text-[17px] leading-[20px] tracking-[0.005em] text-white space-x-8">
                <a className="hover:text-amber-500" href="/order">Order</a>
                <a className="hover:text-amber-500" href="/orderPreview">Order Preview</a>
                <a className="hover:text-amber-500" href="/manageInventory">Manage Inventory</a>
                <a className="hover:text-amber-500" href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;