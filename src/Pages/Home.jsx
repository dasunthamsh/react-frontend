import React, {useEffect, useState} from 'react';
import axios from "axios";
import coverImage from '../Assets/runImage.png'
import {Link} from "react-router-dom";
import Hero from "../Components/Hero";

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);
    // if we use [] rub only once after the initial render
    // if we use [id] triggers when state changes

    return (
        <div className="p-10">
            {/* Hero Section */}
            <Hero
            coverImage={coverImage}
            title="Welcome to our store discover the Best Shoes"
            subtitle="We have the best products for you"
            />

            {/* Featured Products Section */}
            <div className="mt-10">
                <h3 className="text-2xl font-semibold mb-4">Featured Products</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" >

                    {products.map((product) => (
                        <Link to={`/product/${product._id}`}>
                            <div className="bg-white p-6 rounded-lg shadow-md" key={product._id}>
                                <img src={`http://localhost:3001/${product.imagePath}`} alt={product.productName} className="w-full h-48 object-cover rounded-md" />
                                <h4 className="mt-2 text-xl font-semibold">{product.productName}</h4>
                                <p className="mt-1 text-gray-600">Rs : {product.price}</p>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Home;
