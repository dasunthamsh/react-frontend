import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

const Cart = ({ loggedInUser }) => {
    const [cart, setCart] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/cart/${loggedInUser}`)
            .then(response => setCart(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, [loggedInUser]);

    const updateQuantity = (id, quantity) => {
        setCart(cart.map(item => item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item));
    };

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const checkout = () => {
        const orderDetails = {
            products: cart.map(item => ({
                product: item.productName,
                price: item.price,
                quantity: item.quantity,
            })),
            email: loggedInUser,
            phoneNumber,
            address
        };

        axios.post('http://localhost:3001/cart', orderDetails)
            .then(response => {
                console.log('Order placed successfully', response.data);
                // Clear cart and reset form if needed
                setCart([]);
                setPhoneNumber('');
                setAddress('');
            })
            .catch(error => console.error('Error placing order:', error));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <table className="w-full text-left">
                        <thead>
                        <tr>
                            <th className="border-b-2 p-2">Product</th>
                            <th className="border-b-2 p-2">Price</th>
                            <th className="border-b-2 p-2">Quantity</th>
                            <th className="border-b-2 p-2">Total</th>
                            <th className="border-b-2 p-2">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cart.map(item => (
                            <tr key={item.id}>
                                <td className="border-b p-2">{item.productName}</td>
                                <td className="border-b p-2">Rs: {item.price}</td>
                                <td className="border-b p-2">
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                        className="w-16 p-1 border rounded"
                                        min="1"
                                    />
                                </td>
                                <td className="border-b p-2">Rs: {item.price * item.quantity}</td>
                                <td className="border-b p-2">
                                    <button onClick={() => removeItem(item.id)} className="text-red-600">Remove</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <div className="mt-4">
                        <div className="mb-4">
                            <label className="block mb-2">Phone Number:</label>
                            <input
                                type="text"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="w-full p-2 border rounded"
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Address:</label>
                            <textarea
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full p-2 border rounded"
                                placeholder="Enter your address"
                            />
                        </div>
                        <div className="text-right">
                            <p className="text-xl font-bold">Total: Rs: {totalPrice}</p>
                            <button onClick={checkout} className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded">Checkout</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
