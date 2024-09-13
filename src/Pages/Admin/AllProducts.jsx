import React from 'react';
import Sidebar from '../../Components/AdminSection/Sidebar';
import ProductTable from "../../Components/AdminSection/ProductTable";

function AllProducts() {
    return (
        <div className="flex">
            <Sidebar />
            <ProductTable />
        </div>
    );
}

export default AllProducts;
