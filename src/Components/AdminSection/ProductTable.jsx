import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="p-10">
            <h2 className="text-3xl font-semibold">Products</h2>
            <table className="mt-6 min-w-full bg-white">
                <thead>
                <tr>
                    <th className="py-2">Product Name</th>
                    <th className="py-2">Price</th>
                    <th className="py-2">Image</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                    <tr key={product._id}>
                        <td className="border px-4 py-2">{product.productName}</td>
                        <td className="border px-4 py-2">{product.price}</td>
                        <td className="border px-4 py-2">
                            {product.imagePath && (
                                <img src={`http://localhost:3001/${product.imagePath}`} alt={product.productName} className="h-16"/>
                            )}

                        </td>
                        <td className="border px-4 py-2">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Update</button> <br/>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Update</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
