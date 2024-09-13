import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Store} from "react-notifications-component";

const ProductDetail = ({ loggedInUser }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:3001/product/${id}`)
            .then(response => setProduct(response.data))
            .catch(err => console.log(err));
    }, [id]);

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (value >= 1) {
            setQuantity(value);
        }
    };

    const handleAddToBag = () => {
        const formData = new FormData();
        formData.append('productId', id);
        formData.append('productName', product.productName);
        formData.append('price', product.price);
        formData.append('quantity', quantity);
        formData.append('selectedColor', selectedColor);
        formData.append('selectedSize', selectedSize);
        formData.append('email', loggedInUser); // Assuming loggedInUser contains email

        axios.post(`http://localhost:3001/product/${id}`, formData)
            .then(response => {
                console.log('Product added to cart:', response.data);
                Store.addNotification({
                    title: "Success!",
                    message: "Login successful!",
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    dismiss: {
                        duration: 3000,
                        onScreen: true
                    }
                });
                // Optionally, you can reset form fields or show a success message
            })
            .catch(error => {
                console.error('Error adding product to cart:', error);
                // Handle error scenarios
            });
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="p-10">
            <div className="font-sans">
                <div className="p-6 lg:max-w-7xl max-w-2xl mx-auto">
                    <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="w-full lg:sticky top-0 text-center">
                            <div className="lg:h-[600px]">
                                <img src={`http://localhost:3001/${product.imagePath}`} alt={product.productName} className="lg:w-11/12 w-full h-full rounded-xl object-cover object-top" />
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-wrap items-start gap-4">
                                <div>
                                    <h2 className="text-2xl font-extrabold text-gray-800">{product.productName}</h2>
                                    <p className="text-sm text-gray-400 mt-2">{product.category}</p>
                                </div>
                            </div>

                            <hr className="my-8" />

                            <div id="priceSection" className="flex flex-wrap gap-4 items-start">
                                <div>
                                    <p className="text-gray-800 text-3xl font-bold">Rs: {product.price}</p>
                                    <p className="text-gray-400 text-xl mt-1"><strike>Rs: 42</strike> <span className="text-sm ml-1">Tax included</span></p>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <button type="button" className="px-2.5 py-1.5 bg-pink-100 text-xs text-pink-600 rounded-md flex items-center">
                                        <svg className="w-3 mr-1" fill="currentColor" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        4.8
                                    </button>
                                    <button type="button" className="px-2.5 py-1.5 bg-green-100 text-xs text-green-600 rounded-md flex items-center">
                                        In Stock
                                    </button>
                                </div>
                            </div>

                            <hr className="my-8" />

                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Choose a Color</h3>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <button type="button" className={`w-10 h-10 rounded-full bg-red-500 ${selectedColor === 'red' ? 'ring-2 ring-offset-2 ring-red-500' : ''}`} onClick={() => setSelectedColor('red')}></button>
                                    <button type="button" className={`w-10 h-10 rounded-full bg-blue-500 ${selectedColor === 'blue' ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`} onClick={() => setSelectedColor('blue')}></button>
                                    <button type="button" className={`w-10 h-10 rounded-full bg-green-500 ${selectedColor === 'green' ? 'ring-2 ring-offset-2 ring-green-500' : ''}`} onClick={() => setSelectedColor('green')}></button>
                                    <button type="button" className={`w-10 h-10 rounded-full bg-yellow-500 ${selectedColor === 'yellow' ? 'ring-2 ring-offset-2 ring-yellow-500' : ''}`} onClick={() => setSelectedColor('yellow')}></button>
                                </div>
                            </div>

                            <hr className="my-8" />

                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Choose a Size</h3>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <button type="button" className={`px-4 py-2 border ${selectedSize === '34' ? 'border-gray-500 ring-2 ring-offset-2 ring-gray-500' : 'border-gray-300'} rounded-md text-sm text-gray-800`} onClick={() => setSelectedSize('34')}>34</button>
                                    <button type="button" className={`px-4 py-2 border ${selectedSize === '35' ? 'border-gray-500 ring-2 ring-offset-2 ring-gray-500' : 'border-gray-300'} rounded-md text-sm text-gray-800`} onClick={() => setSelectedSize('35')}>35</button>
                                    <button type="button" className={`px-4 py-2 border ${selectedSize === '36' ? 'border-gray-500 ring-2 ring-offset-2 ring-gray-500' : 'border-gray-300'} rounded-md text-sm text-gray-800`} onClick={() => setSelectedSize('36')}>36</button>
                                    <button type="button" className={`px-4 py-2 border ${selectedSize === '37' ? 'border-gray-500 ring-2 ring-offset-2 ring-gray-500' : 'border-gray-300'} rounded-md text-sm text-gray-800`} onClick={() => setSelectedSize('37')}>37</button>
                                </div>
                            </div>

                            <hr className="my-8" />

                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Quantity</h3>
                                <div className="flex items-center gap-2 mt-4">
                                    <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">-</button>
                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={handleQuantityChange}
                                        className="w-16 p-2 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                        min="1"
                                    />
                                    <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">+</button>
                                </div>
                            </div>

                            <hr className="my-8" />

                            <div>
                                <p className="text-sm text-gray-500 mt-1">{product.productDescription}</p>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 mt-8">
                                <button type="button" onClick={handleAddToBag} className="w-full lg:w-auto px-3 py-2 bg-black text-sm text-white rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800">
                                    Add to cart
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
