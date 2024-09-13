import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white">
            <div className="p-4">
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            </div>
            <ul>
                <li className="p-4 hover:bg-gray-700">
                    <Link to="/admin-dashboard">Dashboard</Link>
                </li>
                <li className="p-4 hover:bg-gray-700">
                    <Link to="/products-table">Products</Link>
                </li>
                <li className="p-4 hover:bg-gray-700">
                    <Link to="/add-product">Add Product</Link>
                </li>
                <li className="p-4 hover:bg-gray-700">
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
