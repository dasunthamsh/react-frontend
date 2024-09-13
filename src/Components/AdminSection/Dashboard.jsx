import React, { useEffect, useState } from 'react';
import axios from "axios";

const Dashboard = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = () => {
        axios.get(`http://localhost:3001/admin-dashboard`)
            .then(response => setOrders(response.data))
            .catch(error => {
                console.error('Error fetching orders:', error);
                setError('Failed to fetch orders. Please try again later.');
            });
    };

    return (
        <div className="flex-1 p-10">
            <h2 className="text-3xl font-semibold">Dashboard</h2>

            {/* Card Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold">Total Products</h3>
                    <p className="text-gray-600">150</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold">Total Orders</h3>
                    <p className="text-gray-600">45</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold">Total Users</h3>
                    <p className="text-gray-600">78</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold">Revenue</h3>
                    <p className="text-gray-600">$3400</p>
                </div>
            </div>

            {/* Table Section */}
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-8 text-center">Order History</h1>
                {error && <p className="text-red-600 text-center mb-4">{error}</p>}
                {orders.length === 0 ? (
                    <p className="text-xl text-gray-600 text-center">No orders found.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border-collapse overflow-hidden shadow-sm rounded-md">
                            <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="py-3 px-6 text-left">Email</th>
                                <th className="py-3 px-6 text-left">Phone Number</th>
                                <th className="py-3 px-6 text-left">Address</th>
                                <th className="py-3 px-6 text-left">Total Price</th>
                                <th className="py-3 px-6 text-left">Order Date</th>
                                <th className="py-3 px-6 text-left">Actions</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {orders.map(order => (
                                <tr key={order._id}>
                                    <td className="py-4 px-6">{order.email}</td>
                                    <td className="py-4 px-6">{order.phoneNumber}</td>
                                    <td className="py-4 px-6">{order.address}</td>
                                    <td className="py-4 px-6">Rs {order.totalPrice}</td>
                                    <td className="py-4 px-6">{new Date(order.orderDate).toLocaleDateString()}</td>
                                    <td className="py-4 px-6">
                                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                            shiped
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
