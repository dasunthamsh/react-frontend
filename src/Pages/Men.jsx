import React, {useEffect, useState} from 'react';
import Hero from "../Components/Hero";
import coverImage from "../Assets/men-shoe-banner.jpg";
import axios from "axios";
import {Link} from "react-router-dom";
const Men = ({email}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/products/category/men')
            .then(response => setProducts(response.data))
            .catch(err => console.log(err));
    }, []);

    return (


    <div className="p-10">

        <Hero
            coverImage={coverImage}
            title="Welcome to our Mens shoe store"
            subtitle="We have the best products for you"
        />
        <h2>welcome{email}</h2>

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

export default Men;
