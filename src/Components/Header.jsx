import React from 'react';
import {Link} from "react-router-dom";
import bag from "../Assets/bag.png"
const Header = () => {
    return (
        <header className="bg-white shadow hidden md:block  relative  ">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <span className="font-bold text-xl">Brand</span>
                </div>
                {/* Navigation Links */}
                <nav className="flex space-x-6">
                    <Link to="/"> <a href="#" className="text-gray-600 hover:text-gray-900">Home</a></Link>
                    <Link to="/men"><a href="#" className="text-gray-600 hover:text-gray-900">Men</a></Link>
                    <Link to="/women"> <a href="#" className="text-gray-600 hover:text-gray-900">Women</a></Link>
                    <Link to="/kid"> <a href="#" className="text-gray-600 hover:text-gray-900">Kids</a></Link>
                </nav>
                {/* Login Button */}
                <div className='flex'>
                    <Link to="/cart" ><img width={25} src={bag}/></Link>
                    <Link to="/login" className="text-gray-600 hover:text-gray-900 mx-2"> Login </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
