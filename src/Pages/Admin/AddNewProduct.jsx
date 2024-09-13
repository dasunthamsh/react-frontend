import React from 'react';
import Sidebar from "../../Components/AdminSection/Sidebar";
import AddProduct from "../../Components/AdminSection/Addproduct";
function AddNewProduct() {
    return (
        <div className="flex">
            <Sidebar />
            <AddProduct />
        </div>
    );
}

export default AddNewProduct;
